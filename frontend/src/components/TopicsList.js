import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

const TopicsList = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/topics');
                setTopics(response.data);
            } catch (error) {
                console.error('Error fetching topics:', error);
            }
        };
        fetchTopics();
    }, []);

    return (
        <Paper style={{ marginTop: '20px', padding: '20px' }}>
            <Typography variant="h5" gutterBottom>
                Topics List
            </Typography>
            <List>
                {topics.map((topic, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={topic} />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default TopicsList;
