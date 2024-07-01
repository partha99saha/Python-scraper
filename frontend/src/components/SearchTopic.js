import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, List, ListItem, ListItemText, Paper, Typography, Box } from '@mui/material';
import ContentNotFoundPopup from './ContentNotFoundPopup';

const SearchTopic = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://127.0.0.1:8000/search?query=${query}`);
            if (response.data.length === 0) {
                setShowPopup(true);
            } else {
                setResults(response.data);
                setError(null);
                setShowPopup(false);
                onSearch(response.data);
            }
        } catch (error) {
            setError('No results found for searching topics');
            setShowPopup(false);
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
            {error && (
                <Typography variant="body1" style={{ color: 'red' }}>
                    {error}
                </Typography>
            )}
            <List>
                {results.map((result, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={result} />
                    </ListItem>
                ))}
            </List>
            <ContentNotFoundPopup
                open={showPopup}
                onClose={() => setShowPopup(false)}
                query={query}
            />
        </Paper>
    );
};

export default SearchTopic;
