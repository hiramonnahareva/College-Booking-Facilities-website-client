import { Link } from "react-router-dom";
import image from "../../asset/video.mp4"

const Banner = () => {
  return (
    <div className="bg-banner bg-cover lg:h-[600px] h-64">
      <video src={image} loop autoPlay muted ></video>

      <div className="absolute top-0 w-[100%] md:h-[100%] h-96 flex text-white justify-center items-center">
        <div>
          <h1 className="text-4xl lg:text-7xl font-bold text-primary"> College Booking Facilities</h1>
          <p className="ld:py-8 py-4 text-[16px] lg:text-xl text-center">Find the best colleges on this website and earn coins by <br /> sharing your own colleges. Join now!</p>
          
         <div className="flex justify-center">
         <Link to="/colleges">
            <button className="btn btn-primary rounded-full text-gray-100 lg:px-10">Colleges</button>
          </Link>
           <Link to="/admission">
            <button className='border border-primary text-primary rounded-full transition-all duration-700 ease-in-out py-2 px-8 hover:bg-primary hover:border-primary mx-2 hover:text-gray-100'>Admission</button>
          </Link>
         </div>
        </div>
      </div>


    </div>
  );
};

export default Banner;