import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ExerciseList from './components/ExerciseList'

const Test = () => {
  return (
    <div>
      Test
    </div>
  )
}

const App = () => {
  return (
    <div className='flex flex-col justify-between bg-slate-900 text-white min-h-screen'>
      <Navbar />
      <Routes>
        <Route path='/create' element={<Test />} />
        <Route path='/' element={<ExerciseList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
