import React from 'react';
import {useHistory , Link} from 'react-router-dom';

import './style/CategoryBlogCrad.css';


const CategoryBlogCard = (props) => {

return (
    <Link to = {'/blog/' + props.data.name}>
        <div className = "card" id ={props.data.name} >
            <img src = {props.data.path} /> 
            <h2 id = "category"> {props.data.name} </h2>
        </div>
    </Link>
    );
};

export default CategoryBlogCard;
