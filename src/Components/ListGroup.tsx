import { MouseEvent, useState } from "react";

let places = ["new york", "san francisco", "los angeles"];

const HandleClick = (event: MouseEvent) => {
  console.log(event);
};

const ListGroup = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List Group</h1>
      {places.length === 0 && <p>No places to explore!</p>}
      <ul className={"list-group"}>
        {places.map((place, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item text-capitalize active"
                : "list-group-item text-capitalize"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {place}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
