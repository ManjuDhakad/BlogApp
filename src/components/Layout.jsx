import React from 'react'
import {useHistory} from 'react-router-dom'
;
import './style/Layout.css';

const Header = () => {
    const history = useHistory();
    const addNewBlog = () => history.push('/addBlog');

    return (
        <header className = "header">
            <h1 className= "title">Show the Logo</h1>
            <button id = "header_btn" onClick = {addNewBlog}>New Blog</button>
        </header>
        );
}
const Footer = () => {
    return (
        <footer>
            <h1>Blog Copy Write</h1>
            <image src = "#" alt = "image here" />
        </footer>
        );
}


export {Header , Footer};