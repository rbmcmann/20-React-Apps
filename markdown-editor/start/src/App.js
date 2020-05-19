import React, { useState } from "react";
import marked from "marked";
import ReactMarkdown from "react-markdown";
import "./App.css";

export default function App() {
  const [markdown, setMarkdown] = useState("# sup");

  function handleChange(e) {
    setMarkdown(e.target.value);
  }

  return (
    <div className="app">
      <textarea onChange={handleChange} value={markdown} />

      {/* <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      /> */}
      {/* Keep these packages for future use:
      https://github.com/markedjs/marked
      https://github.com/rexxars/react-markdown
      */}
      <ReactMarkdown className="preview" source={markdown} />
    </div>
  );
}
