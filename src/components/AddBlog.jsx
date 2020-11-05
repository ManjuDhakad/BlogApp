import React ,{useState} from 'react'
import {Link} from 'react-router-dom';
import {Header ,Footer} from './Layout';
import './style/AddBlog.css';

const AddBlog = () => {

    const [newBlog, setNewBlog] = useState({
        name: '',
        headline: '',
        path: '',
        content : '',
        blogger : ''
        }
      );
        const handleChange = evt => {
            const temp_name = evt.target.name;
            const temp_newValue = evt.target.value;
            // console.log(evt.target.name , evt.target.value)
            setNewBlog({...newBlog , [temp_name]: temp_newValue});
        }

    return (
    <div className = "container">
        <Header/>
        <h1>AddBlog here.............</h1>

        <table>
            <tr>
                <td><label>Category</label></td>
                <td><input type = "text"name = "name" value = {newBlog.name} placeholder ="Blog Category" onChange = {handleChange}/></td>
            </tr>
            <tr>
                <td><label>HeadLine</label></td>
                <td><input type ="text" name = "headline" value = {newBlog.headline} placeholder = "Blog HeadLine" onChange = {handleChange}/></td>
            </tr>
            <tr>
                <td><label>Content</label></td>
                <td><textarea name = "content" value = {newBlog.content} placeholder = "Blog Content" onChange = {handleChange}/></td>
            </tr>
            <tr>
                <td><label>Blogger Name</label></td>
                <td><input type ="text" name = "blogger" value = {newBlog.blogger} placeholder = "Blog HeadLine" onChange = {handleChange}/></td>
            </tr>
            <tr>
                <td><label>Chose Image</label></td>
                <td><input type ="file" name = "path" value = {newBlog.path} onChange = {handleChange}/></td>
            </tr>
            <tr>
                <td colSpan="2">
                    <Link to ={ {pathname :'/blog/ ' + newBlog.name , state:{newBlog}} }>
                        <button id = "add_btn" >Add Blog</button>
                    </Link>
                </td>
            </tr>
        </table>
        <Footer/>
    </div>)
}


export default AddBlog;