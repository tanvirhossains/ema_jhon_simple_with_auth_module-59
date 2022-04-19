import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../_firebase-init';

const Shipment = () => {
    const [name, setName] = useState()
    const [address, setAddress] = useState()
    const [email, setEmail] = useState()
    const [number, setNumber] = useState()
    const [error, setError] = useState()
    // const navigate = useNavigate()




    const handleNameBlur = (event) => {
        setName(event.target.value)

    }
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handleAddressBlur = (event) => {
        setAddress(event.target.value)
    }

    const handleNumberBlur = event => {
        setNumber(event.target.value)
    }



    const handleCreateUser = (event) => {
        event.preventDefault()


    }

    return <div className='form-container'>
        <div>
            <h1>Shipping Information</h1>
            <form className='form' onSubmit={handleCreateUser}>
                <div className='input-group'>
                    <label htmlFor="Email">Name</label>
                    <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                </div>
                <div className='input-group'>
                    <label htmlFor="Email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Address</label>
                    <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                </div>
                <div className='input-group'>
                    <label htmlFor="confirm-password" > Phone Number</label>
                    <input onBlur={handleNumberBlur} type="number" required />
                </div>
                <p style={{ color: 'red' }}>{error}</p>
                <input className='submit-btn' type="submit" value="Add shipping" required />


            </form>
        </div>
    </div>
};

export default Shipment;