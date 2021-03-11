import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory
} from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/feed">Feed</Link>
          </li>
          <li>
            <Link to="/likes">Liked Images</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/feed">
            <Feed />
          </Route>
          <Route path="/likes">
            <Likes />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Likes() {
  return <h2>Feed image here</h2>;
}

function Feed() {
  // let match = useRouteMatch();

  return (
    <div>
      <h2>Image Feed</h2>
          <h1>Images</h1>
          <Link to={`/feed/image1`}>Image 1</Link>
          <h1>Images</h1>
          
          <h1>Images</h1>
          
          <h1>Images</h1><h1>Images</h1><h1>Images</h1>
          <h1>Images</h1><h1>Images</h1><h1>Images</h1>
          <h1>Images</h1><h1>Images</h1><h1>Images</h1>
          <h1>Images</h1><h1>Images</h1><h1>Images</h1>
          <Link to={`/feed/image2`}>Image 2</Link>
          <h1>Images</h1><h1>Images</h1><h1>Images</h1>
          <h1>Images</h1><h1>Images</h1><h1>Images</h1>
          <h1>Images</h1><h1>Images</h1><h1>Images</h1>
          <h1>Images</h1><h1>Images</h1><h1>Images</h1>
          <Link to={`/feed/image3`}>Image 3</Link>
          <h1>Images</h1><h1>Images</h1><h1>Images</h1>

      <Switch>
        <Route path={`/feed/:imageId`}>
          <Modal />
        </Route>
      </Switch>
    </div>
  );
}

function Modal(props) {
  let { imageId } = useParams();
  const history = useHistory();

  const goBack = () => {
    history.goBack()
  }

  return ( 
    <div className="overlay">
      <div className="modal">
        <h3>Requested image id: {imageId}</h3>
        <button type="button" onClick={goBack}>
        Close
      </button>
      </div>
    </div>
  );
}