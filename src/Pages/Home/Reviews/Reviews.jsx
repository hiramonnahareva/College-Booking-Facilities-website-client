import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Loading from '../../Shared/Loading';
import Review from './Review';


const Reviews = () => {
    var settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [reviews, setreviews] = useState([]);
    useEffect(() => {
        fetch('https://college-booking-facilities-wesite-server.onrender.com/reviews')
            .then(res => res.json())
            .then(data => setreviews(data))
    }, [])

    return (
        <>
            <h1 className='text-4xl text-center my-8 mt-40'>Reviews</h1>
            {
                reviews.length ?
                    <div className='bg-white lg:mx-20 py-5'>
                        {/* <Slider {...settings}> */}
                        <div className="grid lg:grid-cols-3">
                            {
                                reviews.map((review) => <Review key={review._id} review={review}></Review>
                                )
                            }
                        </div>

                    {/* </Slider> */}
      </div > : <Loading></Loading>
}
       </>
    );
};

export default Reviews;