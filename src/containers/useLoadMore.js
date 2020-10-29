import { useEffect, useState } from 'react';

export default function useLoadMore(page) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [metaData, setMetaData] = useState([]); 
    const [reachedFinalPage, setReachedFinalPage] = useState(false)

    useEffect(() => {
        setLoading(true);
        // here we simulate adding new posts to List
        const date = getDateFromThirtyDays();
        fetch(`https://api.github.com/search/repositories?q=created:%3E${date}&sort=stars&order=desc&page=${page}`)
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                }
                if (response.status === 403) {
                    setReachedFinalPage(true);
                    return {
                        items: 'Reach API request limits' 
                    }
                }
            })
            .then((data) => setMetaData(oldDataItems => {
                return [...oldDataItems, ...data.items]
            }))
            .then(() =>{
                if (page > 33) {
                    setReachedFinalPage(true);
                }
            })
            .then(setLoading(false))
            .catch(err=>setError(true));
    },[page])

    const getDateFromThirtyDays = ()=>{
        const today = new Date();
        today.setDate(today.getDate()-30);
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth()+1).padStart(2, '0'); 
        const yyyy = today.getFullYear();
        const thirtyDaysAgo = yyyy+'-'+mm+'-'+dd;
        return thirtyDaysAgo;
    }

    return {loading, error, metaData, reachedFinalPage}
}