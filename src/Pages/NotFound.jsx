import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <img src="./assets/404.webp" alt="404" className="w-1/3 mx-auto " />
            <Link to="/" className="text-white bg-green-500 mx-auto text-2xl justify-center flex items-center px-4 py-3 rounded-2xl w-1/6">Go Home</Link>
        </div>
    );
}
