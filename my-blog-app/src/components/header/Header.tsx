import { useState } from 'react';
import { Box, AppBar, Toolbar, Button } from '@mui/material';
import { GrBlog } from "react-icons/gr";
import { headerStyles } from '../../styles/header-styles';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { authActions } from '../../store/auth.slice';

const Header = () => {
  const [value, setValue] = useState(0);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(authActions.logout());
    navigate('/');
  };

  return (
    <AppBar sx={headerStyles.appBar}>
      <Toolbar>
        <GrBlog size={'30px'} color='#000' />
        <Box sx={headerStyles.tabContainer}>
          {!isLoggedIn && (
          <Button component={Link} to='/' disableRipple={true} onClick={() => setValue(0)}
          style={{ color: 'black' }}>Home</Button>
        ) }
          {isLoggedIn && (
            <Button component={Link} to='/blogs' disableRipple={true} onClick={() => setValue(1)}
            style={{ color: 'black'}}>Blogs</Button>
          )}
          {!isLoggedIn ? (
            <Link to='/auth'>
              <Button sx={headerStyles.authBtn}>Login</Button>
            </Link>
          ) : (
            <Button sx={headerStyles.authBtn} onClick={handleLogout}>Logout</Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header;