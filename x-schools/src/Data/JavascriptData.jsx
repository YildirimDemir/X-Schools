import { useEffect, useState } from "react";
import dataSupabase from "../services/dataSupabase";

export default function JavascriptData() {

    const [isLoading, setIsLoading] = useState(true);
    const [javascript, setJavascript] = useState([]);

    useEffect(() => {
        async function getJavascript() {
            try {
                const { data, error } = await dataSupabase
                    .from('javascript')
                    .select('*');

                if (error) {
                    console.error(error);
                    throw new Error('Javascript contents could not be loaded');
                }

                setJavascript(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
        getJavascript();
    }, [])

    return { javascript, isLoading };
}
