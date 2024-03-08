
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import styles from "./style"
import SigninPage from './pages/signinPage';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Blogpage from './components/Blogpage';
import Blog from './pages/Blog';
import {  Routes, Route } from "react-router-dom"
import Footer from './components/Footer';
function App() {
  return (
   <>
   <div className='bg-gradient-to-r from-slate-900 via-gray-700 to-slate-600  w-full overflow-hidden'>
   <div>
   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar/>
            </div>
          </div>
   </div>
    <Routes>
      <Route exact path="/" element={<><Home/><Footer/></>}/>
      <Route exact path="/login" element={<><SigninPage/></>}/>
      <Route exact path="/blog" element={<><Blog/></>}/>
    </Routes>
    </div>
   
   </>
  );
}

export default App;
