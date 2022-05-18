import './App.css';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login'
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch ] = useStateValue();
  return (
    //BEM Naming Convension
    <div className="app">
      {!user ? (<Login />): (
      <>
      <Header />
      {/* Header */}
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      </>)}
      
     
    </div>
  );
}

export default App;
