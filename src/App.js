import React, { useState } from "react";
import "./styles.css";

const database = {
  SciFi: [
    { name: "The Lord Of The Rings", author: "4/5" },
    { name: "1984", author: "3.5/5" },
    { name: "Brave New World", author: "3.5/5" },
    { name: "The Wheel Of Time Series", author: "3.5/5" }
  ],

  Thriller: [
    { name: " In Search of Lost Time", author: "4/5" },
    { name: "And Then There Were None", author: "3.5/5" },
    { name: "Bird Box", author: "3.5/5" },
    { name: "Descent", author: "3.5/5" }
  ],

  Adventure: [
    { name: "Treasure Island", author: "4/5" },
    { name: "Journey to the Center of the Earth", author: "3.5/5" },
    { name: "The Jungle Book", author: "3.5/5" },
    { name: "Life of Pi", author: "3.5/5" }
  ]
};

export default function App() {
  var [selectbtn, setbtn] = useState("Thriller");

  function clickHandler(item) {
    setbtn(item);
  }

  return (
    <div className="App">
      <h1>
        <span>📚</span>Books Recommendation
      </h1>

      <div>
        {Object.keys(database).map((item) => (
          <button onClick={() => clickHandler(item)}>{item}</button>
        ))}
      </div>

      <hr />

      <div className="Name">
        <ul>
          {database[selectbtn].map((show) => (
            <li key={show.name}>
              <div>{show.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
