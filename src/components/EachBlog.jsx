import React ,  {useState , useEffect} from 'react';
import {Header ,Footer} from './Layout';
import {Link} from 'react-router-dom';
import './style/EachBlog.css';
import eachBlogData from './allCategoryBlogList/eachBlogData';


const EachBlog = (props) => {
    const [stateEachBlogData , setStateEachBlogData] = useState(eachBlogData);

    // console.log(props);
    useEffect(() => {
        if (props.location.state)
        { 
            // const newStateEachBlogData = [...stateEachBlogData , props.location.state.newBlog];
            setStateEachBlogData([...stateEachBlogData , props.location.state.newBlog]);

            console.log(stateEachBlogData);
            // console.log(newStateEachBlogData);
            console.log(props.match.params.id);

        }
    }, [props]);

    // console.log(props.match.params.id)
    // console.log(eachBlogData)
    const filteredBlogList = stateEachBlogData.filter((item) => {return (item.name === props.match.params.id)})

    // console.log(props.match.params.id)

    // console.log(filteredBlogList)
    return (
        <div className="container" >
        <Header/>
        <h1>{props.match.params.id}</h1>
            {filteredBlogList.map((item , index ) => {
                return (
                    <div className = "each_card" id = {index}>
                        <h2> {item.headline} </h2>
                        <img src = {item.path} />
                        <p>{item.content}</p>
                        <div className = "btn">
                            <Link to = {'/editblog/' + props.match.params.id + (index+1)}>
                                <button>Edit </button>
                            </Link >
                            <Link to = {'/blog/' + (index+1)}>
                                <button >Delete </button>
                            </Link >
                            
                        </div> 
                        <span> {item.blogger}</span>
                    </div>
                )
            })}
        <Footer />
        </div>
    )
}
export default EachBlog;