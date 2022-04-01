import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ContentCard from '../ContentCard';


export default function ContentBox() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#e9edc9', height: '100vh' }} >
         <ContentCard></ContentCard>
        </Box>
      </Container>
    </React.Fragment>
  );
}