import { useState } from 'react';
import {  Box, AppBar, Toolbar, Tab, Tabs, Button } from '@mui/material';
import { GrBlog } from "react-icons/gr";
import { headerStyles } from '../../styles/header-styles';
import {Link} from 'react-router-dom';


const Header = () => {
    const [value, setValue] = useState(0)
  return (
    <AppBar sx={headerStyles.appBar}>
        <Toolbar>
        <GrBlog size={'30px'} color='#000'/>
        <Box sx={headerStyles.tabContainer}>
            <Tabs textColor='inherit' indicatorColor='primary'
            TabIndicatorProps={{style: { background: 'black'}}} 
            value={value}
            onChange={(e,val) => setValue(val)}>
                {/* @ts-ignore */}
                <Tab LinkComponent={Link} to='/' disableRipple label="Home" />
                {/* @ts-ignore */}
                <Tab LinkComponent={Link} to='/blogs' disableRipple label="Blogs" />
            </Tabs>
           <Link to='/auth'>
           <Button sx={headerStyles.authBtn}>Login</Button>
           </Link>
        </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header;