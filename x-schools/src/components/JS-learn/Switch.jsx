import { useEffect, useState } from 'react';
import SideBar from '../../ui/SideBar';
import TemplatePage from '../../ui/TemplatePage';
import CodeSpace from '../../ui/CodeSpace';
import Loader from '../../ui/Loader';
import dataSupabase from "../../services/dataSupabase";

export default function Switch() {
    const [javascript, setJavascript] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getReact() {
            try {
                const { data, error } = await dataSupabase
                    .from('javascript')
                    .select('*');

                if (error) {
                    console.error(error);
                    throw new Error('Javascript contents could not be loaded');
                }

                setJavascript(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
        getReact();
    }, []);

    const newJavascript = javascript.filter((item) => item.title === 'JS Switch');

    return (
        <div className='page-container'>
            <div className='page-sidebar'>
                <SideBar list={javascript} />
            </div>
            <div className='page-content'>
                {isLoading ? (
                    <Loader />
                ) : (
                    newJavascript.map((item, index) => (
                        <TemplatePage key={index}
                            title={item.title}
                            secondTitle="Learn JS"
                            about={`${item.about}`}
                            contentColor="#273469"
                            titleColor="white"
                            secondTitleColor="white"
                            aboutColor="white"
                            code={<CodeSpace
                                title={"JavaScript"}
                                lang={"javascript"}
                                readOnly={true}
                                lineNumbers={true}
                                codeWrapColor="#30343F"
                                codeWrapBorderColor="white"
                                titleColor="white"
                                codeAreaColor="white"
                                enterCode={`${item.code}`} />
                            } />
                    ))
                )}
            </div>
        </div>
    );
}
