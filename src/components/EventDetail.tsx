import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../store'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import ReactAudioPlayer from 'react-audio-player'

const selectionEnum = {
    details: 'details',
    location: 'location',
    media: 'media'
}
const EventDetail = () => {
    const [selection, setSelection] = useState(selectionEnum.details)
    const { selectedData } = useAppSelector(state => state.events)
    useEffect(() => {
        setSelection(selectionEnum.details)
    }, [selectedData])
    return (
        <div className='col-4'>
            <div className='event-detail-title'>EVENT DETAILS</div>
            <div className="event-detail-container">
                <div className='event-detail-button-container'>
                    <button>NO ACTION NEEDED</button>
                    <button>TAKE ACTION</button>
                </div>
                <div className='event-detail-operations-button-container'>
                    <button className={selection === selectionEnum.details ? 'active' : ''} onClick={() => setSelection(selectionEnum.details)}>DETAILS</button>
                    <button className={selection === selectionEnum.location ? 'active' : ''} onClick={() => setSelection(selectionEnum.location)}>LOCATION</button>
                    <button className={selection === selectionEnum.media ? 'active' : ''} onClick={() => setSelection(selectionEnum.media)}>MEDIA</button>
                </div>
                <div className='event-details-container'>
                    {selection === selectionEnum.details ? <div className='col'>
                        <div className='event-title'>Category</div>
                        <div>
                            {selectedData?.details?.map(data => data.title === "Kategori" ? data.value : "")}
                        </div>
                    </div>
                        : null}
                    {selection === selectionEnum.location ? <div>
                        {selectedData.location ? <MapContainer center={[selectedData?.location?.latitude, selectedData?.location?.longitude]} zoom={13} scrollWheelZoom={false} >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[selectedData?.location?.latitude, selectedData?.location?.longitude]}>
                                <Popup>
                                    {selectedData.id}
                                </Popup>
                            </Marker>
                        </MapContainer> : <div>There is no map information</div>}

                    </div> : null}
                    {selection === selectionEnum.media ? <div>
                        {selectedData?.media?.map(media => media.type === "image" ?
                            <img src={media.url} alt="" />
                            :
                            <ReactAudioPlayer
                                src={media.url}
                                controls
                            />)}
                    </div> : null}
                </div>
            </div>
        </div>
    )
}

export default EventDetail