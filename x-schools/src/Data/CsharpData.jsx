import { useEffect, useState } from 'react'
import dataSupabase from "../services/dataSupabase";

export default function CsharpData() {

    const [isLoading, setIsLoading] = useState(true);
    const [csharp, setCsharp] = useState([]);

    useEffect(() => {
        async function getCsharp() {
            try {
                const { data, error } = await dataSupabase
                    .from('c')
                    .select('*');

                if (error) {
                    console.error(error);
                    throw new Error('C# contents could not be loaded');
                }

                setCsharp(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
        getCsharp();
    }, [])

    return { csharp, isLoading };
}
