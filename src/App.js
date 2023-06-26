import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import GetAllNewsComponent from './components/GetAllNewsComponent/GetAllNewsComponent';
import AddNewsComponent from './components/AddNewsComponent/AddNewsComponent';
import EditNewsComponent from './components/EditNewsComponent/EditNewsComponent';
import DeleteNewsComponent from './components/DeleteNewsComponent/DeleteNewsComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <h1>News Reader App</h1>
          <p>Current News as its earliest!!</p>
             
          <nav className="nav-menu">
            <Link to="/" >Home</Link>
            <Link to="/admin/add" >Add News</Link>
            <Link to="/admin/edit" >Edit News</Link>
            <Link to="/admin/delete" >Delete News</Link>
          </nav>
          <Routes>
            <Route exact path='/' element={<GetAllNewsComponent/>}/>
            <Route exact path='/admin/add' element={<AddNewsComponent/>}/>
            <Route path='/admin/edit' element={<EditNewsComponent/>}/>
            <Route path='/admin/delete' element={<DeleteNewsComponent/>}/>
          </Routes>
        </div>
       </Router>
    </div>
  );
}

export default App;
