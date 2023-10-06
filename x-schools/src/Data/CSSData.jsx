import { useEffect, useState } from 'react'
import dataSupabase from '../services/dataSupabase';

export default function CSSData() {

    const [isLoading, setIsLoading] = useState(true);
    const [css, setCss] = useState([]);

    useEffect(() => {
        async function getCSS() {
            try {
                const { data, error } = await dataSupabase
                    .from('css')
                    .select('*');

                if (error) {
                    console.error(error);
                    throw new Error('CSS contents could not be loaded');
                }

                setCss(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
        getCSS();
    }, [])

    return { css, isLoading };
}
