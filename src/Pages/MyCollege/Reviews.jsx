// import { toast } from "react-toastify";

import { useState } from "react";
import Rating from "./Rating";
import { toast } from "react-toastify";

const Reviews = () => {

    const [rating, setRating] = useState(0);

  const handleRatingSelect = (newRating) => {
    setRating(newRating);
  };

    const onSubmit = event => {

        event.preventDefault();
        const review = {
            reviewer: event.target.name.value,
            description: event.target.description.value,
            rating: rating,

        }
        console.log(review)

        fetch(`http://localhost:5000/review`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                toast.success(`Successfully sent your review.`)
            }
            else{
                toast.error('somethign is wrong')
            }
        })

    }

  

  

    return (
        <div>
              <h1 className='text-4xl text-center mb-8'>Review Here</h1>
        <form className="flex flex-col justify-start items-center" onSubmit={onSubmit}>

            <div className="form-control w-full max-w-xs my-4">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered w-full max-w-xs my-4"
                />
            </div>
            <div className="form-control w-full max-w-xs h-50">
            <div className="form-control w-full max-w-xs">
                <Rating onRatingSelect={handleRatingSelect} />
            </div>
            <label className="label">
                    <span className="label-text">Review</span>
                </label>
                <textarea type="text"
                    name="description"
                    className='w-[100%] border-[1px] border-gray-300 rounded-lg p-5' placeholder='Your Review' rows="5" id="" ></textarea>
            </div>
            
            <div className="card-actions justify-end my-4">
                <input type="submit" value="Add Review" className="btn btn-primary max-w-xs text-white w-full" />
            </div>
        </form>
        </div>
    );
};

export default Reviews;