import React, { useState, useRef, useCallback } from 'react';
import Row from '../components/Row';
import useLoadMore from './useLoadMore';

const InfiniteScroll = () => {
    // tracking on which page we currently are
    const [page, setPage] = useState(1);

    // Destructuring output states from useLoadMore Hook
    const { loading, error, metaData, reachedFinalPage } = useLoadMore(page)
    // add observer refrence 
    const observer = useRef(null);
    //Callback function reattach last element in each page to observer reference
    const lastRepoElementRef = useCallback(element => {
        if (loading) return // exit here if it's still loading to avoid multiple api calls
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && !reachedFinalPage) {
                setPage(oldPage => oldPage + 1)
            }
        })
        if (element) observer.current.observe(element)
    }, [loading, reachedFinalPage])

    //the final rendered array 
    //P.S. it's not a component on its own as we need to pass the observer reference in this context. Unless we use forwardRef which might have caused a breaking change(https://reactjs.org/docs/forwarding-refs.html#note-for-component-library-maintainers)
    const rowList = metaData.map((item, index) => {
        //each item is passed to each child as props
        if (metaData.length === index + 1) {
            //checking if it's the last row in page to attach observer to it
            return (
                <div key={item.id}>
                    <Row repoData={item} owner={item.owner} />
                    <h1 className='f2 gray tc' ref={lastRepoElementRef}>Loading More...</h1>
                    <h2> {error && 'ERROR!!'} </h2>
                </div>
            )
        }
        return <Row key={item.id} repoData={item} owner={item.owner} />

    })

    return (
        <div className="container">
            {rowList}
        </div>
    )
}

export default InfiniteScroll;