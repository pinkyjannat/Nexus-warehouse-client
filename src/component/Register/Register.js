import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import login from '../../images/login/login.webp';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth ,{ sendEmailVerification: true });
    let registerError;
    if (loading) {
        return <Loading></Loading>;
    }
    if (error) {
        registerError =
            <div className='text-danger mt-2 text-center'>
                <p>Error: {error.message}</p>
            </div>
    }


    const handleSubmit = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }

    return (
      <div className='container'>
          <div className='row'>
              <div className='col-lg-8'>
              <div className=' bg-dark p-2 w-30 mx-auto text-white my-2' style={{ height: '550px' }}>
            <h2 className='mx-auto text-center text-bold mt-2 mb-4'>Create Accounting</h2>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="name" name='name' placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-4 pb-2 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary w-50 mx-auto d-block" type="submit">
                    <small className='fs-5 text-bold p-2 '>Register</small>
                </Button>
                <p className='text-center mt-3'>Already a member? <Link className='text-primary text-decoration-none' to='/login'> Login here</Link></p>
                {registerError}
            </Form>
            <SocialLogin></SocialLogin>
        </div>
              </div>
              <div className="col-lg-4">
              <img  className=" w-100" src={login} alt="" />
              </div>
          </div>
      </div>
    );
};

export default Register;