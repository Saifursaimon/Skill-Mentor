import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../UserContext/UserContext';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { logIn, googleLogIn, githubLogIn } = useContext(AuthContext)

    const navigate = useNavigate()

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    // log in
    const handleLogin = (event) => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value


        logIn(email, password).then(res => {
            const user = res.user
            toast.success('Log in Successful', {
                duration: 2000
            })
            navigate(from, { replace: true })
            console.log(user)
        }).catch(err => console.error(err))

        // console.log(email,password)
    }


    // goole log in 
    const handleGoogleLogIn = () => {
        googleLogIn().then(res => {
            const user = res.user
            toast.success('Log in Successful', {
                duration: 2000
            })
            navigate(from, { replace: true })
            console.log(user)
        }).catch(err => console.error(err))
    }

    // github login
    const handleGithubLogIn = () => {
        githubLogIn().then(res => {
            const user = res.user
            toast.success('Log in Successful', {
                duration: 2000
            })
            navigate(from, { replace: true })
            console.log(user)
        }).catch(err => console.error(err))
    }


    return (
        <Container>
            <div className="row justify-content-center mt-5">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card shadow ">
                        <div className="card-title mt-3">
                            <h2 className='text-center'>Login</h2>
                        </div>
                        <div className="card-body">
                            <Form onSubmit={handleLogin}>
                                {/* Email Field */}

                                <Form.Control
                                    type="email"
                                    name='email'
                                    placeholder="Enter email"
                                    className='mb-3'
                                />

                                {/* Password Field */}

                                <Form.Control
                                    type="password"
                                    name='password'
                                    placeholder="Password"
                                    className='mb-3'
                                />

                                {/* Login button */}
                                <Button type='submit' variant='primary' className='w-100'>Log In</Button>
                            </Form>

                            <div className="text-center">
                                <hr />
                                <span>OR</span>
                            </div>

                            {/* Other Login button */}
                            <div>
                                <Button variant='primary' className='w-100 mt-3' onClick={handleGoogleLogIn}>Log in with Google</Button>
                                <Button variant='dark' className='w-100 mt-3' onClick={handleGithubLogIn}>Log in with Github</Button>
                            </div>

                            {/* create account */}
                            <div className="mt-3 text-center">
                                <Form.Text>
                                    <Link className='text-primary text-decoration-none' to='/register'>
                                        Don't have an account ? <span>Register</span>
                                    </Link>
                                </Form.Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
};

export default Login;