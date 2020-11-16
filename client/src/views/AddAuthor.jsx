import React, {useState } from 'react';
import {navigate} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const Form = props => {
    const [form, setForm] = useState({
        name: ""
    });

    const [error, setError] = useState({});

    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors/new", form)
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

    return(
        <div>
            <div className="row">
                <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <form onSubmit={onSubmitHandler}>
                            <div className="form-group">
                                <label>Name: </label>
                            <input type="text" name="name" className="form-control" onChange={onChangeHandler} value ={form ? form.name : ""} />
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
    )
}

export default Form;