'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

type TopAppBarProps = {
  onLoginClicked: React.MouseEventHandler<HTMLButtonElement>
  onSignupClicked: React.MouseEventHandler<HTMLButtonElement>
}

export default function TopAppBar({onLoginClicked, onSignupClicked}: TopAppBarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Delta art
          </Typography>
          <Button color="inherit" onClick={onLoginClicked}>Login</Button>
          <Button color="inherit" onClick={onSignupClicked}>Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
