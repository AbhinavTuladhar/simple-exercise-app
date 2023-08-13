import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ExerciseList from './components/ExerciseList'
import CreateExercise from './components/CreateExercise'

const App = () => {
  return (
    <div className='flex flex-col justify-between bg-slate-900 text-white min-h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<ExerciseList />} />
        <Route path='/create' element={<CreateExercise />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
