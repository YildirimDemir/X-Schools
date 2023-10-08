import SideBar from '../../ui/SideBar';
import TemplatePage from '../../ui/TemplatePage';
import CodeSpace from '../../ui/CodeSpace';
import PythonData from '../../Data/PythonData';
import Loader from '../../ui/Loader';

export default function PythonIfElse() {

    const { isLoading, python } = PythonData();

    const newPython = python.filter((item) => item.title === 'Python If Else');

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
                        <TemplatePage key={index}
                            title={item.title}
                            secondTitle="Learn If-Else"
                            about={`${item.about}`}
                            contentColor="#273469"
                            titleColor="white"
                            secondTitleColor="white"
                            aboutColor="white"
                            code={
                                <CodeSpace
                                    title={"Python Example"}
                                    lang={"text/x-python"}
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