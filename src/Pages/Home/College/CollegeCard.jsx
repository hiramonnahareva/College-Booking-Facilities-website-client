import { Link,  } from "react-router-dom";
const College = ({ college }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, name, image, admission_date, number_of_research,  rating } = college;

    return (
        <div className={'p-5 text-center mx-4 mt-5 mb-5 px-8 shadow-lg'}>
            {
                college &&
                <>
                    <h1 className='text-2xl pt-5 font-bold pb-4'>{name}</h1>
                    <div className='h-36 flex justify-center overflow-hidden'>
                        <img className='w-full' src={image} alt="" />
                    </div>
                    <div className="flex justify-start gap-2 my-2 items-start flex-col">
                        <p>Admission Date: {admission_date}</p>
                        <p>Ratings History: {rating}</p>
                        <p>Research History: {number_of_research}</p>
                    </div>
                    <div className="my-8">
                        <Link to={`/college/${_id}`} className='border hover:text-primary rounded-full transition-all duration-700 ease-in-out py-2 px-8 my-[20px] bg-primary hover:bg-gray-100 hover:border-primary mx-2 text-gray-100'>Details</Link>
                    </div>

                </>
            }

        </div>
    );
};

export default College;