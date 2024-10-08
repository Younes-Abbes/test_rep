import {
  createContext,
  useContext,
  useState,
  ReactNode,
  SetStateAction,
} from "react";

interface LinkContextProps {
  selectedPage: number;
  setSelectedPage: React.Dispatch<SetStateAction<number>>;
}

const LinkContext = createContext<LinkContextProps | undefined>(undefined);

function LinkProvider({ children }: { children: ReactNode }) {
  const [selectedPage, setSelectedPage] = useState(1);

  return (
    <LinkContext.Provider value={{ selectedPage, setSelectedPage }}>
      {children}
    </LinkContext.Provider>
  );
}

function useLink() {
  const obj = useContext(LinkContext);
  if (!obj)
    throw new Error(
      "the element should be inside the LinkProvider Component !"
    );
  return obj;
}

export { useLink, LinkProvider };
