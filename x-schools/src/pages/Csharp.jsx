import CodeSpace from "../ui/CodeSpace";
import TemplatePage from "../ui/TemplatePage";

export default function Csharp() {
  return (
    <TemplatePage
      title="C# Tutorial"
      secondTitle="Learn C#"
      about={`C# (C-Sharp) is a programming language developed by Microsoft that runs on the .NET Framework.
            C# is used to develop web apps, desktop apps, mobile apps, games and much more.`}
      contentColor="pink"
      titleColor="darkblue"
      secondTitleColor="darkblue"
      aboutColor="darkblue"
      code={<CodeSpace
        title="C# Example"
        lang="text/x-csharp"
        readOnly={true}
        lineNumbers={true}
        codeWrapColor="purple"
        codeWrapBorderColor="darkblue"
        titleColor="pink"
        codeAreaColor="darkblue"
        enterCode={`using System;

namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");    
    }
  }
}`} />} />
  )
}