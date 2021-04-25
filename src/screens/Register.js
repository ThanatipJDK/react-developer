import React, { useEffect, useState } from 'react'
import NoAuth from '../layout/NoAuth'
import { Form, Button, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const login = {
    email: 'test@test.com',
    password: '123456'
}

// let anonyUseEffect

// Login()
// const unmount = anonyUseEffect()

// if(unmount === function) ? unmount() : null

function Register() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const [checkLogin, setCheckLogin] = useState({
        isSuccess: false,
        error: '',
    })


    const onSubmit = (data) => {
        console.log(data);
        reset()
    }


    // console.log('set props & set state');

    useEffect(() => {
        // console.log('useEffect');
        return () => {

        }
    }, [])

    // console.log('render');

    return (
        <NoAuth>
            <Form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                    textAlign: 'left',
                }}
            >
                <h1 className="h3 mb-3 fw-normal" style={{ textAlign: 'center' }}>Please sign up</h1>

                <div className="form-floating">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        {...register('email', {
                            required: true,
                        })}
                        type='text'
                        placeholder='name@example.com'
                    />
                    {errors?.email?.type === 'required' && <p style={{ color: 'red' }}>กรุณาระบุ username</p>}
                </div>
                <div className="form-floating">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        {...register('password', {
                            required: true,
                        })}
                        type='password'
                        placeholder='Password'
                    />
                    {errors?.password?.type === 'required' && <p style={{ color: 'red' }}>กรุณาระบุ password</p>}
                </div>

                <div className="form-floating">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        {...register('firstname', {
                            required: true,
                        })}
                        type='text'
                        placeholder='FirstName'
                    />
                    {errors?.password?.type === 'required' && <p style={{ color: 'red' }}>กรุณาระบุ password</p>}
                </div>

                <div className="form-floating">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        {...register('lastname', {
                            required: true,
                        })}
                        type='text'
                        placeholder='LastName'
                    />
                    {errors?.password?.type === 'required' && <p style={{ color: 'red' }}>กรุณาระบุ password</p>}
                </div>
                
                <Button type='submit' variant='primary' block>Sign in</Button>
                <p className="mt-5 mb-3 text-muted" style={{ textAlign: 'center' }}>© 2017–2021</p>
            </Form>
        </NoAuth>
    )
}

export default Register
