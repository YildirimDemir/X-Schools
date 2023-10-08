import SideBar from '../../ui/SideBar';
import TemplatePage from '../../ui/TemplatePage';
import CodeSpace from '../../ui/CodeSpace';
import Loader from '../../ui/Loader';
import PythonData from '../../Data/PythonData';

export default function PythonWhile() {
    const {isLoading, python} = PythonData();

    const newPython = python.filter((item) => item.title === 'Python While');

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