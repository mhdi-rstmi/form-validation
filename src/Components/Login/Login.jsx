import React from 'react';
import { useNavigate } from "react-router-dom"
import "./Login.css";

import userSchema from '../../Validations/UserValidationYup';

import { Formik, Form, Field, ErrorMessage } from 'formik';




const Login = () => {

    const navigate = useNavigate();
    return (
        <div className='login-box'>
            <h1>Sign Up</h1>
            <Formik initialValues={{
                firstname: "",
                lastname: "",
                age: "",
                email: "",
                phone: "",
                password: ""
            }}
                validationSchema={userSchema}
                onSubmit={(values) => {
                    console.log(values);
                    navigate("/success")
                }}>

                <Form>
                    <div className="user-box">
                        <Field type="text" name="firstname" placeholder=' ' />
                        <ErrorMessage name="firstname" render={msg => <div className='err'>
                            {msg}
                        </div>} />
                        <label>First Name</label>
                    </div>
                    <div className="user-box">
                        <Field type="text" name='lastname' placeholder=' ' />
                        <ErrorMessage name="lastname" render={msg => <div className='err'>
                            {msg}
                        </div>} />

                        <label>Last Name</label>
                    </div>
                    <div className="user-box">
                        <Field type="number" name='age' placeholder=' ' />
                        <ErrorMessage name="age" render={msg => <div className='err'>
                            {msg}
                        </div>} />

                        <label>Age</label>
                    </div>

                    <div className="user-box">
                        <Field type="email" name='email' placeholder=' ' />
                        <ErrorMessage name="email" render={msg => <div className='err'>
                            {msg}
                        </div>} />

                        <label>e-mail</label>
                    </div>
                    <div className="user-box">
                        <Field type="number" name='phone' placeholder=' ' />
                        <ErrorMessage name="phone" render={msg => <div className='err'>
                            {msg}
                        </div>} />

                        <label>Phone Number</label>
                    </div>
                    <div className="user-box">
                        <Field type="password" name='password' placeholder=' ' />
                        <ErrorMessage name="password" render={msg => <div className='err'>
                            {msg}
                        </div>} />

                        <label>Password</label>
                    </div>
                    <div className='btn' >
                        <button type='submit' className='btnLink' >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            submit
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>

    );
}

export default Login;
