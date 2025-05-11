import React from 'react';
import { Alert, AlertTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';

const iconMap = {
  success: <CheckCircleIcon fontSize="inherit" />,
  error: <ErrorIcon fontSize="inherit" />,
  info: <InfoIcon fontSize="inherit" />,
  warning: <WarningIcon fontSize="inherit" />
};

export default function Notification({ type = 'info', title, text }) {
  return (
    <Alert
      icon={iconMap[type]}
      severity={type}
      variant="filled"
      sx={{
        mb: 2,
        bgcolor: 'rgba(20, 18, 17, 0.7)',
        color: '#f5f5f5',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
        borderRadius: 2,
        border: '1px solid rgba(255,255,255,0.1)',
        '& .MuiAlert-icon': {
          color: '#ffb300'
        }
      }}
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => console.log("Close clicked")} // you can add dismiss logic later
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
    >
      <AlertTitle>{title}</AlertTitle>
      {text}
    </Alert>
  );
}
