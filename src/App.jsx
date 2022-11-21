import { useState, useEffect } from "react";
import "./App.scss";

import * as IconModule from "react-icons/sl";

console.clear();

console.log(IconModule);

const iconsList = Object.keys(IconModule)
  .map((e) => {
    return { icon: e, rand: Math.random() };
  })
  .sort((a, b) => a.rand - b.rand)
  .map((e) => e.icon)
  .splice(0, 10);

console.log(iconsList);

const App = () => {
  return (
    <div className="app">
      {iconsList.map((e, i) => {
        const TempCompnent = IconModule[e];
        return <TempCompnent key={i} />;
      })}
    </div>
  );
};

export default App;
