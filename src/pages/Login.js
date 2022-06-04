import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password)
        console.log(data)
    };

    let errorMsg;
    let load;
    const navigate = useNavigate();
    if (user || gUser) {
        // console.log(user?.user, 'goog', gUser?.u);
    }
    // const [token] = useToken(user || gUser);

    if (error || gError) {
        errorMsg = <p>{error?.message || gError?.message}</p>
    }


    if (loading || gLoading) {
        load = <div >
            <button className="btn btn-circle loading bg-accent"></button>
            <button className="btn btn-circle loading bg-accent"></button>
            <button className="btn btn-circle loading bg-accent"></button>
        </div>

    }
    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true })
        }
    }, [user, gUser, from, navigate])
    return (
        <div>
            <div className="card max-w-sm mx-auto  text-accent shadow-2xl">
                <div className="card-body ">
                    <h2 className="card-title text-center">Login</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs text-accent">
                            <label className="label">
                                <span className="">Email</span>

                            </label>
                            <input type="email" className="input input-bordered w-full max-w-xs" {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: 'Invalid Email' // JS only: <p>error message</p> TS only support string
                                }
                            })} />
                            <label >
                                {errors.email?.type === 'required' && <span className="text-xs text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="text-xs text-red-500">{errors.email.message}</span>}


                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs text-accent">
                            <label>
                                <span className="">Password</span>

                            </label>
                            <input type="password" className="input input-bordered w-full max-w-xs" {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 char long' // JS only: <p>error message</p> TS only support string
                                }
                            })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="text-xs text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="text-xs text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        <div className='flex justify-center mb-3'>
                            {load} <small className='text-red-500'>{errorMsg}</small>
                        </div>

                        <input type='submit' value="Login" className="btn btn-error text-white
                         w-full" />
                    </form>
                    <p>New to Autocar? <Link className='text-error' to="/register">Create new account</Link></p>


                    <div className="divider">OR</div>

                    <button onClick={() => { signInWithGoogle() }} className="btn btn-outline btn-success">SignIn with GOOGLE</button>
                    <button className="btn btn-outline btn-success">SignIn with GITHUB</button>
                </div>
            </div>
        </div>
    );
};

export default Login;