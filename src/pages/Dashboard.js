import React from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Dashboard = ({ onLogout }) => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom align="center" style={{ marginBottom: 20 }}>
        Dashboard
      </Typography>
      <Button
        variant="outlined"
        color="secondary"
        onClick={onLogout}
        style={{ marginBottom: 20, display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
      >
        Logout
      </Button>
      <Grid container spacing={4}>
        {['Card 1', 'Card 2', 'Card 3'].map((title, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                style={{
                  padding: 20,
                  textAlign: 'center',
                  backgroundColor: '#d5e0b3',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  borderRadius: 8,
                }}
              >
                <Typography variant="h6">{title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Content for {title.toLowerCase()}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;
