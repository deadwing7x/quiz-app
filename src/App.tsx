import React from "react";
import "./App.css";
import Categories from "./components/Categories/Categories";

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Categories />
    </div>
  );
};

export default App;
