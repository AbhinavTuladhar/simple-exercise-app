import React, { useState, ChangeEvent, FormEvent } from 'react'
import axios from 'axios'

interface ExerciseProps {
  userName: string,
  description: string,
  duration: number,
  date: string,
}

const initialiseData = (): ExerciseProps => {
  return {
    userName: '',
    description: '',
    duration: 0,
    date: new Date().toISOString().split('T')[0]
  }
}

const CreateExercise = () => {
  const [formData, setFormData] = useState<ExerciseProps>(initialiseData())

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await axios.post('http://localhost:5000/api/post', formData)
    setFormData(initialiseData())
  }

  const updateData = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value, name } } = event
    setFormData(prevState => ({
      ...prevState,
      [name]: name === 'duration' ? Number(value) : value
    }))
  }

  return (
    <div className='px-16 flex flex-col gap-y-4'>
      <h1 className='font-bold text-2xl'>
        Add an exercise
      </h1>
      <form onSubmit={submitForm} className='flex flex-col gap-y-4'>
        <label> Username </label>
        <input value={formData.userName} type='text' name='userName' className='text-black p-2 w-full' placeholder='Enter the username' onChange={updateData} />
        <label> Description </label>
        <input value={formData.description} type='text' name='description' className='text-black p-2 w-full' placeholder='Describe the exercise' onChange={updateData} />
        <label> Duration </label>
        <input value={formData.duration} type='number' name='duration' className='text-black p-2 w-full' placeholder='Enter the duration' onChange={updateData} />
        <label> Date </label>
        <input value={formData.date} type='date' name='date' className='text-black p-2 w-full' placeholder='Enter the date' onChange={updateData} />
        <button type='submit' className='bg-blue-400 px-4 py-3 w-fit rounded-md'> Add </button>
      </form>
    </div>
  )
}

export default CreateExercise