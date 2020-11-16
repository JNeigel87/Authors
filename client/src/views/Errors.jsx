import React, { useEffect, useState } from 'react';
import {Link} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Errors = props => {


    return(
        <div>
            <h1>Error: Author non-existent</h1>
            <p>Would you like to add them? <Link to="/new">Add Author</Link></p>
        </div>
    )
}

export default Errors;