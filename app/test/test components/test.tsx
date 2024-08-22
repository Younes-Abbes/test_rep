"use client";
// components/DraggableList.tsx

import { DndContext } from "@dnd-kit/core";
import { SortableContext, useSortable, arrayMove } from "@dnd-kit/sortable";
import React, { useState } from "react";
import styles from "./DraggableList.module.css";

interface DraggableItemProps {
  id: string;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ id }) => {
  const { attributes, listeners, setNodeRef, transition, transform } =
    useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      style={{
        transition,
        transform: `translate3d(${transform?.x}px, ${transform?.y}px, 0)`,
      }}
      className={styles.item}
      {...attributes}
      {...listeners}>
      {id}
    </div>
  );
};

const DraggableList: React.FC = () => {
  const [items, setItems] = useState<string[]>([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
  ]);

  const handleDragEnd = ({ active, over }: any) => {
    if (over) {
      setItems((items) => {
        const activeIndex = items.indexOf(active.id as string);
        const overIndex = items.indexOf(over.id as string);
        return arrayMove(items, activeIndex, overIndex);
      });
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={items}>
        {items.map((item) => (
          <DraggableItem key={item} id={item} />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default DraggableList;
