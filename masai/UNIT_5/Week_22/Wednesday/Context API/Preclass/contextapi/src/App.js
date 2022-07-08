import React from "react";
import "./App.css";
import { Form } from "./components/Form";

function App() {
  const [isAuth, setIsAuth] = React.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    alert("submitted");
  };

  return (
    <div className="App">
      <Form onSubmit={onSubmit} title="LOGIN">
        <input placeholder="Name" />
      </Form>
    </div>
  );
}

export default App;
