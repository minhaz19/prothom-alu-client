import React from 'react';
import { useParams } from 'react-router';
import Navbar from '../Navbar/Navbar';
import NewsDes from '../NewsDes/NewsDes';

const AllNews = () => {
    let { id } = useParams(); 
    return (
        <div>
            <Navbar></Navbar>
            <NewsDes id={id}></NewsDes>
        </div>
    );
};

export default AllNews;