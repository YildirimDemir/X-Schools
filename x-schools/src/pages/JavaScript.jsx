import { useEffect, useState } from "react";
import SideBar from "../ui/SideBar";
import dataSupabase from "../services/dataSupabase";

export default function JavaScript() {

  const [javascript, setJavascript] = useState([]);

  useEffect(() => {
    async function getJavascript() {
      const { data, error } = await dataSupabase
        .from('javascript')
        .select('*')

      if (error) {
        console.error(error)
        throw new Error('JavaScript contents could not be loaded')
      }

      setJavascript(data);
    }
    getJavascript();
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