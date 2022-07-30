import { useEffect } from 'react';
import './App.css';
import EventDetail from './components/EventDetail';
import EventList from './components/EventList';
import { getEventDatas } from './features/eventSlice';
import { useAppDispatch } from './store';


function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getEventDatas(null));
  }, [dispatch])


  return (
    <div className='main-container'>
      <div className="row event-main-container">
        <EventList />
        <EventDetail />
      </div>
    </div>

  );
}

export default App;
