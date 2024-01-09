import * as React from 'react';
import { useTranslations } from 'next-intl';
import { Box, Button, Grid, ImageList, ImageListItem, Stack, Typography } from '@mui/material';

export default function Home() {

  const t = useTranslations('profile');
  const profilePicture = itemData[itemData.length - 5]
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sx={{ display: 'flex' }}>
        <Stack sx={{ alignItems: "center", }}>
          <Typography variant="h3" fontWeight={500}>
            CyberTea
          </Typography>
          <img
            style={{ maxWidth: '60%', maxHeight: '60%', border: '0px solid black', borderRadius: '50%' }}
            srcSet={`${profilePicture}?fit=crop&auto=format&dpr=2 2x`}
            src={`${profilePicture}?fit=crop&auto=format`}
            alt={"Image of some author"}
            loading="lazy"
          />
          {/* Fix huge whitespace */}
          <Typography variant="h4" >
            <Box component="span"> {t('raiting')}: </Box> <Box component="span"> 1001 </Box>
          </Typography>
          <Button variant='outlined'>
            {t('message')}
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={6}>
      </Grid>
      <Grid item xs={12} sx={{
        alignItems: "center"
      }}>
        <ImageList variant="masonry" cols={4} gap={8}>
          {itemData.map((src) => (
            <ImageListItem key={src}>
              {/*Cannot use Image component because of this issue: https://github.com/mui/material-ui/issues/36820*/}
              <img
                srcSet={`${src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${src}?w=248&fit=crop&auto=format`}
                alt={"Image of some author"}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  )
}

const itemData = [
  '/homepage/cat-black.png',
  '/homepage/cat-blue.png',
  '/homepage/cat-pixel.png',
  '/homepage/cat-space.png',
  '/homepage/cat-white.png',
  '/homepage/dragon-cat.png',
  '/homepage/girl.png',
  '/homepage/lizard-purple.png',
  '/homepage/octocat.png',
];
