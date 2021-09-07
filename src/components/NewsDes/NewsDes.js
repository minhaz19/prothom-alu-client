import React, { useEffect, useState } from 'react';

const NewsDes = ({ id }) => {
    const [newsDetails, setNewsDetails] = useState([]);
    const { name, author, description, category, imageURL, _id } = newsDetails;
    useEffect(() => {
        const url = `https://aqueous-depths-21897.herokuapp.com/news/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setNewsDetails(data))
    }, [id])
    return (
        <div className="container">
            <div class="card mt-3">
                <img src={imageURL} class="card-img-top" style={{height:"600px"}} alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <div class="small text-muted">Author: {author}</div>
                    <p class="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsDes;