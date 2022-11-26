import { useState, useEffect } from "react";
import "./App.scss";

import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";

console.clear();

const App = () => {
  const [open, setOpen] = useState(false);

  const handelMouseEnter = () => setOpen((e) => !e);

  return (
    <div className="app">
      <form action="">
        <input
          required
          type="text"
          pattern="^([a-zA-Z0-9_ ]{2,})*$"
          placeholder="John Doe"
        />
        <input
          required
          type="email"
          pattern="^\w+@\w+\.(\w+){2,}$"
          placeholder="John.doe@email.com"
        />
        <input
          onMouseEnter={handelMouseEnter}
          type="button"
          value="Submit"
          data-open={open}
        />
      </form>
    </div>
  );
};

export default App;
