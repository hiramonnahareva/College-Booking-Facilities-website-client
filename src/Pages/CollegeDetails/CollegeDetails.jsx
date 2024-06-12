import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CollegeCard from "../Colleges/CollegeCard";


const CollegeDetails = () => {
    const { id } = useParams();

    const [Colleges, setColleges] = useState([]);

    const { _id, name, image, admission_date, number_of_research, details, description, research_detail } = Colleges;

    const [AllColleges, setAllColleges] = useState([]);

    useEffect(() => {
        fetch('https://College-sharing-web-server.onrender.com/Colleges')
            .then(res => res.json())
            .then(data => setAllColleges(data))

    }, [])


    useEffect(() => {
        fetch(`http://localhost:5000/college/${id}`)
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [id]);

    return (
        <div className='p-5 text-center mx-4 lg:mx-96 mt-5 mb-5 px-8 shadow-lg '>
            <h1 className='text-2xl pt-5 font-bold pb-4'>{name}</h1>
            <div className='h-64 flex justify-center overflow-hidden'>
                <img className='w-full' src={image} alt="" />
            </div>
            <div className="flex justify-start gap-2 my-2 items-start flex-col">
                <p className="text-justify my-2">{description}</p>
                <p>Admission Date: {admission_date}</p>
                <p className="text-justify my-2">{research_detail}</p>
                <p>research history: {number_of_research}</p>
                <div >
                    <h4 className="text-xl font-bold">Events</h4>
                </div>
                {details && details.events.map(event => <div className="flex text-start gap-4">
                    <p className="text-start">{event?.event_date }</p> 
                    <p>{event?.event_name}</p>
                </div>)}

                <h4 className="text-xl font-bold">Sports</h4>
                <div className="flex gap-4 items-start">
                    {details && details.sports_facilities.map(facility => <div>
                        <div className="text-start">
                        <p className="text-[18px] font-semibold my-2">{facility?.facility_name}</p>
                        <p>{facility?.facility_description}</p>
                        </div>
                    </div>)}
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default CollegeDetails;