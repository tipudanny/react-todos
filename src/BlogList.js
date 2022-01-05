import {useHistory,Link} from "react-router-dom";
import useFetch from "./useFetch";

const BlogList = ({blogs}) => {
    const history = useHistory();
    const handleDelete = (id) =>{
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            //history.push('/');
            history.go('/')
        })
    }
    return (
        <div className="blog-list">
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blog-details/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p> { blog.body}</p>
                        <br/>
                        <p>Written by {blog.author}</p>
                    </Link>
                    <br/>
                    <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
