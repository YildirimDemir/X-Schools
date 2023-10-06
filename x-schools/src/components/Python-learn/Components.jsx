import React, { useEffect, useState } from 'react';
import SideBar from '../../ui/SideBar';
import pythonSupabase from '../../services/pythonSupabase';

export default function Components() {

    const [python, setPython] = useState([]);

    useEffect(() => {
        async function getPython() {
            const  { data, error } = await pythonSupabase
            .from('python')
            .select('*')
          
            if(error){
              console.error(error)
              throw new Error('Python contents could not be loaded')
            }
          
             setPython(data);
          }
          getPython();
      }, [])

      const newPython = python.filter((item) => item.title === 'Python Components')

  return (
    <div className='page-container'>
      <div className='page-sidebar'>
        <SideBar list={python}/>
      </div>
      <div className='page-content'>
        {newPython.map((item, index) => (
          <div key={index}>
            <h1>{item.about}</h1>
            <p>{item.code}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
