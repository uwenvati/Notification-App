import React from 'react';
import Notification from './components/Notification';
import { Container, Stack } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Stack spacing={2}>
        <Notification type="success" title="Success!" text="This is a success alert." />
        <Notification type="error" title="Error!" text="Something went wrong." />
        <Notification type="warning" title="Warning!" text="Be careful with this action." />
        <Notification type="info" title="Info" text="Here's some extra context." />
      </Stack>
    </Container>
  );
}

export default App;


