import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BlogAll() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data =>{
                // console.log(data.posts);
                setPosts(data.posts);
            })
        
    },[])

    return (
        <>
            <ul className="posts">     
            {posts.map(item =>(
                <Link to={'/blog/'+ item.id} key={item.id}> <li>{item.title}</li> </Link>
            ))}
            </ul>
        </>
    )
}

export default BlogAll;