import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Nav.css"

const NavInput = () => {
  return (
    <div className='Nav__input'>
        {/* <SearchIcon/> */}
        <div className='search__input'>
             <SearchIcon style={{fontSize: "1rem", top:"0.1rem", color:"#6A6B6C"}}/>
            <input placeholder='Search'/>
        </div>
    </div>
  )
}

export default NavInput