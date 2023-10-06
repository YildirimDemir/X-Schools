import SideBar from '../../ui/SideBar';
import TemplatePage from '../../ui/TemplatePage';
import CodeSpace from '../../ui/CodeSpace';
import Loader from '../../ui/Loader';
import ReactData from '../../Data/ReactData';

export default function Lists() {

    const { react, isLoading } = ReactData();

    const newReact = react.filter((item) => item.title === 'React Lists');

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
                        <TemplatePage key={index}
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
