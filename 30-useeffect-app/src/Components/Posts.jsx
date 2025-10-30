import { useState } from 'react'
import { useEffect } from 'react'
export default function Posts() {
    const [counter, setCounter] = useState(0)
    const [posts, setPosts] = useState([])
    async function fetchPosts() {
        let data = await fetch('https://jsonplaceholder.typicode.com/posts')
        let posts = await data.json()
        setPosts(posts)
    }
    useEffect(() => {
        fetchPosts()
    }, [])
    return (
        <div>
            <h1>Posts</h1>
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Click me</button>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}