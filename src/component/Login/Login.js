import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import login from '../../images/login/login.webp';
import useToken from '../../hooks/UseToken';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let loginError;

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user);

    if (loading || sending) {
        return <Loading></Loading>
    }
    if(token){
        navigate(from, { replace: true });
    }
    if (error) {

        loginError =
            <div className='text-danger mt-2 text-center'>
                <p>Error: {error.message}</p>
            </div>
    }

console.log(user);
    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
       await signInWithEmailAndPassword(email, password);
        
        

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
      <div className='container'>
           <div className='row'>
           <div className='col-lg-8'>
           <div className=' bg-dark p-2 w-30 mx-auto text-white my-2' style={{ height: '550px' }}>
            <h2 className='mx-auto text-center text-bold mt-2 mb-4'>Sign In</h2>
            <Form onSubmit={handleSubmit} className='pb-5'>
                <Form.Group className="mb-3 w-50 mx-auto " controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-4 pb-2 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary w-50 mx-auto d-block" className='' type="submit">
                    <small className='fs-5 text-bold p-2'> Login</small>
                </Button>
                {loginError}
                <p className='text-center mt-3'>Forget Your password?  <button className='btn btn-link text-primary text-decoration-none pe-auto' onClick={handleReset}>Reset password</button> </p>
                <p className='text-center mt-0'>Don't have an account? <Link className='text-primary text-decoration-none' to='/register'> Register here</Link></p>
                <SocialLogin></SocialLogin>

            </Form>

        </div>
           </div>
           <div className='col-lg-4 '>
               <img  className=" w-100" src={login} alt="" />
           </div>

       </div>
      </div>
    );
};

export default Login;