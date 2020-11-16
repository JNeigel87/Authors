import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const Main = props => {
    const [authors, setAuthors] = useState();

    const [update, setUpdate] = useState(false);

    const removeAuth = _id => {
        axios.delete(`http://localhost:8000/api/authors/delete/${_id}`)
            .then(res => setUpdate(!update))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => setAuthors(res.data.authors))
            
    }, [update])

    return(
        <div>
            <div className="jumbotron">
                <h1>List of authors here!</h1>
            </div>
            <table className="table table-bordered table-dark">
                <tbody>
                    <tr>
                        <td>Author's Name</td>
                        <td>Actions</td>
                    </tr>
                        {
                            authors ?
                            authors.map((auth, i) => {
                                return <tr>
                                <a href={`http://localhost:3000/${auth._id}`}><td>{auth.name}</td></a>
                                <td> <a className="btn btn-sm btn-info" href={`http://localhost:3000/update/${auth._id}`}>
Edit</a> | <button onClick={() => removeAuth(auth._id)} className="btn-sm btn-danger">Delete</button> </td>
                                </tr>
                            }) : ""
                        }
                </tbody>
            </table>
        </div>
    )
}

export default Main;