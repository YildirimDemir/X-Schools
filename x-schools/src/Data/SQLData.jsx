import { useEffect, useState } from 'react';
import dataSupabase from "../services/dataSupabase";

export default function SQLData() {

    const [isLoading, setIsLoading] = useState(true);
    const [SQL, setSQL] = useState([]);

    useEffect(() => {
        async function getSQL() {
            try {
                const { data, error } = await dataSupabase
                    .from('sql')
                    .select('*');

                if (error) {
                    console.error(error);
                    throw new Error('SQL contents could not be loaded');
                }

                setSQL(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
        getSQL();
    }, [])

    return { SQL, isLoading };
}
