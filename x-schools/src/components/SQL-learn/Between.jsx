import SideBar from '../../ui/SideBar';
import TemplatePage from "../../ui/TemplatePage";
import CodeSpace from "../../ui/CodeSpace";
import SQLData from "../../Data/SQLData";
import Loader from '../../ui/Loader';

export default function Between() {

    const { SQL, isLoading } = SQLData();

    const newSQL = SQL.filter((item) => item.title === 'SQL BETWEEN');

    return (
        <div className='page-container'>
            <div className='page-sidebar'>
                <SideBar list={SQL} />
            </div>
            <div className='page-content'>
                {isLoading ? (<Loader />) : (newSQL.map((item, index) => (
                    <TemplatePage key={index}
                        title={item.title}
                        secondTitle="Learn BETWEEN"
                        about={`${item.about}`}
                        contentColor="#273469"
                        titleColor="white"
                        secondTitleColor="white"
                        aboutColor="white"
                        code={<CodeSpace
                            title={"SQL Example"}
                            lang={"text/x-sql"}
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
