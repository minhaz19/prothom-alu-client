import React from 'react';
import NewsPart from '../NewsPart/NewsPart';
import Sidebar from '../Sidebar/Sidebar';

const MainPart = () => {
    return (
        <div class="container">
            <div class="row">
                <NewsPart></NewsPart>
                <Sidebar></Sidebar>

            </div>
        </div>
    );
};

export default MainPart;