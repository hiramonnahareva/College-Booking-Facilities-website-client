import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import MyCollegeCard from './MyCollegeCard';
import Reviews from './Reviews';
import Loading from '../Shared/Loading';

const MyCollege = () => {
    const [myCollege, setMyCollege] = useState([]);
    const [user] = useAuthState(auth);

    console.log(myCollege);

    // console.log(user.email)
    useEffect(() => {
        if (user) {
            fetch(`https://college-booking-facilities-wesite-server.onrender.com/myCollege/${user?.email}`)
                // , {
                // headers: {
                //     authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                // }
                // }
                .then(res => res.json())
                .then(data => setMyCollege(data));
        }

    }, [user?.email])
    return (
        <div className="overflow-x-auto lg:w-full w-96 px-2">

            {
               myCollege ?  <MyCollegeCard key={myCollege._id} college={myCollege}></MyCollegeCard> : <Loading/>
            }
        <Reviews/>
        </div>
    );
};

export default MyCollege;