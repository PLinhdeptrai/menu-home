import * as React from 'react';
import './App.css';
import LogoHeader from './Image/logoheader.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import ReportIcon from '@mui/icons-material/Report';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import Avatar from '@mui/material/Avatar';

function BasicList() {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BookmarksIcon />
              </ListItemIcon>
              <ListItemText primary="List Book" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DomainVerificationIcon />
              </ListItemIcon>
              <ListItemText primary="List CheckIn" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ReportIcon />
              </ListItemIcon>
              <ListItemText primary="Report" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />

    </Box>
  );
}
function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon></MenuIcon>
      </Button>
      <Menu className='menu-left-s'
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <div className='menu'>
        <div className='menu-container'>
          <div className='menu-left'>
            <div className='menu-left-header'>
              <div className='menu-left-logo'>
                {/* <LogoHeader></LogoHeader> */}
              </div>
              <div className='menu-left-select'>
                <BasicMenu></BasicMenu>
              </div>
            </div>
            <div className='menu-left-body'>
              <BasicList></BasicList>
            </div>
            <div className='menu-left-footer'>
              <div className='footer-profile'>
                <Button className='profile'
                >
                  <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/504222090/vi/anh/m%C3%A8o.jpg?s=2048x2048&w=is&k=20&c=Y8WtngtzimgBI6qzzqUx_JF5rUt2z1SJXUpcHE9Ka1g=" />
                  <div className='user-name'>
                    <p>Staff</p>
                    <p className='user-id'>staff@pos.com</p>
                  </div>
                </Button>

              </div>
            </div>
          </div>
          <div className='menu-right'>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
