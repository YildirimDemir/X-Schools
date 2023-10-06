import { useEffect, useState } from "react";
import reactSupabase from "../services/reactSupabase";
import SideBar from "../ui/SideBar";

export default function React(){
    // const reactPath = [
    //     {path: '/react/components', item: 'React Components'},
    //     {path: '/react/props', item: 'React Props'},
    //     {path: '/react/router', item: 'React Router'},
    //     {path: '/react/list', item: 'React List'},
    //     {path: '/react/query', item: 'React Query'},
    // ]

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

    return(
        <div className='page-container'>
         <div className='page-sidebar'>
           <SideBar list={react}/>
         </div>
         <div className='page-content'>
            
         </div>
        </div>
    )
}