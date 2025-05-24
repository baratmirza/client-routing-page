import './App.css';
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import About from './Component1/About';
import WorkExamples from './Component1/WorkExamples';
import ContactInformation from './Component1/ContactInformation';
import PageNotFound404 from './Component1/PageNotFound404';
function App() {
  return (
    <div className="App">
      <div className='menu'>
      <Link to='/about'>About</Link>
      <Link to='/workexamples'>WorkExamples</Link>
      <Link to='/contactinformation'>ContactInformation</Link>
      </div>

     <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/workexamples' element={<WorkExamples />} />
        <Route path='/contactinformation' element={<ContactInformation />} />
        <Route path='*' element={<PageNotFound404 />} />
     </Routes>
    </div>
  )
}

export default App;