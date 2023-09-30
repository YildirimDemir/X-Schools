import CodeSpace from "../ui/CodeSpace";
import TemplatePage from "../ui/TemplatePage";

export default function Sql() {
    return (
        <TemplatePage
            title="C# Tutorial"
            secondTitle="Learn C#"
            about={`C# (C-Sharp) is a programming language developed by Microsoft that runs on the .NET Framework.
            C# is used to develop web apps, desktop apps, mobile apps, games and much more.`}
            contentColor="orangered"
            titleColor="white"
            secondTitleColor="white"
            aboutColor="white"
            code={<CodeSpace
                title={"SQL Example"}
                lang={"text/x-sql"}
                readOnly={true}
                lineNumbers={true}
                codeWrapColor="orangered"
                codeWrapBorderColor="white"
                titleColor="white"
                codeAreaColor="white"
                enterCode={`CREATE TABLE Persons (
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
    PersonID int,
);`} />} />
    )
}