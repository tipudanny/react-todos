import { useParams } from 'react-router-dom';
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data:blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`)
    return (
        <div className="blog-details">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            {  blog && <div>
                <h2>{blog.title}</h2>
                <p> { blog.body}</p>
                <br/>
                <p>Written by {blog.author}</p>
            </div>}
        </div>
    );
};

export default BlogDetails;
