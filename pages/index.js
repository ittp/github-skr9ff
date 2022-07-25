import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
// import Button from '../src/Link';

import axios from 'axios';
import Copyright from '../src/Copyright';

const List = (d) => {
  let items = axios.get('/api/items');
};

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box id="sidebar" sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Электронная очередь
          <div className="container">111 </div>
        </Typography>
        <Link href="/about" color="secondary">
          История
        </Link>

        <Link href="/next">Next</Link>
        <Copyright />
      </Box>
    </Container>
  );
}
