import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const NewsDetail = ({news}) => {
    const {name, author, description, category, imageURL, _id} = news;
    const des = description.substring(0,50);

    let history = useHistory();
    const handleSubmit = (id) =>{
        const url = `/news/${id}`;
        history.push(url);
    }
    return (
        <div class="card mb-4 col-md-4">
            <img class="card-img-top" src={imageURL} alt="..."/>
            <div class="card-body">
                <div class="small text-muted">{author}</div>
                <h2 class="card-title h4">{name}</h2>
                <p class="card-text">{des}...</p>
                <Link onClick={() =>handleSubmit(_id)} to={`/news/${_id}`} class="btn btn-danger" href="#!">Read more →</Link>
            </div>
        </div>
   
    );
};

export default NewsDetail;