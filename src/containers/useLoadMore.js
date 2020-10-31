import { useEffect, useState } from 'react';

export default function useLoadMore(page) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [metaData, setMetaData] = useState([]); 
    const [reachedFinalPage, setReachedFinalPage] = useState(false)

    useEffect(() => { 
        // here we fetching new repos then adding to List
        setLoading(true);
        const date = getDateFromThirtyDays();
        fetch(`https://api.github.com/search/repositories?q=created:%3E${date}&sort=stars&order=desc&page=${page}`)
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                }
                if (response.status === 403) {
                    setError(true)
                    // return {
                    //     items: 'Reach API request limits' 
                    // }
                }
            })
            .then((data) => setMetaData(oldDataItems => {
                return [...oldDataItems, ...data.items]
            }))
            .then(() =>{
                if (page > 33) { //if reached the maximum limil of pages allowed by github api
                    setReachedFinalPage(true);
                }
            })
            .then(setLoading(false))
            .catch(err=>setError(true));
    },[page])

    const getDateFromThirtyDays = ()=>{
        const todayMinusThirty = new Date();//It starts as today
        todayMinusThirty.setDate(todayMinusThirty.getDate()-30);//But we remove 30 days here
        const dd = String(todayMinusThirty.getDate()).padStart(2, '0');
        const mm = String(todayMinusThirty.getMonth()+1).padStart(2, '0'); 
        const yyyy = todayMinusThirty.getFullYear();
        const thirtyDaysAgo = yyyy+'-'+mm+'-'+dd;//putting the date in the correct query format 
        return thirtyDaysAgo;
    }
    return {loading, error, metaData, reachedFinalPage}
}