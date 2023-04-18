import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <div>
        {/* header */}
        <h1>{blogData.name}</h1>
      </div>
      <div>
        {/* about */}
        <aside>
          <img alt="blog logo">{blogData.image}</img>
          <p>{blogData.about}</p>
        </aside>
      </div>
    </div>
  );
}

export default App;
