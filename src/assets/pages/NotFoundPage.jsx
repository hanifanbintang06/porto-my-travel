import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center text-lg">
            <h2>404</h2>
            <Link to="/">Go back to home</Link>
        </div>
    )
}

export default NotFoundPage;