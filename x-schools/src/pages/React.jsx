import CodeSpace from "../ui/CodeSpace";
import TemplatePage from "../ui/TemplatePage";

export default function React() {
  return (
    <TemplatePage
      title="React Tutorial"
      secondTitle="Learn React"
      about={`React is a JavaScript library for building user interfaces.
      React is used to build single-page applications.
      React allows us to create reusable UI components.`}
      contentColor="steelblue"
      titleColor="white"
      secondTitleColor="white"
      aboutColor="white"
      code={<CodeSpace
        title={"React/JSX Example"}
        lang={"jsx"}
        readOnly={true}
        lineNumbers={true}
        codeWrapColor="steelblue"
        codeWrapBorderColor="white"
        titleColor="white"
        codeAreaColor="white"
        enterCode={`import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);`} />
      } />
  )
}