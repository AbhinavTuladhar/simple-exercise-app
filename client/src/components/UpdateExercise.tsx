import React, { useState, useEffect, ChangeEvent } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../utils/useFetch'

interface ExerciseProps {
  userName: string,
  description: string,
  duration: number | string,
  date: Date | any,
  lastFlag?: boolean,
  _id?: string
}

const UpdateExercise = () => {
  const { id } = useParams()
  const [formData, setFormData] = useState<ExerciseProps>({
    userName: '', 
    description: '', 
    duration: 0, 
    date: new Date()
  })
  
  // Query the api in order to fill up the initial form data.
  const url = `http://localhost:5000/api/getOne/${id}`
  const { data } = useFetch<ExerciseProps>(url)

  useEffect(() => {
    if (data !== null) {
      setFormData(data)
    }
  }, [data])

  if (!data) {
    return <p> Loading... </p>
  }

  const updateData = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value, name } } = event;
    setFormData(prevState => ({
      ...prevState,
      [name]: name === 'duration' ? Number(value) : name === 'date' ? new Date(value) : value
    }));
  }

  return (
    <div className='px-16 flex flex-col gap-y-4'>
      <h1 className='font-bold text-2xl'>
        Update exercise
      </h1>
      <form className='flex flex-col gap-y-4'>
        <label> Username </label>
        <input type='text' name='userName' className='text-black p-2 w-full' placeholder='Enter the username' value={formData.userName} onChange={updateData} />
        <label> Description </label>
        <input type='text' name='description' className='text-black p-2 w-full' placeholder='Describe the exercise' value={formData.description} onChange={updateData} />
        <label> Duration </label>
        <input type='number' name='duration' className='text-black p-2 w-full' placeholder='Enter the duration' value={formData.duration} onChange={updateData} />
        <label> Date </label>
        <input type='date' name='date' className='text-black p-2 w-full' placeholder='Enter the date' value={formData.date} onChange={updateData} />
        <button type='submit' className='bg-blue-400 px-4 py-3 w-fit rounded-md'> Update </button>
      </form>
    </div>
  )
}

export default UpdateExercise
