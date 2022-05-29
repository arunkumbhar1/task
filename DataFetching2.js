import axios from 'axios';
import React, { useEffect,useState} from 'react'

export const DataFetching2 = () => {
    const [post, setpost] = useState([]);
    useEffect(() => { 
    axios
    .get(`https://jsonplaceholder.typicode.com/comments`)
    .then(ref=>{
        setpost(ref.data)
        
    })
    .catch(err=>{
        console.log("error in the fetch data"+err);
    })
})
    return (
        <div> 
            <h1>Hello</h1>
            <input type="text"/>
                
                {
                    post.map(post=>(
                        <table border="1px">
                            <th>
                            <li>{post.id}</li>
                            <li>{post.name}</li>
                            <li>{post.body}</li>
                        
                            </th>
                        </table>
                    ))
                }
                
            
        </div>
    )
}
