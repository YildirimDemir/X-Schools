import CodeSpace from "../ui/CodeSpace";
import TemplatePage from "../ui/TemplatePage";

export default function Css() {
    return (
        <TemplatePage
            title="CSS Tutorial"
            secondTitle="Learn CSS"
            about={`CSS is the language we use to style an HTML document.
            CSS describes how HTML elements should be displayed.
            This tutorial will teach you CSS from basic to advanced.`}
            contentColor="cyan"
            titleColor="black"
            secondTitleColor="black"
            aboutColor="black"
            code={<CodeSpace
                title={"CSS Example"}
                lang={"css"}
                readOnly={true}
                lineNumbers={true}
                codeWrapColor="gray"
                codeWrapBorderColor="black"
                titleColor="cyan"
                codeAreaColor="black"
                enterCode={`body {
          background-color: lightblue;
        }`} />
            } />
    )
}