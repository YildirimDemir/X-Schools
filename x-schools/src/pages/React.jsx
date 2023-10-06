import { useEffect, useState } from "react";
import dataSupabase from "../services/dataSupabase";
import SideBar from "../ui/SideBar";

export default function React() {

  const [react, setReact] = useState([]);

  useEffect(() => {
    async function getReact() {
      const { data, error } = await dataSupabase
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

  return (
    <div className='page-container'>
      <div className='page-sidebar'>
        <SideBar list={react} />
      </div>
      <div className='page-content'>

      </div>
    </div>
  )
}