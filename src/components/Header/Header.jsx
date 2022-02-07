import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import SearchIcon  from '@material-ui/icons/Search';
// import SearchIcon from '@mui/icons-material/Search';
import "./Header.css"

const Header = () => {
  return (
   
      <div className="header_container">
        <div className="header_content">
           <h3>BestFriend App</h3>
          <div className="header_input">
            <div className="explore_title">
              <h5>Explore new places</h5>
            </div>
            {/* <Autocomplete> */}
              <div className="search_content">
                <SearchIcon className='searchIcon' fontSize="small"/>
                <input type="text" placeholder='Search...'/>
              </div>
            {/* </Autocomplete> */}
          </div>
        </div>
      </div>
    
  )

};

export default Header;
 