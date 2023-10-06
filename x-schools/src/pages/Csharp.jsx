import { useEffect, useState } from "react";
import dataSupabase from "../services/dataSupabase";
import SideBar from "../ui/SideBar";

export default function Csharp() {

  const [csharp, setCsharp] = useState([]);

  useEffect(() => {
    async function getCsharp() {
      const { data, error } = await dataSupabase
        .from('c')
        .select('*')

      if (error) {
        console.error(error)
        throw new Error('React contents could not be loaded')
      }

      setCsharp(data);
    }
    getCsharp();
  }, []);

  return (
    <SideBar list={csharp} />
  )
}