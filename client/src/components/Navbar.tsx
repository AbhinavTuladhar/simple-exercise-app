import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  {
    text: 'Add user',
    link: '/'
  },
  {
    text: 'Exercise List',
    link: '/create'
  }
]

const Navbar: FunctionComponent = () => {
  return (
    <nav className='px-12 py-3 flex flex-row items-center justify-between bg-slate-800 border-b-2 border-slate-600 shadow-md shadow-black'>
      <Link className='text-3xl font-bold' to='/'>
        Exercise App
      </Link>
      <div className='flex flex-row gap-x-4'>
        {navItems.map(({ text, link }, index) => (
          <Link className='flex font-bold' key={index} to={link}>
            { text }
          </Link>
        ))
        }
      </div>
    </nav>
  )
}

export default Navbar