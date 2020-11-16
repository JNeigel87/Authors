import './App.css';
import Main from './views/Main';
import OneAuthor from './views/Details';
import UpdateAuthor from './views/EditAuthor';
import Form from './views/AddAuthor';
import Errors from './views/Errors';
import {Router, Link} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors!</h1>
      <Link to="/">Home</Link> | <Link to="/new">Add Author</Link>
      <Router>
        <Main path="/"/>
        <OneAuthor path="/:_id"/>
        <Form path="/new"/>
        <UpdateAuthor path="/update/:_id"/>
        <Errors path="/errors"/>
      </Router>
      
    </div>
  );
}

export default App;
