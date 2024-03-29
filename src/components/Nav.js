import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import photocircle from '../img/photocircle.PNG';
import { FaAngleDoubleUp } from 'react-icons/fa';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav
    className='flex items-center w-full py-4 fixed top-0 z-20 bg-slate-700 backdrop-filter bg-opacity-30 backdrop-blur-xl'>
      <div className='w-full flex justify-between items-center max-w-5xl mx-auto'>
          <div className='flex flex-row items-center gap-2 ml-4'>
              <Link to='/'>
              <img
              src={photocircle}
              alt='christian'
              className='w-12 h-12 object-contain cursor-pointer'
              />
              </Link>

              <Link to='/'>
              <p className='text-lg font-semibold cursor-pointer'
              >Christian Waters</p>
              </Link>
          </div>

          <button
          className='btn btn-accent mr-4'
          onClick={() => {
            setIsOpen(true);
          }}
          >contact</button>
      </div>
    </nav>

    { isOpen && (
      <div className='fixed top-16 left-0 right-0 flex items-center justify-center z-10 bg-base-100 shadow-lg'>
        <div className='flex flex-col mt-12'>
          <div className='max-w-sm'>
            <div className='flex flex-col'>
              <p className='text-md mb-1 ml-1'
              >Email</p>

              <input 
              className='input input-bordered'
              placeholder='Type here'
              />

              <p className='text-md mb-1 ml-1 mt-4'
              >Message</p>

              <textarea
              className='textarea textarea-bordered' 
              placeholder='Type here'
              />

              <button 
              className='btn btn-accent mt-2'
              >send</button>
            </div>

            <div className='flex items-center justify-center my-12'>
              <p className='text-xl font-bold cursor-pointer tracking-wide'
              onClick={() => {
                setIsOpen(false);
              }}
              >Close</p>

              <FaAngleDoubleUp className='ml-2 cursor-pointer' />
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  )
}

export default Nav;