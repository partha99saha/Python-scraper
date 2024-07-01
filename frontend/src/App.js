import React from 'react';
import { Container, CssBaseline, Typography, AppBar, Toolbar, Box } from '@mui/material';
import TopicsList from './components/TopicsList';
import SearchTopic from './components/SearchTopic';
import './App.css';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Geeks for Geeks Scraper
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box mt={4}>
          <Typography variant="h4" gutterBottom>
            Geeks for Geeks Topics
          </Typography>
          <SearchTopic />
          <TopicsList />
        </Box>
      </Container>
    </div>
  );
}

export default App;
