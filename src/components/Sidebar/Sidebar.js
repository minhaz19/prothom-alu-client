import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './Sidebar.css';

const Sidebar = () => {
    const [newsData, setNews] = useState([])
    useEffect(() => {
        fetch('https://aqueous-depths-21897.herokuapp.com/news')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    let history = useHistory();
    const handleSubmit = (id) =>{
        const url = `/news/${id}`;
        history.push(url);
    }
    return (
            <div class="col-lg-4 mt-5">      
                <div class="card mb-4 mt-5">
                    <h4 style={{ color: '#FF0000' }} class="card-header">Top News</h4>
                    <div class="card-body">
                        <ul>
                            {
                                newsData.map(n=> <li><h5 className="top" onClick={() =>handleSubmit(n._id)} to={`/news/${n._id}`}>{n.name}</h5></li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
    );
};

export default Sidebar;