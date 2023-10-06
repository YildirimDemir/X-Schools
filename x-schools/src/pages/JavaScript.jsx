import { useEffect, useState } from "react";
import SideBar from "../ui/SideBar";
import dataSupabase from "../services/dataSupabase";

export default function JavaScript() {
  // const reactPath = [
  //     {path: '/react/components', item: 'React Components'},
  //     {path: '/react/props', item: 'React Props'},
  //     {path: '/react/router', item: 'React Router'},
  //     {path: '/react/list', item: 'React List'},
  //     {path: '/react/query', item: 'React Query'},
  // ]

  const [javascript, setJavascript] = useState([]);

  useEffect(() => {
    async function getReact() {
      const { data, error } = await dataSupabase
        .from('javascript')
        .select('*')

      if (error) {
        console.error(error)
        throw new Error('JavaScript contents could not be loaded')
      }

      setJavascript(data);
    }
    getReact();
  }, [])

  return (
    <div className='page-container'>
      <div className='page-sidebar'>
        <SideBar list={javascript} />
      </div>
      <div className='page-content'>

      </div>
    </div>
  )
}