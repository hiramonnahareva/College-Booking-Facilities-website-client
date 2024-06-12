

const MyCollegeCard = ({ college }) => {

    const { CollegeName, studentName, email, dateOfBirth, address, subject } = college;

    console.log(college)

    return (

       <div>
        {
        Object.keys(college).length > 0 ?  <div className="my-20">
        <h1 className='text-4xl text-center mb-8'>Colleges</h1>
        <div className="flex justify-center ">
            <div className="">
                <h2>Student Name: {studentName}</h2>
                <p>Student Email:{email}</p>
                <p>College Name: {CollegeName}</p>
                <p>address: {address}</p>
                <p>Subject: {subject}</p>
                <p>Date Of Birth: {dateOfBirth}</p>
            </div>
        </div>
    </div> : 
    
    <p className="text-2xl text-center my-40">You Haven&apos;t Admitted Yet</p>

       }
       </div>
    );
};

export default MyCollegeCard;