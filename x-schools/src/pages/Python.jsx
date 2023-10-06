import { useEffect, useState } from "react";
import dataSupabase from "../services/dataSupabase";
import SideBar from "../ui/SideBar";

export default function Python() {
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
    <div className='page-container'>
      <div className='page-sidebar'>
        <SideBar list={python} />
      </div>
      <div className='page-content'>
      </div>
    </div>
  )
}