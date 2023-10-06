import { useEffect, useState } from "react";
import dataSupabase from "../../services/dataSupabase";
import SideBar from '../../ui/SideBar';
import TemplatePage from "../../ui/TemplatePage";
import CodeSpace from "../../ui/CodeSpace";

export default function Strings() {

    const [csharp, setCsharp] = useState([]);

    useEffect(() => {
        async function getCsharp() {
            const { data, error } = await dataSupabase
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

    const newCsharp = csharp.filter((item) => item.title === 'C# Strings');

    return (
        <div className='page-container'>
            <div className='page-sidebar'>
                <SideBar list={csharp} />
            </div>
            <div className='page-content'>
                {newCsharp.map((item, index) => (
                    <TemplatePage key={index}
                        title={item.title}
                        secondTitle="Learn Strings"
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
                ))}
            </div>
        </div>
    )
}
