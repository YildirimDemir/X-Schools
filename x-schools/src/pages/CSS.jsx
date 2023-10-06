import { useEffect, useState } from "react";
import dataSupabase from "../services/dataSupabase";
import SideBar from "../ui/SideBar";

export default function Css() {
    const [css, setCss] = useState([]);

    useEffect(() => {
        async function getReact() {
            const { data, error } = await dataSupabase
                .from('css')
                .select('*')

            if (error) {
                console.error(error)
                throw new Error('CSS contents could not be loaded')
            }

            setCss(data);
        }
        getReact();
    }, [])

    return (
        <div className='page-container'>
            <div className='page-sidebar'>
                <SideBar list={css} />
            </div>
            <div className='page-content'>

            </div>
        </div>
    )
}