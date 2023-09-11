'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useTranslations} from 'next-intl';

type TopAppBarProps = {
  onLoginClicked: React.MouseEventHandler<HTMLButtonElement>
  onSignupClicked: React.MouseEventHandler<HTMLButtonElement>
  onProfileClicked: React.MouseEventHandler<HTMLButtonElement>
}

export default function TopAppBar({onLoginClicked, onSignupClicked, onProfileClicked}: TopAppBarProps) {
  const t = useTranslations('topBar');
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t('title')}
          </Typography>
          <Button color="inherit" onClick={onLoginClicked}>{t('signIn')}</Button>
          <Button color="inherit" onClick={onSignupClicked}>{t('signUp')}</Button>
          <Button color="inherit" onClick={onProfileClicked}>{t('profile')}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
