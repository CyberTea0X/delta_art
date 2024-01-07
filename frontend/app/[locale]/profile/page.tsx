import styles from './page.module.css'
import * as React from 'react';
import { useTranslations } from 'next-intl';
import { Box, Container, Grid, Stack } from '@mui/material';

export default function Home() {

  const t = useTranslations('home');
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box>xs=8</Box>
      </Grid>
      <Grid item xs={6}>
        <Box>xs=4</Box>
      </Grid>
      <Grid item xs={12} sx={{
        alignItems: "center"
      }}>
        <Box>xs=4</Box>
      </Grid>
    </Grid>
  )
}


