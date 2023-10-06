import { useEffect, useState } from "react";
import sqlSupbase from "../../services/sqlSupabase";
import SideBar from '../../ui/SideBar';
import TemplatePage from "../../ui/TemplatePage";
import CodeSpace from "../../ui/CodeSpace";

export default function Where() {

    const [SQL, setSQL] = useState([]);

    useEffect(() => {
        async function getSQL() {
            const { data, error } = await sqlSupbase
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

    const newSQL = SQL.filter((item) => item.title === 'SQL WHERE');

    return (
        <div className='page-container'>
            <div className='page-sidebar'>
                <SideBar list={SQL} />
            </div>
            <div className='page-content'>
                {newSQL.map((item, index) => (
                    <div key={index}>
                        <TemplatePage
                            title={item.title}
                            secondTitle="Learn WHERE"
                            about={`${item.about}`}
                            code={<CodeSpace
                                title={"SQL Example"}
                                lang={"text/x-sql"}
                                readOnly={true}
                                lineNumbers={true}
                                enterCode={`${item.code}`} />
                            } />
                    </div>
                ))}
            </div>
        </div>
    )
}
