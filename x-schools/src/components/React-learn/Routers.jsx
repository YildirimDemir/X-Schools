import React, { useEffect, useState } from 'react';
import SideBar from '../../ui/SideBar';
import reactSupabase from '../../services/reactSupabase';
import TemplatePage from '../../ui/TemplatePage';
import CodeSpace from '../../ui/CodeSpace';
import Loader from '../../ui/Loader';

export default function Routers() {
    const [react, setReact] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getReact() {
            try {
                const { data, error } = await reactSupabase
                    .from('react')
                    .select('*');

                if (error) {
                    console.error(error);
                    throw new Error('React contents could not be loaded');
                }

                setReact(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
        getReact();
    }, []);

    const newReact = react.filter((item) => item.title === 'React Router');

    return (
        <div className='page-container'>
            <div className='page-sidebar'>
                <SideBar list={react} />
            </div>
            <div className='page-content'>
                {isLoading ? (
                    <Loader />
                ) : (
                    newReact.map((item, index) => (
                        <TemplatePage
                        title={item.title}
                        secondTitle="Learn React"
                        about={`${item.about}`}
                        contentColor="#273469"
                        titleColor="white"
                        secondTitleColor="white"
                        aboutColor="white"
                        code={
                        <CodeSpace
                        title={"React/JSX Example"}
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
