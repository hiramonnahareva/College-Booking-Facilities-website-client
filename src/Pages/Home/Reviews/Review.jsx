import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Review = ({ review }) => {

    console.log(review)

    const { reviewer, rating, description } = review;

    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<span className='text-xl text-yellow-600' key={i}>&#9733;</span>); // Unicode for star symbol
    }


    return (
        <div className={'p-5 text-center mx-4 mt-5 mb-5 px-8 shadow-lg'}>
            <div className='flex justify-center'>
            </div>
            <h2 className='text-2xl pt-5 font-bold pb-4'>{reviewer}</h2>
            <p className='text-justify'>{description}</p>
            <p>{stars}</p>
        </div>
    );
};

export default Review;