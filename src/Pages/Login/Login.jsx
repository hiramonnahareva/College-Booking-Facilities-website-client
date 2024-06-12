import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import UseToken from '../../Hooks/UseToken';
import Loading from '../Shared/Loading';
import { FaGithub } from 'react-icons/fa';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";






    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [token] = UseToken(user || gUser)
    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password);
    }
    if (error || gError) {
        // return  signUpError = <p><small className='text-red-600'>{error?.message || gError?.message}</small></p> ;
    }
    if (loading || gLoading) {
        return <Loading></Loading>;
    }
    if (user) {
        navigate(from, { replace: true });
    }


    return (
        <div className='flex justify-center my-5'>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body items-center text-center ">
                    <div className='w-full justify-center'>
                        <div>
                            <h2 className='text-3xl text-primary'>Login</h2>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            },
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: 'Provide a Valid Email'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Your Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="password"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is Required'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Must be 6 characters'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                    </label>
                                </div>
                                <input type="submit" value="login" className="btn btn-primary max-w-xs text-white w-full" />
                            </form>
                        </div>
                        <p className='pt-2'>New To Here <Link className='text-secondary ' to='/signup'>Please Sign Up</Link></p>
                        <div className="divider">OR</div>
                        <button className='btn btn-outline btn-primary w-full' onClick={() => signInWithGoogle()}>Continue with Google</button>
                        <button className='btn btn-outline btn-primary w-full my-2' onClick={() => signInWithGithub()}><FaGithub /> Continue with Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;