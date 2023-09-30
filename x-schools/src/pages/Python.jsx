import CodeSpace from "../ui/CodeSpace";
import TemplatePage from "../ui/TemplatePage";

export default function Python() {
    return (
        <TemplatePage
            title="Python Tutorial"
            secondTitle="Learn Python"
            about={`Python is a popular programming language.
            Python can be used on a server to create web applications.`}
            contentColor="blue"
            titleColor="yellow"
            secondTitleColor="yellow"
            aboutColor="yellow"
            code={<CodeSpace
                title={"Python Example"}
                lang={"text/x-python"}
                readOnly={true}
                lineNumbers={true}
                codeWrapColor="blue"
                codeWrapBorderColor="yellow"
                titleColor="yellow"
                codeAreaColor="yellow"
                enterCode={`x = 4       # x is of type int
x = "Sally" # x is now of type str
print(x)`} />} />
    )
}