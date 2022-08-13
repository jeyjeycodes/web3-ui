import { Box, Container, Typography } from '@mui/material';
import { FC } from 'react';

const Hero: FC = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(180deg, #6c18f5 0%, #cd61de 100%)`
      }}
    >
      <Container sx={{ display: 'flex' }}>
        <Box mt={10} sx={{ display: 'flex', flexDirection: 'column', minHeight: 380, maxWidth: 700, flexGrow: 1 }}>
          <Typography color={'white'} variant={'h2'} fontWeight={700} lineHeight={1}>
            The best template app!
          </Typography>
          <Typography mt={'20px'} color={'white'} fontWeight={500} fontSize={20}>
            This template has it all! Typescript, Material UI, form control, themes and some set up code!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
