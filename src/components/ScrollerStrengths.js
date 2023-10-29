function ScrollerStrengths({ arrayItems }) {
  const renderedArrayItems = arrayItems.map((arrayItem) => {
    let id = Math.floor(Math.random() * 1000);
    return (
      <li key={id} className="text-xl flex mx-12 syneFont">
        {arrayItem}
      </li>
    );
  });
  const copyOfArrayItems = arrayItems.map((arrayItem) => {
    let id = Math.floor(Math.random() * 1000);
    return (
      <li key={id} className="text-xl flex mx-12 syneFont" aria-hidden="true">
        {arrayItem}
      </li>
    );
  });
  return (
    <ul className="flex flex-row-reverse mr-12 justify-center">
      {renderedArrayItems}
      {copyOfArrayItems}
    </ul>
  );
}

export default ScrollerStrengths;
