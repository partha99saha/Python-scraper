import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, List, ListItem, ListItemText, Paper, Typography, Box } from '@mui/material';

const SearchTopic = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://127.0.0.1:8000/search?query=${query}`);
            setResults(response.data);
        } catch (error) {
            console.error('Error searching topics:', error);
        }
    };

    return (
        <Paper style={{ marginTop: '20px', padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
                Search Topics
            </Typography>
            <form onSubmit={handleSearch}>
                <Box display="flex" alignItems="center" mb={2}>
                    <TextField
                        label="Search topics..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '10px' }}>
                        Search
                    </Button>
                </Box>
            </form>
            <List>
                {results.map((result, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={result} />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default SearchTopic;
