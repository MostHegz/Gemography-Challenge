import React, { useState, useRef, useCallback } from 'react';
import Row from '../components/Row';
import useLoadMore from './useLoadMore';

const InfiniteScroll = () => {
    // const [metaData, setMetaData] = useState([]); 
    // tracking on which page we currently are
    const [page, setPage] = useState(1);
    const { loading, error, metaData, reachedFinalPage } = useLoadMore(page)
    // add loader refrence 
    const observer = useRef(null);
    const lastRepoElementRef = useCallback(element => {
        if (loading) return
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting &&!reachedFinalPage) {
                setPage(oldPage => oldPage + 1)
            }
        })
        if (element) observer.current.observe(element)
    }, [loading,reachedFinalPage])

    const rows = useCallback( metaData.map((item,index) => {
        if (metaData.length === index+1) {
            return (
                <div key={item.id}>
                    <Row data={item} owner={item.owner} />
                    <h1  ref={lastRepoElementRef}>Loading More...</h1>
                    <h2> {error && 'ERROR!!'} </h2>
                </div>
            )
        }
        return <Row key={item.id} data={item} owner={item.owner} />

    }),[page,metaData])
    // const rows = useCallback(() => {
    //     const rowList = metaData.map((item, index) =>{
    //         if (error) {
    //             return <h1> ERROOOORRR !!!</h1>
    //         }
    //         if (metaData.length === index+1) {
    //             return (
    //                 <div>
    //                     <Row key={item.id} data={item} owner={item.owner} />
    //                     <h1 ref={lastRepoElementRef}>Loading More...</h1>
    //                 </div>
    //             )
    //         }
    //         return <Row key={item.id} data={item} owner={item.owner} />
    //     })
    //     return rowList;
    // },[page,metaData])

    return (
        <div className="container">
            {rows}
        </div>
    )
}

export default InfiniteScroll;