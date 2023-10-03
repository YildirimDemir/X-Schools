import React, { useEffect, useState } from 'react';
import SideBar from '../../ui/SideBar';
import reactSupabase from '../../services/reactSupabase';

export default function Components() {

    const [react, setReact] = useState([]);

    useEffect(() => {
        async function getReact() {
            const  { data, error } = await reactSupabase
            .from('react')
            .select('*')
          
            if(error){
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
        <SideBar list={react}/>
      </div>
      <div className='page-content'>
        {newReact.map((item, index) => (
          <div key={index}>
            <h1>{item.about}</h1>
            <p>{item.code}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
