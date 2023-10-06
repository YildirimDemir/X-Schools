import { useEffect, useState } from "react";
import dataSupabase from "../services/dataSupabase";
import SideBar from "../ui/SideBar";

export default function Python() {
  // const reactPath = [
  //     {path: '/react/components', item: 'React Components'},
  //     {path: '/react/props', item: 'React Props'},
  //     {path: '/react/router', item: 'React Router'},
  //     {path: '/react/list', item: 'React List'},
  //     {path: '/react/query', item: 'React Query'},
  // ]

  const [python, setPython] = useState([]);

  useEffect(() => {
    async function getPython() {
      const { data, error } = await dataSupabase
        .from('python')
        .select('*')

      if (error) {
        console.error(error)
        throw new Error('Python contents could not be loaded')
      }

      setPython(data);
    }
    getPython();
  }, [])

  return (
    <SideBar list={python} />
  )
}