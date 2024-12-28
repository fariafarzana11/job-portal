import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center text-3xl font-bold">
            <h1>this is not valid</h1>
            <Link to={'./'}><button className="btn btn-primary">Go to Home</button></Link>
        </div>
    )
}
export default ErrorPage;