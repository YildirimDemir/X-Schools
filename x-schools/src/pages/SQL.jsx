import CodeSpace from "../ui/CodeSpace";
import TemplatePage from "../ui/TemplatePage";

export default function Sql() {
    return (
        <TemplatePage
            title="SQL Tutorial"
            secondTitle="Learn SQL"
            about={`SQL is a standard language for storing, manipulating and retrieving data in databases.
            Our SQL tutorial will teach you how to use SQL in: MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, Postgres, and other database systems.`}
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