import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import { NovelIndexPage } from './view/pages/novel/Index';
import { AboutPage } from './view/pages/About';
import { HomePage } from './view/pages/Home';

function Topic() {
  const params = useParams<{topicId: string}>();

  return (
    <h3>
      Requested topic ID:
      {params.topicId}
    </h3>
  );
}

function Topics() {
  const match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/novels">Novels</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/novels">
            <NovelIndexPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
