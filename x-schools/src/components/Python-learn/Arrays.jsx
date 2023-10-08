import React, { useEffect, useState } from 'react';
import SideBar from '../../ui/SideBar';
import pythonSupabase from '../../services/pythonSupabase';
import TemplatePage from '../../ui/TemplatePage';
import CodeSpace from '../../ui/CodeSpace';
import Loader from '../../ui/Loader';

export default function Arrays() {
    const [python, setPython] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getPython() {
            try {
                const { data, error } = await pythonSupabase
                    .from('python')
                    .select('*');

                if (error) {
                    console.error(error);
                    throw new Error('Python contents could not be loaded');
                }

                setPython(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
        getPython();
    }, []);

    const newPython = python.filter((item) => item.title === 'Python Arrays');

    return (
        <div className='page-container'>
            <div className='page-sidebar'>
                <SideBar list={python} />
            </div>
            <div className='page-content'>
                {isLoading ? (
                    <Loader />
                ) : (
                    newPython.map((item, index) => (
                        <TemplatePage
                        title={item.title}
                        secondTitle="Learn Python"
                        about={`${item.about}`}
                        contentColor="#273469"
                        titleColor="white"
                        secondTitleColor="white"
                        aboutColor="white"
                        code={
                        <CodeSpace
                        title={"Python/JSX Example"}
                        lang={"jsx"}
                        readOnly={true}
                        lineNumbers={true}
                        codeWrapColor="#30343F"
                        codeWrapBorderColor="white"
                        titleColor="white"
                        codeAreaColor="white"
                        enterCode={`${item.code}`}
                        />
                        }
                        />
                    ))
                )}
            </div>
        </div>
    );
}