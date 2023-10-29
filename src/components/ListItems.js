function ListItems({ arrayItems }) {
  const renderedArrayItems = arrayItems.map((arrayItem) => {
    let id = Math.floor(Math.random() * 1000);
    return (
      <li key={id} className="text-xl flex pr-8 syneFont">
        {arrayItem}
      </li>
    );
  });
  return (
    <ul className="flex flex-row-reverse justify-center space-x-12">
      {renderedArrayItems}
    </ul>
  );
}

export default ListItems;
