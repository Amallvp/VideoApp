import React from 'react'
import { Video } from 'react-feather';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id='head' className="video bg-primary p-2">


      <h2 className='ms'>
        <Link to={""} style={{ textDecoration: 'none', color:'#92ecf7' }}><Video size={30} color='#92ecf7'></Video> Video Studio</Link></h2>


    </div>
  )
}

export default Header