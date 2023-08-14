import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../utils/useFetch'
import axios from 'axios'

interface ExerciseProps {
  userName: string,
  description: string,
  duration: number | string,
  date: Date,
  lastFlag?: boolean,
  _id: string,
  deleteExercise(id: string): void
}

const Exercise: FunctionComponent<ExerciseProps> = ({ userName, description, duration, date, lastFlag, _id, deleteExercise }) => {
  const actions = (
    <span>
      <Link className='font-bold text-blue-500 hover:text-red-500 hover:underline duration-300' to={`/update/${_id}`}> edit </Link>
      |
      <Link className='font-bold text-blue-500 hover:text-red-500 hover:underline duration-300' to='/' onClick={() => deleteExercise(_id)}> delete </Link>
    </span>
  )
  const data = [userName, description, duration, String(date).split('T')[0], actions]
  return (
    <div className='table-row w-full whitespace-nowrap'>
      {data.map((item, index) => (
        <div className={`py-4 px-4 table-cell border-t-[1px] border-white ${lastFlag && 'border-b-[1px] whitespace-nowrap'}`} key={index}>
          { item }
        </div>
      ))}
    </div>
  )
}

const ExerciseList = () => {
  const url: string = 'http://localhost:5000/api/getAll'
  const { isLoading, data, error, refetch } = useFetch<ExerciseProps[]>(url)

  // Deleting the post
  const deleteExercise = async (id: string) => {
    await axios.delete(`http://localhost:5000/api/delete/${id}`)
    refetch()
  }

  const tableHeaders = ['User name', 'Description', 'Duration', 'Date', 'Actions']

  return(
    <div className='px-16 w-full'>
      {
        isLoading ? (
          <div> 'Loading...' </div>
        ) : data ? (
          <div className='overflow-x-auto w-full'> 
            <div className='table w-full mx-auto'> 
              <div className='table-row w-full'> 
                {tableHeaders.map(header => (
                  <div className={`py-4 px-2 table-cell border-t-[1px] border-white font-bold bg-gray-700`}>
                    { header }
                  </div>
                ))}
              </div>
              {data.map((item, index) => (<Exercise {...item} lastFlag={index === data.length - 1} deleteExercise={() => deleteExercise(item._id)} />))}
            </div>
          </div>
        ) : (
          <div> { error } </div>
        )
      }
    </div>
  )
}

export default ExerciseList;
