import { Link } from "react-router-dom";
import img from "../../asset/student1.jpg"


const Gallery = () => {
    return (

        <div className="my-20">
            <h1 className='text-4xl mb-12 text-center'>Students Gallery</h1>
            <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 justify-center px-20">
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Gallery;