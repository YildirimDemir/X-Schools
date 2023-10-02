import CodeSpace from "../ui/CodeSpace";
import TemplatePage from "../ui/TemplatePage";

export default function Python() {
    return (
        <TemplatePage
            title="Python Tutorial"
            secondTitle="Learn Python"
            about={`Python is a popular programming language.
            Python can be used on a server to create web applications.`}
            contentColor="darkblue"
            titleColor="goldenrod"
            secondTitleColor="goldenrod"
            aboutColor="goldenrod"
            code={<CodeSpace
                title={"Python Example"}
                lang={"text/x-python"}
                readOnly={true}
                lineNumbers={true}
                codeWrapColor="rgb(0, 0, 67)"
                codeWrapBorderColor="goldenrod"
                titleColor="goldenrod"
                codeAreaColor="goldenrod"
                enterCode={`x = 4       # x is of type int
x = "Sally" # x is now of type str
print(x)`} />} />
    )
}