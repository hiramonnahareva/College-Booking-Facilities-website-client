import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { CiEdit } from "react-icons/ci";

const MyProfile = () => {
    const [edit, setEdit] = useState(false);

    const [currentuser, setCurrent] = useState({})
    // const [updateUser, setupdateUser] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/user/${user.email}`)
                .then(res => res.json())
                .then(data => setCurrent(data))
        }
    
    }, [user])

    console.log(currentuser)

    const onSubmit = data => {
        const {_id} = currentuser;
        const {displayName, email, address, phone, education} = data;
        console.log(_id, data)
        const updateUser = {displayName, email, address, phone, education};
        const url = `http://localhost:5000/user/${_id}`;
       if(_id){
        fetch (url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        .then (res => res.json())
        .then (data => {
            console.log ('success', data);
            toast('user updated successfully');
            reset();
        })
       }
    }

    return (
        <div>

            <h1 className='text-4xl mb-12 text-center'>My Profile</h1>


            <div className="flex justify-center place-items-center mb-20">

                <div className="card bg-base-100 shadow-xl my-30 ">
                    <div className="card-body">
                        {!edit && <div>


                            {/* {user && user.displayName ? <p>Your Name: {currentuser.displayName}</p> : ''} */}


                            {
                                currentuser && <div className='h-[200px] lg:w-[400px]'>

                                    <p>Your Name: {currentuser.displayName}</p>
                                    <p>Your  Email: {currentuser.email}</p>
                                    <p>Your University: {currentuser.education}</p>
                                    <p>Your Address: {currentuser.address}</p>
                                    <p>Your New Phone: {currentuser.phone}</p>
                                </div>
                            }
                        </div>}
                        {edit &&
                            <div>
                                <h2 className="card-title">hello,<span className='text-secondary'>{user?.displayName}</span></h2>
                                <p className="text-[18px]">your email account: <span className='text-secondary'>{user?.email}</span></p>
                                <p>If you update your profile Please fill this form add update.</p>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {/* ----------- */}





                                    <div>
                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">Your Name</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("displayName", {
                                                    required: {
                                                        value: true,
                                                        message: 'Name is Required'
                                                    },
                                                })}
                                            />

                                            {/* ----------- */}

                                            <label className="label">
                                                <span className="label-text">Your Email</span>
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="Your email"
                                                value={user.email}
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("email", {
                                                    required: {
                                                        value: true,
                                                        
                                                        message: 'Email is Required'
                                                    },
                                                })}
                                            />

                                            {/* ----------- */}

                                            <label className="label">
                                                <span className="label-text">Your Address</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Your Address"
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("address", {
                                                    required: {
                                                        value: true,
                                                        message: 'Address is Required'
                                                    },
                                                })}
                                            />
                                            {/* ----------- */}
                                            <label className="label">
                                                <span className="label-text">Your university</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Your university"
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("education", {
                                                    required: {
                                                        value: true,
                                                        message: 'education is Required'
                                                    },
                                                })}
                                            />

                                        </div>

                                        {/* ----------- */}
                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">Your Phone</span>
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="Your Phone"
                                                className="input input-bordered w-full max-w-xs"
                                                {...register("phone", {
                                                    required: {
                                                        value: true,
                                                        message: 'Phone is Required'
                                                    },
                                                })}
                                            />

                                            {/* ----------- */}

                                            <input type="submit" value="Save" className="btn btn-primary max-w-xs text-white w-full my-4" />
                                        </div>
                                        </div>
                                </form>
                                </div>
                        }

                        {!edit && <button onClick={() => setEdit(true)}><CiEdit className='absolute text-4xl top-6 right-20' /></button>}
                    </div>

                </div>

            </div>

        </div>
    );
};

export default MyProfile;


