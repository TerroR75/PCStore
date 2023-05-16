import { Button, Container, Divider, Paper, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <Container component={Paper} sx={{ height: 400 }}>
      <Typography gutterBottom variant='h3'>
        We could not find what you were looking for
      </Typography>
      <Divider />
      <Button fullWidth component={NavLink} to='/catalog'>
        Catalog Page
      </Button>
    </Container>
  );
}

export default NotFound;
