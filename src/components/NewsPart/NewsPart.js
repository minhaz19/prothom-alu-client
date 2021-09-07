import React, { useEffect, useState } from 'react';
import NewsDetail from './NewsDetail';

const NewsPart = () => {
    const [newsData, setNews] = useState([])
    useEffect(() => {
        fetch('https://aqueous-depths-21897.herokuapp.com/news')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    return (
        <div class="col-lg-8">
            <div class="row">
                <div className="text-center mt-5">
                    <h3 style={{ color: '#FF0000' }}>All News</h3>
                </div>
                <div className="d-flex justify-content-center">
                <div className="row pt-5">
                {
                    newsData.map(news => <NewsDetail news={news}></NewsDetail>)
                }
                </div>
                </div>
            </div>
        </div>

    );
};

export default NewsPart;