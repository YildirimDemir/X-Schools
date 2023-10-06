import { useEffect, useState } from 'react'
import dataSupabase from '../services/dataSupabase';

export default function PythonData() {

    const [isLoading, setIsLoading] = useState(true);
    const [python, setPython] = useState([]);

    useEffect(() => {
        async function getPython() {
            try {
                const { data, error } = await dataSupabase
                    .from('python')
                    .select('*');

                if (error) {
                    console.error(error);
                    throw new Error('Python contents could not be loaded');
                }

                setPython(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
        getPython();
    }, [])

    return { python, isLoading };
}
