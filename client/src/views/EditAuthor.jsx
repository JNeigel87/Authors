import React, { useEffect, useState } from 'react';
import {Link, navigate} from '@reach/router';
import Form from './AddAuthor';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const UpdateAuthor = props => {
    const [update, setUpdate] = useState({
        name: ""
    });

    const [error, setError] = useState({});

    const onChangeHandler = (e) => {
        e.preventDefault();
        setUpdate({
            ...update,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/update/${props._id}`, update)
            .then(res => {
                if(res.data.error){
                    console.log(res.data.error.errors)
                    setError(res.data.error.errors)
                } else {
                console.log("It really worked")
                navigate("/")
            }
        })
    }


    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${props._id}`)
            .then(res => setUpdate(res.data.authors))
    }, [])

    return (
        <div>
            {
                update ? 
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-2"></div>
                                <div className="col-sm-8">
                                    <form onSubmit={onSubmitHandler}>
                                        <div className="form-group">
                                            <label>Name: </label>
                                        <input type="text" name="name" className="form-control" onChange={onChangeHandler} value ={update ? update.name : ""} />
                                        {
                                            error.name ?
                                                <span className="text-danger">{error.name.message}</span> : ""
                                        }
                                        </div>
                                        <input type="submit" value="Submit" className="btn btn-success"/>
                                    </form>
                                </div>
                            <div className="col-sm-2"></div>
                        </div>
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

export default UpdateAuthor;