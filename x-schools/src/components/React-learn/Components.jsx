import React, { useEffect, useState } from 'react';
import SideBar from '../../ui/SideBar';
import reactSupabase from '../../services/reactSupabase';
import TemplatePage from "../../ui/TemplatePage";
import CodeSpace from "../../ui/CodeSpace";

export default function Components() {

  const [react, setReact] = useState([]);

  useEffect(() => {
    async function getReact() {
      const { data, error } = await reactSupabase
        .from('react')
        .select('*')

      if (error) {
        console.error(error)
        throw new Error('React contents could not be loaded')
      }

      setReact(data);
    }
    getReact();
  }, [])

  const newReact = react.filter((item) => item.title === 'React Components')

  return (
    <div className='page-container'>
      <div className='page-sidebar'>
        <SideBar list={react} />
      </div>
      <div className='page-content'>
        {newReact.map((item, index) => (
          <div key={index}>
            <TemplatePage
              title={item.title}
              secondTitle="Learn React"
              about={`React is a JavaScript library for building user interfaces.
      React is used to build single-page applications.
      React allows us to create reusable UI components.`}
              contentColor="steelblue"
              titleColor="white"
              secondTitleColor="white"
              aboutColor="white"
              code={<CodeSpace
                title={"React/JSX Example"}
                lang={"jsx"}
                readOnly={true}
                lineNumbers={true}
                codeWrapColor="gray"
                codeWrapBorderColor="white"
                titleColor="white"
                codeAreaColor="white"
                enterCode={`${item.code}`} />
              } />
          </div>
        ))}
      </div>
    </div>
  );
}
