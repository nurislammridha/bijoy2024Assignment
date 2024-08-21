'use client'
import { handleSignUp } from '@/assets/functions/functions'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
const SignUp = () => {
    const router = useRouter()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [zip, setZip] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")
    return (
        <div className='sign_up_container'>
            <div className='sign_up'>
                <p className='fs20 fm'>Create your BIJOY24 account</p>
                <div className='mt40'>
                    <p className='clr959595 fs16 fm'>Full Name</p>
                    <input
                        className='mt12'
                        type='text'
                        placeholder='enter full name'
                        name='full_name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='mt24'>
                    <p className='clr959595 fs16 fm'>Email</p>
                    <input
                        className='mt12'
                        type='text'
                        placeholder='enter email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mt24'>
                    <p className='clr959595 fs16 fm'>Zip Code</p>
                    <input
                        className='mt12'
                        type='number'
                        placeholder='enter zip code'
                        name='zip'
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                    />
                </div>
                <div className='mt24'>
                    <p className='clr959595 mfs12  fs16 fm'>Password</p>
                    <input
                        className='mmt8 mt12'
                        type={'password'}
                        placeholder='enter password'
                        name='password'
                        value={password}
                        minLength={8}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='mt24'>
                    <p className='clr959595 mfs12 fs16 fm'>Confirm Password</p>

                    <input
                        className='mt12'
                        type={'password'}
                        placeholder='enter confirm password'
                        name='cPassword'
                        value={cPassword}
                        onChange={(e) => setCPassword(e.target.value)}
                    />
                </div>
                <div
                    className='mt40 sign_up_btn cp'
                    onClick={() => handleSignUp({ name, email, zip, password, cPassword })}
                >
                    <a href
                    >
                        Sign Up
                    </a>
                </div>

                <div className='mt32'>
                    <span>Already have an account? </span>
                    <a href
                        className='cp'
                        onClick={() => router.push('/login')}
                    >
                        Sign In
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SignUp