import React, { useEffect, useState } from 'react';
import {AppBar ,Autocomplete,IconButton,Tab,Tabs,TextField,Toolbar} from "@mui/material";
import MovieIcon from '@mui/icons-material/Movie';
import {Box} from "@mui/system";
import { getAllMovies } from '../api-helpers/api-helpers';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminActions, userActions } from '../store';


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAdminLoggedIn =  useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn =  useSelector((state) => state.user.isLoggedIn);

    const [value ,setvalue] = useState(0);
    const [movies , setmovies] = useState([]);
    useEffect(()=>{
        getAllMovies().then((data)=>setmovies(data.movies))
                .catch((err)=> console.log(err));
    },[]);
    // console.log(movies);

  const logout = (isAdmin) => {


    dispatch(isAdmin ? adminActions.logout() : userActions.logout());
  };

    const handleChange = (e,val) => {

      const movie = movies.find((m) => m.title === val);

        if(isUserLoggedIn){
          navigate(`/booking/${movie._id}`);
        }
      
    };


  return  <AppBar position='sticky' sx={{bgcolor:"#2b2d42"}}>
    <Toolbar>
       <Box width ={'20%'}>
        <IconButton LinkComponent={Link} to="/">
        <MovieIcon />
        </IconButton>
        
       </Box>
       <Box width={'30%'} margin={"auto"}>
       <Autocomplete
        
        onChange={handleChange}
        freeSolo
        options={movies && movies.map((option) => option.title)}
        renderInput={(params) =>
             <TextField 
             sx={{ input: {color:"white"}}}
             variant='standard' {...params}
              placeholder="search movies" />}
      />
       </Box>
       <Box display={'flex'}>
        <Tabs 
         textColor='inherit'
         indicatorColor='secondary'
         value={value} 
         onChange = {(e,val)=>setvalue(val)}>
         
         
         <Tab key="movies" LinkComponent={Link} to="/movies" label="Movies" />
  {!isAdminLoggedIn && !isUserLoggedIn && (
    [
      <Tab key="admin" LinkComponent={Link} to="/admin" label="Admin" />,
      <Tab key="auth" LinkComponent={Link} to="/auth" label="Auth" />
    ]
  )}
  {isUserLoggedIn && (
    [
      <Tab key="userProfile" LinkComponent={Link} to="/user" label="Profile" />,
      <Tab key="userLogout" onClick={() => logout(false)} LinkComponent={Link} to="/" label="Logout" />
    ]
  )}
  {isAdminLoggedIn && (
    [
      <Tab key="addMovie" LinkComponent={Link} to="/add" label="Add Movie" />,
      <Tab key="adminProfile" LinkComponent={Link} to="/admin" label="Profile" />,
      <Tab key="adminLogout" onClick={() => logout(true)} LinkComponent={Link} to="/" label="Logout" />
    ]
  )}

        </Tabs>

       </Box>
    </Toolbar>
  </AppBar>;
  
};

export default Header;