import { useEffect, useState } from "react";
import dataSupabase from "../services/dataSupabase";

export default function ReactData() {

    const [isLoading, setIsLoading] = useState(true);
    const [react, setReact] = useState([]);

    useEffect(() => {
        async function getReact() {
            try {
                const { data, error } = await dataSupabase
                    .from('react')
                    .select('*');

                if (error) {
                    console.error(error);
                    throw new Error('React contents could not be loaded');
                }

                setReact(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
        getReact();
    }, [])

    return { react, isLoading };
}
