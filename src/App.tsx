import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";

const App = () => {
  let places = ["new york", "san francisco", "los angeles"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <ListGroup
        items={places}
        title={"cities"}
        onSelectItem={handleSelectItem}
      />
      <Alert>What to do</Alert>
    </>
  );
};

export default App;
