import React, { useEffect } from 'react'
import NoAuth from '../layout/NoAuth'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as api from "../services/auth"
import { useHistory } from 'react-router';
function Register() {
    const history = useHistory();
    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        const param = {
            username  : data.email,
            password  : data.password,
            firstname : data.firstname,
            lastname  : data.lastname
        }
        console.log(param);
        api.register(param)
        .then(res => {
            console.log('Success==:>',res.data);
            history.push('/')
        })
        .catch(error => {
            console.log('Error==:>',error);
        })
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
                    {errors?.firstname?.type === 'required' && <p style={{ color: 'red' }}>กรุณาระบุ FirstName</p>}
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
                    {errors?.lastname?.type === 'required' && <p style={{ color: 'red' }}>กรุณาระบุ LastName</p>}
                </div>
                
                <Button type='submit' variant='primary' block>Sign in</Button>
                <p className="mt-5 mb-3 text-muted" style={{ textAlign: 'center' }}>© 2017–2021</p>
            </Form>
        </NoAuth>
    )
}

export default Register
