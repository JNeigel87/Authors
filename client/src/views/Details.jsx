import React, { useEffect, useState } from 'react';
import {Link} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const OneAuthor = props => {

    const [oneAuthor, setOneAuthor] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${props._id}`)
            .then(res => setOneAuthor(res.data.authors))
    }, [])

    return(
        <div>

            {
                oneAuthor ? 
                <div className="container">
                    <h1>{oneAuthor.name}</h1> 
                    <p>Here will be some info about the Authors books at a later date!</p>
                </div>
                : 
                <div className="container">
                    <h1>Error: Author doesn't exist!</h1>
                    <p><Link to="/new">Click here</Link> to add them!</p>
                </div>
                
            }
                    
        </div>
    )
}

export default OneAuthor;