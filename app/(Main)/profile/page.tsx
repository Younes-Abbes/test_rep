import Content from "./Content";

export default async function Page() {
  return (
    <div className="h-full w-full border border-solid flex flex-col justify-around items-center p-20">
      <Content />
    </div>
  );
}
