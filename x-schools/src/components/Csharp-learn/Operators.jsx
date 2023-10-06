import SideBar from '../../ui/SideBar';
import TemplatePage from "../../ui/TemplatePage";
import CodeSpace from "../../ui/CodeSpace";
import CsharpData from "../../Data/CsharpData";
import Loader from '../../ui/Loader';

export default function Operators() {

    const { csharp, isLoading } = CsharpData();
    
    const newCsharp = csharp.filter((item) => item.title === 'C# Operators');

    return (
        <div className='page-container'>
            <div className='page-sidebar'>
                <SideBar list={csharp} />
            </div>
            <div className='page-content'>
                {isLoading ? (<Loader />) : (newCsharp.map((item, index) => (
                    <TemplatePage key={index}
                        title={item.title}
                        secondTitle="Learn Operators"
                        about={`${item.about}`}
                        contentColor="#273469"
                        titleColor="white"
                        secondTitleColor="white"
                        aboutColor="white"
                        code={<CodeSpace
                            title={"C# Example"}
                            lang={"text/x-csharp"}
                            readOnly={true}
                            lineNumbers={true}
                            codeWrapColor="#30343F"
                            codeWrapBorderColor="white"
                            titleColor="white"
                            codeAreaColor="white"
                            enterCode={`${item.code}`} />
                        } />
                )))}
            </div>
        </div>
    )
}
