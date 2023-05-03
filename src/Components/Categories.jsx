import { useState } from "react";

const Categories = ({setCategory, changeSearchValue, searchValue}) => {
  const [activeIndexMenu, ChangeMenuli] = useState(0);

  const changeActive = (indexMenu) => {
    ChangeMenuli(indexMenu);
    indexMenu === 0 ? setCategory(''):  setCategory(indexMenu);
  };

  let pizzaCategoriesArray = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытие", 
  ];

  let pizzaCategoriesArrayElement = pizzaCategoriesArray.map(
    (element, indexes) => {
      return (
        <li  key={element} onClick={() => changeActive(indexes)}   className={activeIndexMenu == indexes ? "active" : ""} >  {element}  </li>
      );
    }
  ); 
  return (
    <div className="categories">
      <ul>{pizzaCategoriesArrayElement}</ul>
    </div>
  );
};

export default Categories;
