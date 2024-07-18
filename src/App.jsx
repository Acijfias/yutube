
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import AppLayout from './layout/AppLayout'
import MainLayout from './layout/MainLayout'
import Home from './page/Home'
import ChanneDetail from './page/ChanneDetail'
import VideoDetail from './page/VideoDetail'
import SearchVideos from './page/SearchVideos'

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='video/:id' element={<VideoDetail />} />
            <Route path='channel/:id' element={<ChanneDetail />} />
            <Route path='search/:searchTerm' element={<SearchVideos />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
