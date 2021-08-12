import logo from '../../../logo.svg';
import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <OtherHeading name="test" />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <Button name="确定" />
          <Link to="/about">about</Link>
        </header>
      </div>
    );
  }
}

type Props = { name: string };
const OtherHeading = (props: Props) => <h1>My Website Heading {props.name}</h1>;

function Button(props: Props) {
  return <button>{props.name}</button>;
}
