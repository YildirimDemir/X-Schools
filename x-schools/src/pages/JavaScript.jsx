import CodeSpace from "../ui/CodeSpace";
import TemplatePage from "../ui/TemplatePage";

export default function JavaScript() {
    return (
        <TemplatePage
            title="JavaScript Tutorial"
            secondTitle="Learn JavaScript"
            about={`JavaScript is the world's most popular programming language.
            JavaScript is the programming language of the Web.
            JavaScript is easy to learn.
            This tutorial will teach you JavaScript from basic to advanced.`}
            contentColor="yellow"
            titleColor="black"
            secondTitleColor="black"
            aboutColor="black"
            code={<CodeSpace
                title={"JavaScript Example"}
                lang={"javascript"}
                readOnly={true}
                lineNumbers={true}
                codeWrapColor="yellow"
                codeWrapBorderColor="black"
                titleColor="black"
                codeAreaColor="black"
                enterCode={`// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
  return p1 * p2;
}`} />} />
    )
}