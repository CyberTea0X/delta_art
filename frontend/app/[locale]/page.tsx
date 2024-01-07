import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useTranslations } from 'next-intl';
import { Typography } from '@mui/material';

export default function Home() {

  const t = useTranslations('home');
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h3" fontWeight={500}>
        {t("greeting")}
      </Typography>
      <Typography variant="h4">
        {t("slogan")}
      </Typography>
      <Typography variant="h5">
        {t("slogan2")}
      </Typography>
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
    </Box>
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
