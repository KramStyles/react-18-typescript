import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";
import { useState } from "react";

const App = () => {
  let places = ["new york", "san francisco", "los angeles"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [showAlert, setShowAlert] = useState(false);
  const [alertText, setAlertText] = useState("");

  const handleAlert = (text: string) => {
    setAlertText(text);
    setShowAlert(true);
  };

  return (
    <>
      <ListGroup
        items={places}
        title={"cities"}
        onSelectItem={handleSelectItem}
      />
      {showAlert && <Alert>{alertText}</Alert>}
      <Button onclick={() => handleAlert("Hello!!")}>Say Hello</Button>
      <Button onclick={() => handleAlert("Goodbye")} color="warning">
        Say Bye
      </Button>
    </>
  );
};

export default App;
