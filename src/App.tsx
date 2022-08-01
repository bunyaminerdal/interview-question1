import { Box, Grid, Stack } from '@mui/material';
import { useEffect } from 'react';
import './App.css';
import EventDetail from './components/EventDetail';
import EventList from './components/EventList';
import { getEventDatas } from './features/eventSlice';
import { useAppDispatch } from './store';


function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getEventDatas());
  }, [dispatch])


  return (
    <Box>
      <Grid container spacing={1} sx={{ backgroundColor: "#EBECEF", flexDirection: { sm: 'column-reverse', md: 'row', xs: 'column-reverse' } }}>
        <EventList />
        <EventDetail />
      </Grid>
    </Box>
  );
}

export default App;
