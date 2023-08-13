import React, { FunctionComponent } from 'react'
import useFetch from '../utils/useFetch'

interface ExerciseProps {
  userName: string,
  description: string,
  duration: number | string,
  date: Date,
  lastFlag: boolean
}

const Exercise: FunctionComponent<ExerciseProps> = ({ userName, description, duration, date, lastFlag }) => {
  const data = [userName, description, duration, String(date).split('T')[0]]
  return (
    <div className='table-row w-full'>
      {data.map((item, index) => (
        <div className={`py-4 px-2 table-cell border-t-[1px] border-white ${lastFlag && 'border-b-[1px]'}`} key={index}>
          { item }
        </div>
      ))}
    </div>
  )
}

const ExerciseList = () => {
  const url: string = 'http://localhost:5000/api/getAll'
  const { isLoading, data, error } = useFetch<ExerciseProps[]>(url)
  console.log({ isLoading, data, error })

  const tableHeaders = ['User name', 'Description', 'Duration', 'Date']

  return(
    <div className='px-16 w-full'>
      {
        isLoading ? (
          <div> 'Loading...' </div>
        ) : data ? (
          <div className='table w-full mx-auto'> 
            <div className='table-row w-full'> 
              {tableHeaders.map(header => (
                 <div className={`py-4 px-2 table-cell border-t-[1px] border-white font-bold bg-gray-700`}>
                  { header }
                </div>
              ))}
            </div>
            {data.map((item, index) => (<Exercise {...item} lastFlag={index === data.length - 1} />))}
          </div>
        ) : (
          <div> { error } </div>
        )
      }
    </div>
  )
}

export default ExerciseList;
