import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut,withAuthenticator } from '@aws-amplify/ui-react'

Amplify

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi This is sailaja</h1>
        <AmplifySignOut />  
      </header>
    </div>
  );
}

export default withAuthenticator(App);
