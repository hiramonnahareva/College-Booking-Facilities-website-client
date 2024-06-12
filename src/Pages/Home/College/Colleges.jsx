
import { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading';
import CollegeCard from './CollegeCard';


const College = () => {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };


    const filteredcolleges = colleges.filter((college) => {
        return (

            college.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    return (
        <div className='flex flex-col items-center justify-center w-[100%]'>


            <h1 className='lg:mt-40 lg:mb-8 my-0 text-4xl mb-8'>Colleges</h1>

            <div className=' flex lg:flex-row flex-col gap-20'>

                <input
                    type="text"
                    placeholder="Search colleges"
                    className="input input-bordered lg:w-[500px] md:w-[400px] my-5 w-[100%] rounded-full"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>

            {
                colleges.length ?
                    <div className='bg-white lg:mx-20'>
                        <div>
                            <div className="grid lg:grid-cols-3">
                                {
                                    filteredcolleges.slice(0 , 3).map((college) => <CollegeCard key={college._id} college={college}></CollegeCard>

                                    )
                                }
                            </div>
                        </div>
                    </div> : <Loading></Loading>
            }
        </div>
    );
};

export default College;