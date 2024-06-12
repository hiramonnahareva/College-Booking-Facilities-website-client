
import { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import CollegeCard from './CollegeCard';


const Colleges = () => {
    const [College, setCollege] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => setCollege(data))
    }, [])

    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl mb-8'>Colleges</h1>
            {
                College.length ?
                    <div className='bg-white lg:mx-20 py-5'>
                        <div>
                            <div className="grid lg:grid-cols-3">
                                {
                                    College.map((college) => <CollegeCard key={college._id} college={college}></CollegeCard>

                                    )
                                }
                            </div>
                        </div>
                    </div> : <Loading></Loading>
            }
        </div>
    );
};

export default Colleges;