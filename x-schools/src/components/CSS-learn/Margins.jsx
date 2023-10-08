import SideBar from '../../ui/SideBar';
import TemplatePage from '../../ui/TemplatePage';
import CodeSpace from '../../ui/CodeSpace';
import Loader from '../../ui/Loader';
import CSSData from '../../Data/CSSData';

export default function CssMargins() {
  const { isLoading, css } = CSSData();

  const newCss = css.filter((item) => item.title === 'CSS Margins');

  return (
    <div className='page-container'>
      <div className='page-sidebar'>
        <SideBar list={css} />
      </div>
      <div className='page-content'>
        {isLoading ? (
          <Loader />
        ) : (
          newCss.map((item, index) => (
            <TemplatePage key={index}
              title={item.title}
              secondTitle="Learn CSS"
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