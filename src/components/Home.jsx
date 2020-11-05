import React from 'react'

import './style/Home.css';
import {Header ,Footer} from './Layout';
import CategoryBlogCard from './CategoryBlogCard';
import categoryImgList from './allCategoryBlogList/categoryHomeImgList';


const Home = () => {
    // console.log(categoryImgList);
   

    return (
        <div className  = "container">
            <Header />
            <div className = "main_section">
                {categoryImgList.map ((item) => { return <CategoryBlogCard data={item} />})}
            </div>
            <Footer/>
        </div>
        );
}

export default Home;