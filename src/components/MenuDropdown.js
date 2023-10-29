function MenuDropdown({ menuList }) {
  const renderedDropDown = menuList.map((menuItem, i) => {
    return (
      <li
        className="flex py-2 w-full cursor-pointer hover:rounded-lg hover:bg-gray-900 hover:text-white"
        key={i}
      >
        {menuItem}
      </li>
    );
  });

  //   return isDown && <ul className="">{renderedDropDown}</ul>;
  return <ul className="">{renderedDropDown}</ul>;
}

export default MenuDropdown;
