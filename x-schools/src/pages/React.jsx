import CodeSpace from "../ui/CodeSpace";
import TemplatePage from "../ui/TemplatePage";

export default function React() {
  return (
    <TemplatePage
      title="C# Tutorial"
      secondTitle="Learn C#"
      about={`C# (C-Sharp) is a programming language developed by Microsoft that runs on the .NET Framework.
            C# is used to develop web apps, desktop apps, mobile apps, games and much more.`}
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