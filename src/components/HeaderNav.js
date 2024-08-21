'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
const HeaderNav = () => {
    const router = useRouter()
    return (
        <div class="nav">
            <ul>
                <li onClick={() => router.push('/')}>
                    <span class="icon"><i class="fa-solid fa-house"></i></span>
                    <a class="nav-link" >Home</a>
                </li>
                <li onClick={() => router.push('/login')}>
                    <span><i class="fas fa-sign-in-alt"></i></span>
                    <a class="nav-link">Login</a>
                </li>
                <li onClick={() => router.push('/sign-up')}>
                    <span><i class="fas fa-sign-in-alt"></i></span>
                    <a class="nav-link" >Sign Up</a>
                </li>
                <li>
                    <span><i class="fa fa-user" aria-hidden="true"></i></span>
                    <a href="/" class="nav-link"><em>About</em></a>
                </li>
            </ul>
        </div>
    )
}

export default HeaderNav