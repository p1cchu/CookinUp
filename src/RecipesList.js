import React from 'react';
import Recipe from './Recipe';
import { Masonry } from '@mui/lab';
import { Container } from '@material-ui/core';

export default function RecipesList({ recipes }) {
  return (
    <>
      <Container maxWidth='lg'>
        <Masonry
          columns={{ lg: 3, md: 3, sm: 2, xs: 1 }}
          spacing={{ lg: 8, md: 6, sm: 4, xs: 2 }}
        >
          {recipes.results.map((el) => {
            return <Recipe key={el.id} recipe={el} />;
          })}
        </Masonry>
      </Container>
    </>
  );
}
