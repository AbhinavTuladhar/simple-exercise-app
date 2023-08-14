import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ExerciseList from './components/ExerciseList'
import CreateExercise from './components/CreateExercise'
import UpdateExercise from './components/UpdateExercise'

const App = () => {
  return (
    <div className='flex flex-col justify-between gap-y-6 bg-slate-900 text-white min-h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<ExerciseList />} />
        <Route path='/create' element={<CreateExercise />} />
        <Route path='/update/:id' element={<UpdateExercise />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
