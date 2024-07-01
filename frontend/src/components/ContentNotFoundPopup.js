import React from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const ContentNotFoundPopup = ({ open, onClose, query }) => {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        onClose();
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="info">
                No results found for "{query}"
            </MuiAlert>
        </Snackbar>
    );
};

export default ContentNotFoundPopup;
