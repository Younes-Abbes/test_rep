export default function Options() {
  return (
    <div className="flex p-3 gap-4">
      <select name="currency" id="currency" className="bg-inherit">
        <option value="USD">USD</option>
      </select>
      <select name="language" id="language" className="bg-inherit">
        <option value="English">English</option>
      </select>
    </div>
  );
}
