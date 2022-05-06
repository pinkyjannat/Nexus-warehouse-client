import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);
    let loginError;

    if (loading || sending) {
        return <Loading></Loading>
    }
    if (error) {

        loginError =
            <div className='text-danger mt-2 text-center'>
                <p>Error: {error.message}</p>
            </div>

    }


    const handleSubmit = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        console.log(email);
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
        console.log(user);

    }
    const handleReset = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email address')
        }
    }

    return (
        <div className=' bg-dark py-5 w-50 mx-auto text-white my-5 rounded' style={{ height: '65as0px' }}>
            <h2 className='mx-auto text-center text-bold mt-2 mb-5'>Sign Into Your Account</h2>
            <Form onSubmit={handleSubmit} className='pb-5'>
                <Form.Group className="mb-3 w-50 mx-auto " controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-4 pb-2 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="info w-50 mx-auto d-block" className='' type="submit">
                    <small className='fs-5 text-bold p-2'> Login</small>
                </Button>
                {loginError}
                <p className='text-center mt-3'>Forget Your password?  <button className='btn btn-link text-info text-decoration-none pe-auto' onClick={handleReset}>Reset password</button> </p>
                <p className='text-center mt-0'>Don't have an account? <Link className='text-info text-decoration-none' to='/register'> Register here</Link></p>
                <SocialLogin></SocialLogin>

            </Form>

        </div>
    );
};

export default Login;