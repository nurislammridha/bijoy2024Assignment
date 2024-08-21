'use client'
import React, { useEffect, useState } from 'react'
import googleIcon from "../../assets/images/google.png"
import { auth, googleAuthProvider } from "../../assets/functions/firebase";
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import { handleLogin } from '@/assets/functions/functions';
const Login = () => {
    const router = useRouter()
    const [isGoogle, setGoogle] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const googleLogin = async () => {
        setGoogle(true)
        auth
            .signInWithPopup(googleAuthProvider)
            .then(async (result) => {
                console.log('result', result)
                alert("Welcome " + result?.additionalUserInfo?.profile?.name + "\nYou are login with google")
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className='sign_up_container'>
            <div className='sign_up'>
                <p className='fs20 fm'>Welcome back, we missed you!</p>
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
                <div className='mt24 mmt16'>
                    <p className='clr959595 fs16 fm'>Password</p>
                    <div className='pass_show'>
                        <input
                            className='mt12'
                            type='password'
                            placeholder='enter password'
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <p
                        className='forgot_pass'
                    >
                        Forgot Password
                    </p>
                </div>

                <div
                    className=' mt40 sign_up_btn cp'
                    onClick={() => handleLogin({ email, password })}
                >
                    Login
                </div>
                <p className='mt20 fs16 tac'>OR</p>
                <div className='mt20 social_media'>
                    <div
                        className='google cp'
                        onClick={() => googleLogin()}
                    >
                        <Image className='s2424' src={googleIcon} alt='google' />
                        <span className='ml13 fs16'>Continue with google</span>
                    </div>
                </div>
                <div className='mt3'>
                    <span>Don't have an account? </span>
                    <a
                        className='cp'
                        onClick={() => router.push('/sign-up')}
                    > Sign Up

                    </a>
                </div>
            </div>
        </div>
    )
}
export default Login