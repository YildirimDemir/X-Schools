import { useEffect, useState } from "react";
import dataSupabase from "../services/dataSupabase";
import SideBar from '../ui/SideBar';

export default function SQL() {

    const [SQL, setSQL] = useState([]);

    useEffect(() => {
        async function getSQL() {
            const { data, error } = await dataSupabase
                .from('sql')
                .select('*')

            if (error) {
                console.error(error)
                throw new Error('C# contents could not be loaded')
            }

            setSQL(data);
        }
        getSQL();
    }, []);

    return (
        <SideBar list={SQL} />
    )
}