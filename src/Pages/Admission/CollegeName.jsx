import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";


const CollegeName = () => {
    const [collegeName, setCollegeName] = useState('');
    return (

        <div className="lg:h-[100vh] mt-20">
            <h1 className='text-4xl mb-12 text-center'>Recommended College Name</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 justify-center md:px-40 px-20">
                {
                    collegeName && <Modal collegeName={collegeName} setCollegeName={setCollegeName}></Modal>
                }
                <label htmlFor="Booking-modal"
                    onClick={() => setCollegeName('Adamjee Cantonment College')}
                    className='uppercase font-bold my-4 underline'>Adamjee Cantonment College</label>
                <label htmlFor="Booking-modal"
                    onClick={() => setCollegeName('Dhaka College')}
                    className='uppercase font-bold my-4 underline'>Dhaka College</label>
                <label htmlFor="Booking-modal"
                    onClick={() => setCollegeName('Bangla College')}
                    className='uppercase font-bold my-4 underline'>Bangla College</label>
                <label htmlFor="Booking-modal"
                    onClick={() => setCollegeName('Kabi Nazrul Govt. College')}
                    className='uppercase font-bold my-4 underline'>Kabi Nazrul Govt. College</label>
                <label htmlFor="Booking-modal"
                    onClick={() => setCollegeName('Eden Mohila College')}
                    className='uppercase font-bold my-4 underline'>Eden Mohila College</label>
                <label htmlFor="Booking-modal"
                    onClick={() => setCollegeName('Rajuk Uttara Model College')}
                    className='uppercase font-bold my-4 underline'>Rajuk Uttara Model College</label>
                <label htmlFor="Booking-modal"
                    onClick={() => setCollegeName('Stanford University')}
                    className='uppercase font-bold my-4 underline'>Stanford University</label>
                <label htmlFor="Booking-modal"
                    onClick={() => setCollegeName('Harvard University')}
                    className='uppercase font-bold my-4 underline'>Harvard University</label>
                <label htmlFor="Booking-modal"
                    onClick={() => setCollegeName('Yale University')}
                    className='uppercase font-bold my-4 underline'>Yale University</label>
                <label htmlFor="Booking-modal"
                    onClick={() => setCollegeName('Columbia University')}
                    className='uppercase font-bold my-4 underline'>Columbia University</label>
                <label htmlFor="Booking-modal"
                    onClick={() => setCollegeName('University of Oxford')}
                    className='uppercase font-bold my-4 underline'>University of Oxford</label>
                <label htmlFor="Booking-modal"
                    onClick={() => setCollegeName('University of California, Berkeley')}
                    className='uppercase font-bold my-4 underline'>University of California, Berkeley</label>
            </div>
        </div>
    );
};

export default CollegeName;