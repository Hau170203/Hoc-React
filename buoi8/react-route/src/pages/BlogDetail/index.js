import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Goback from "../../Components/Goback";

function BlogDetail() {
    const param = useParams();
    const [post, setPost] = useState();
    
    // console.log(param);

    useEffect(() =>{
        fetch(`https://dummyjson.com/posts/${param.id}`)
            .then(res => res.json())
            .then(data =>{
                // console.log(data);
                setPost(data);
            })
    },[]);

    // console.log(post);
    return (
        <>
            <div className="btn">
            <Goback />
            </div>
            {post && (
                <div className="BlogDetail">
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            )}
        </>
    )
}

export default BlogDetail;