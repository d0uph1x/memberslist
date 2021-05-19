import React from 'react'
import axios from 'axios';
import styles from '../../styles/Members.module.css';
import Link from 'next/link';

export const getStaticProps = async () =>{
    let resp = await axios.get('https://jsonplaceholder.typicode.com/users');
    return {
        props:{
            members: resp.data
        }
    }
}

const Members = ({members}) => {
    return (
        <div>
            <h2>List of members</h2>
            {members.map((member,index)=>(
                <Link href={`/members/${member.id}`} key={index}>
                    <a className={styles.single}>
                        <h3>{member.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    )
}

export default Members
