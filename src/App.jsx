import React, { Component } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ResultSection from './components/ResultSection'
import './index.css';
function App (){
  return (
      <div className='min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100'>
        <Header/>
        <div className="App container mx-auto px-4 py-8">
          <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">Student Result</h2>
          <SearchBar/>
        </div>
      </div>
  )
}
export default App
