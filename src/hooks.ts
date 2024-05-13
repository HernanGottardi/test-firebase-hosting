import { useEffect } from "react";
import { atom, useRecoilState, useRecoilValue, selector } from "recoil";
import { useParams } from "react-router-dom";

const queryState = atom({
    key: "query",
    default: ""
});

const resultsState = selector({
    key: 'searchResults',
    get: ({ get }) => {
        const valorQuery = get(queryState);
        if (!valorQuery) return [];
        try {
            const response = fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${valorQuery}`);
            const responseJSON = response.then(res => res.json());
            return responseJSON.then(data => data.results);
        } catch (error) {
            console.error("Error al obtener resultados:", error);
            return [];
        }
    }
});


export function useSearchResults() 
{
    const query = useParams().query; 
    const [q, setQ] = useRecoilState(queryState);    
    const results = useRecoilValue(resultsState);

    useEffect(() => {
        if (query) 
        { 
            setQ(query); 
        }
    }, [query]);

    return results;
}
