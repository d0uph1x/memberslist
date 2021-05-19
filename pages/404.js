import Link from 'next/link';
import React,{useEffect} from 'react';
import {useRouter} from 'next/router';
const NotFound = () => {
    const router = useRouter();

    useEffect(()=>{
    setTimeout(() => {
        router.push('/')
    }, 3000);
    },[])
    return (
        <div className='not-found'>
            <h3>Opps ,Seems you're lost, Page not found</h3>
            <Link href='/'><a> Go back Home</a></Link>
        </div>
    )
}

export default NotFound
