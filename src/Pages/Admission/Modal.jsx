import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Modal = ({ collegeName, setCollegeName }) => {
    const formSubmit = event => {
        event.preventDefault();
        const myCollege = {
            CollegeName: collegeName,
            studentName: user.displayName,
            email: user.email,
            address: event.target.address.value,
            subject: event.target.subject.value,
            phone: event.target.phone.value,
            dateOfBirth: event.target.dateOfBirth.value,
        }
            fetch(`https://college-booking-facilities-wesite-server.onrender.com/myCollege/${user.email}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(myCollege)
            })
            .then(res => res.json())
            .then(data => {
                if(data){
                    toast.success(`Your college is booked`)
                }
                else{
                    toast.error('somethign is wrong')
                }
            })
            setCollegeName(null);
    }



    const [user] = useAuthState(auth);
    return (
        <div>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle btn-primary absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg my-2">{collegeName} </h3>
                    <form onSubmit={formSubmit}>
                        <input type="text" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs my-2" />
                        <input type="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs my-2" />


                        <input type="number" name='phone' placeholder="Your Phone Number" className="input input-bordered w-full max-w-xs my-2" />
                        <input type="text" name='address' placeholder="Your Address" className="input input-bordered w-full max-w-xs my-2" />
                        <input type="text" name='subject' placeholder="Your Subject" className="input input-bordered w-full max-w-xs my-2" />
                        <input type="date" name='dateOfBirth' placeholder="Your date of birth" className="input input-bordered w-full max-w-xs my-2" />
                        <input type="submit" value='submit' className="input text-center text-xl text-white bg-primary w-full max-w-xs my-2" />
                    </form>
                </div>
            </div>
        </div>


    );
};

export default Modal;