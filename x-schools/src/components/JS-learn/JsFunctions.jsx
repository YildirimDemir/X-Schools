import SideBar from '../../ui/SideBar';
import TemplatePage from '../../ui/TemplatePage';
import CodeSpace from '../../ui/CodeSpace';
import Loader from '../../ui/Loader';
import JavascriptData from '../../Data/JavascriptData';

export default function JsFunctions() {

    const { javascript, isLoading } = JavascriptData();

    const newJavascript = javascript.filter((item) => item.title === 'JS Functions');

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
