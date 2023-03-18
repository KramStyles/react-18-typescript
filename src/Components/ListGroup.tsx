import { MouseEvent, useState } from "react";

const HandleClick = (event: MouseEvent) => {
  console.log(event);
};

// Using interface to set the type of props expected
interface ListProps {
  items: string[];
  title: string;
  // function that collects string and returns none
  onSelectItem: (item: string) => void;
}

const ListGroup = (props: ListProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1 className={"text-uppercase mt-3"}>{props.title}</h1>
      {props.items.length === 0 && <p>No places to explore!</p>}
      <ul className={"list-group container my-3"}>
        {props.items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item text-capitalize active"
                : "list-group-item text-capitalize"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              props.onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
