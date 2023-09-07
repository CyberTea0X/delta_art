import styles from './page.module.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import catBlack from '../../public/homepage/cat-black.png';
import catBlue from '../../public/homepage/cat-blue.png';
import catPixel from '../../public/homepage/cat-pixel.png';
import catSpace from '../../public/homepage/cat-space.png';
import catWhite from '../../public/homepage/cat-white.png';
import dragonCat from '../../public/homepage/dragon-cat.png';
import girl from '../../public/homepage/girl.png';
import lizardPurple from '../../public/homepage/lizard-purple.png';
import { useTranslation } from '../i18n';

type HomeProps = {
  params: {
    lng: string
    } 
}

export default async function Home({ params: { lng } }: HomeProps) {
  const { t } = await useTranslation(lng, "homepage");
  return (
    <main className={styles.main}>
    <center>
    <h1> 
      {t("greeting")}
    </h1>
    <p>
      {t("slogan")}
    </p>
    <h2>
      {t("slogan2")}
    </h2>
    <Box sx={{ width: 1200, height: 600, overflowy: 'scroll'}}>
      <ImageList variant="masonry" cols={4} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.title}>
            <Image
              src={item.img}
              alt={item.title}
              loading="lazy"
              width={300}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </center>
    </main>
  )
}


// Yes, I'm just importing them here by hand, this is because the images are for testing purposes only.
const itemData = [
  {
    img: lizardPurple,
    title: 'lizardPurple'
  },
  {
    img: girl,
    title: 'girl'
  },
  {
    img: dragonCat,
    title: 'dragonCat'
  },
  {
    img: catWhite,
    title: 'catWhite'
  },
  {
    img: catSpace,
    title: 'catSpace'
  },
  {
    img: catPixel,
    title: 'catPixel'
  },
  {
    img: catBlue,
    title: 'catBlue'
  },
  {
    img: catBlack,
    title: 'catBlack'
  }
];
