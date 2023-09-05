import styles from './page.module.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import catBlack from '../public/homepage/cat-black.png';
import catBlue from '../public/homepage/cat-blue.png';
import catPixel from '../public/homepage/cat-pixel.png';
import catSpace from '../public/homepage/cat-space.png';
import catWhite from '../public/homepage/cat-white.png';
import dragonCat from '../public/homepage/dragon-cat.png';
import girl from '../public/homepage/girl.png';
import lizardPurple from '../public/homepage/lizard-purple.png';

export default function Home() {
  return (
    <main className={styles.main}>
    <center>
    <h1> 
      Добро пожаловать на сайт, где вы можете делиться своим искусством.
    </h1>
    <p>
      Ведь это сайт для художников и дизайнеров и создан для вас. 
    </p>
    <h2>
      Общайтесь, рисуйте, публикуйте
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
              objectFit="crop"
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
