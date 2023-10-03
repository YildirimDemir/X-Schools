import { useEffect, useState } from "react";
import cSupabase from "../../services/cSupabase";
import SideBar from '../../ui/SideBar';
import TemplatePage from "../../ui/TemplatePage";
import CodeSpace from "../../ui/CodeSpace";

export default function Booleans() {

    const [csharp, setCsharp] = useState([]);

    useEffect(() => {
        async function getCsharp() {
            const { data, error } = await cSupabase
                .from('c')
                .select('*')

            if (error) {
                console.error(error)
                throw new Error('C# contents could not be loaded')
            }

            setCsharp(data);
        }
        getCsharp();
    }, []);

    const newCsharp = csharp.filter((item) => item.title === 'C# Booleans');

    return (
        <div className='page-container'>
            <div className='page-sidebar'>
                <SideBar list={csharp} />
            </div>
            <div className='page-content'>
                {newCsharp.map((item, index) => (
                    <div key={index}>
                        <TemplatePage
                            title={item.title}
                            secondTitle="Learn Booleans"
                            about={`${item.about}`}
                            code={<CodeSpace
                                title={"C# Example"}
                                lang={"text/x-csharp"}
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
