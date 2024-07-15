import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import SearchedVideos from './components/SearchedVideos.jsx'
import Player from './components/Player.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import CreateVideo from './components/CreateVideo.jsx'
import CreateTweet from './components/CreateTweet.jsx'
import CreatePlaylist from './components/CreatePlaylist.jsx'
import ShowPlaylist from './components/ShowPlaylist.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>} >
           <Route path='/' element={<Home/>} />
           <Route path='searchVideos/:search' element={<SearchedVideos/>}/>
           <Route path='player/:video_id' element={<Player/>} />
           <Route path='signup' element={<Signup/>} />
           <Route path='login' element={<Login/>} />
           <Route path='profile/:userId' element={<Profile/>} />
           <Route path='create-video' element={<CreateVideo/>} />
           <Route path='create-tweet' element={<CreateTweet/>} />
           <Route path='create-playlist' element={<CreatePlaylist/>} />
           <Route path='playlist/:playlistId' element={<ShowPlaylist/>} />


        </Route>
    )
)


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
<RouterProvider router={router} />
  </Provider>
)
