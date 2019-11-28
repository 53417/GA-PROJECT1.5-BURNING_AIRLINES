import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminDestinations from './components/AdminDestinations';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Hello World</h1>
       <AdminDestinations />
      </header>
    </div>
  );
}

export default App;
