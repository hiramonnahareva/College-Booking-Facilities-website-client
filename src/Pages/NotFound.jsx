
import { Link } from 'react-router-dom';
import errorImg from '../asset/error.png';

const NotFound = () => {
    return (
        <>
            <div className="hero min-h-screen"
                style={{
                    background: `url(${errorImg})`,
                    backgroundSize: 'cover'
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Sorry!</h1>
                        <p className="mb-5 text-2xl">Your Search Result isn&apos;t Available</p>
                        <Link className="btn btn-outline w-full max-w-xs my-2 border-green-700" to='/'>Get Home</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;