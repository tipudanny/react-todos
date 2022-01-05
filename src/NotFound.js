import {Link} from "react-router-dom";

const MyComponent = () => {
    return (
        <div className="create" >
            <h2> Sorry </h2>
            <h5> Page Not Found ... </h5>
            <br/>
            <Link to="/"> Go back to Homepage </Link>
        </div>
    );
};

export default MyComponent;
