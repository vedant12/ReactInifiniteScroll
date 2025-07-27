import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import Spinner from './Spinner';

function InfiniteScrollDemo() {

    const [posts, setPosts] = useState([]);
    const [endofResults, setEndofResults] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const loadMore = async (page) => {
        const limit = 5;
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
        //const start = (page - 1) * limit;
        //const end = page * limit;
        console.log(page);
        //const nextBatch = getData.slice(start, end);
        const newPosts = await response.json();

        if (newPosts.length === 0) {
            setHasMore(false);
            setEndofResults(true);
            return;
        }

        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    }

    return (
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h2>Infinite Scroll Demo</h2>
            <InfiniteScroll
                pageStart={1}
                loadMore={loadMore}
                hasMore={hasMore}
                loader={<Spinner />}
            >

                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {posts.map((post, index) => (
                        <React.Fragment key={`${post.id}-${index}`}>
                            <li style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
                                <strong>{post.title}</strong>
                                <p>{post.description}</p>
                                <p>{post.category} - {post.subcategory}</p>
                            </li>
                        </React.Fragment>
                    ))}
                </ul>
            </InfiniteScroll>
            {
                endofResults &&
                <div style={{ fontSize: 25, color: 'black' }}>End of results..</div>
            }
        </div>
    )
}

export default InfiniteScrollDemo