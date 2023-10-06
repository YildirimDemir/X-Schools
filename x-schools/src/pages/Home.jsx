import { Link } from 'react-router-dom';
import homeSupabase from '../services/homeSupabase';
import Loader from '../ui/Loader';
import { useEffect, useState } from 'react';
import CodeSpace from '../ui/CodeSpace';

export default function Home() {
  return (
    <>
      <HomeTopContent />
      <HomeTutorials />
    </>
  )
}

function HomeTopContent() {
  return(
    <div className="home-top-content">
      <h1>Learn to Code</h1>
      <div className="home-top-tutorials">
        <ul>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Python</li>
          <li>C#</li>
          <li>SQL</li>
        </ul>
      </div>
    </div>
  )
}

function HomeTutorials() {

  const [tutorial, setTutorial] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      async function getTutorial() {
          try {
              const { data, error } = await homeSupabase
                  .from('home-tutorials')
                  .select('*');

              if (error) {
                  console.error(error);
                  throw new Error('Tutorial contents could not be loaded');
              }

              setTutorial(data);
          } catch (error) {
              console.error(error);
          } finally {
              setIsLoading(false);
          }
      }
      getTutorial();
  }, []);

  return(
    <div className="home-tutorials">
      {isLoading ? (
        <Loader />
        ) : (
        tutorial.map((item, index) => (
        <TutorialCard
         title={item.title}
         text={item.text} 
         code={
          <CodeSpace
          title={`Example ${item.title}`}
          lang={"jsx"}
          readOnly={true}
          lineNumbers={true}
          codeWrapColor="#273469"
          codeWrapBorderColor="#4e3bff"
          titleColor="white"
          codeAreaColor="white"
          enterCode={`${item.code}`}
          />
          }
         key={index}
         path={item.path}
         />
         ))
         )}
    </div>
  )
}

function TutorialCard({title, text, path ,code}) {
  return(
    <div className="home-tutorial-card">
      <div className="home-tutorial-box">
        <h1>{title}</h1>
        <p>{text}</p>
        <Link to={path}>{`Learn ${title}`}</Link>
      </div>
      <div className="home-tutorial-box">
        {code}
      </div>
    </div>
  )
}