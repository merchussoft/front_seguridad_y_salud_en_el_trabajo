import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Login } from './components/Login';

function App() {

  const [user, setUser] = useState(null);

  const hangleLogout = () => {
    setUser(null);
  }


  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element= {<Login setUser={setUser}/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
