import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Translate from "./Components/Translate";
import Route from "./Components/Route";
import Header from "./Components/Header";
const items = [
  {
    title: "What is React?",
    content: "React is a front-end JavaScript framework.",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JavaScript library among engineers.",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components.",
  },
];
const options = [
  { label: "The Colour Red", value: "red" },
  { label: "The Colour Green", value: "green" },
  { label: "The Colour Blue", value: "blue" },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a colour"
          options={options}
          selected={selected}
          onSelectChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
