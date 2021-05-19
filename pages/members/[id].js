import React from 'react'
import axios from 'axios'

export const getStaticPaths = async() =>{
    let response = await axios.get('https://jsonplaceholder.typicode.com/users');
    let paths = response.data.map((member) =>{
        return { params :{id:member.id.toString()}}
    })
    return {
        paths:paths,
        fallback: false
    };
}

export const getStaticProps = async(context) =>{
    let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${context.params.id}`);
    let data = response?.data;
    return {props:{member:data}}
}
const Details = ({member}) => {
    return (
        <div>
            <h3>{member.name}</h3>
            <p>{member.website}</p>
            <p>{member.email}</p>
            <p>{member.address.street}</p>
            <p>{member.phone}</p>
            <p>{member.company.name}</p>
        </div>
    )
}

export default Details
