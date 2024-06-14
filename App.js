import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages 
import Home from './pages/home';
import About from './pages/about';
import ArticleList from './pages/articlelist';
import Notification from './pages/notification';
import Navbar from './components/navbar';
import Article from './pages/article';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <Navbar/>
      <div className="max-w-screen- mx-auto pt-20 pl-14 pr-14 bg-gradient-to-b from-green-200 to-blue-500"> 
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/article-list' element={<ArticleList />}/>
          <Route path='/article/:name' element={<Article />}/>
          <Route path='/notification' element={<Notification />}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
