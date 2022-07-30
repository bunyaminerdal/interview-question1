import { setSelectedEvent } from '../features/eventSlice';
import { useAppDispatch, useAppSelector } from '../store';

const EventList = () => {
    const dispatch = useAppDispatch();
    const { datas, selectedData } = useAppSelector(state => state.events)
    const eventSelectHandler = (id: number) => {
        dispatch(setSelectedEvent(id));
    }
    const dateConvertor = (date: string) => {
        let converteddate = new Date(date);
        return converteddate.toLocaleDateString() + " " + converteddate.toLocaleTimeString();
    }
    return (
        <div className='col-8'>
            <div className='event-list-title'>EVENTS</div>
            <div className="event-list-container">
                {datas.map(data => {
                    return <div className={selectedData.id === data.id ? 'event-container event-container-selected row' : 'event-container row'} onClick={() => eventSelectHandler(data.id)} key={data.id}>
                        {data.details.map((dt, index) => dt.title === "Aksiyon" && dt.value === "-" ? <div className='event-part-action' key={index}></div> : "")}
                        <div className='col event-part'> <div className='event-title'>Date</div> <div className='event-info'>{data.details.map(dt => dt.title === "Tarih" ? dateConvertor(dt.value) : "")}</div> </div>
                        <div className='col event-part'> <div className='event-title'>Type</div> <div className='event-info'>{data.details.map(dt => dt.title === "Tip" ? dt.value : "")}</div> </div>
                        <div className='col event-part'> <div className='event-title'>Bin ID</div> <div className='event-info'>{data.id}</div> </div>
                        <div className='col event-part'> <div className='event-title'>Action</div> <div className='event-info'>{data.details.map(dt => dt.title === "Aksiyon" ? dt.value : "")}</div> </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default EventList