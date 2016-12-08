import React from 'react';
import { render } from 'react-dom';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';

const Root = () => {
  return(
    <div id="root">
      <App />
    </div>
  )
}

render(<Root />, document.getElementById('root'));