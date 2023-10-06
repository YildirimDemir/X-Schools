import { useEffect, useState } from "react";
import dataSupabase from "../../services/dataSupabase";
import SideBar from '../../ui/SideBar';
import TemplatePage from "../../ui/TemplatePage";
import CodeSpace from "../../ui/CodeSpace";

export default function Not() {

    const [SQL, setSQL] = useState([]);

    useEffect(() => {
        async function getSQL() {
            const { data, error } = await dataSupabase
                .from('sql')
                .select('*')

            if (error) {
                console.error(error)
                throw new Error('SQL contents could not be loaded')
            }

            setSQL(data);
        }
        getSQL();
    }, []);

    const newSQL = SQL.filter((item) => item.title === 'SQL NOT');

    return (
        <div className='page-container'>
            <div className='page-sidebar'>
                <SideBar list={SQL} />
            </div>
            <div className='page-content'>
                {newSQL.map((item, index) => (
                    <TemplatePage key={index}
                        title={item.title}
                        secondTitle="Learn NOT"
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
                ))}
            </div>
        </div>
    )
}
