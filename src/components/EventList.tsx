import { Box, Grid, lighten, Stack, Typography } from '@mui/material';
import { setSelectedEvent } from '../features/eventSlice';
import { useAppDispatch, useAppSelector } from '../store';

const EventList = () => {
    const dispatch = useAppDispatch();
    const { datas, selectedData } = useAppSelector(state => state.eventdata)
    const eventSelectHandler = (id: number) => {
        dispatch(setSelectedEvent(id));
    }
    const dateConvertor = (date: string) => {
        let converteddate = new Date(date);
        return converteddate.toLocaleDateString() + " " + converteddate.toLocaleTimeString();
    }
    return (
        <Grid item md={6} sm={12} xs={12} lg={7} xl={8} height="100%" >
            <Typography variant="h5" fontWeight="700" p={2} sx={{ fontSize: 23 }}>EVENTS</Typography>
            <Box sx={{ ml: 1 }} height="calc(100% - 66px)" overflow="scroll" >
                {datas.map(data => {
                    return <Stack direction="row" onClick={() => eventSelectHandler(data.id)} sx={{ cursor: "pointer", position: "relative", "&:hover": { backgroundColor: selectedData.id === data.id ? "#E9CF30" : lighten("#E9CF30", 0.6) }, backgroundColor: selectedData.id === data.id ? "#E9CF30" : "white", mb: 1, p: 2 }} key={data.id}>
                        {data.details.map((dt, index) => dt.title === "Aksiyon" && dt.value === "-" ? <Box key={index} sx={{ backgroundColor: "#E9CF30", position: "absolute", width: 10, height: "100%", top: 0, left: 0 }} /> : null)}
                        <Grid xs={3}> <Typography variant='body1' fontWeight="700">Date</Typography> <Typography>{data.details.map(dt => dt.title === "Tarih" ? dateConvertor(dt.value) : null)}</Typography> </Grid>
                        <Grid xs={3}> <Typography variant='body1' fontWeight="700">Type</Typography> <Typography>{data.details.map(dt => dt.title === "Tip" ? dt.value : null)}</Typography> </Grid>
                        <Grid xs={3}> <Typography variant='body1' fontWeight="700">Bin ID</Typography> <Typography>{data.id}</Typography> </Grid>
                        <Grid xs={3}> <Typography variant='body1' fontWeight="700">Action</Typography> <Typography>{data.details.map(dt => dt.title === "Aksiyon" ? dt.value : null)}</Typography> </Grid>
                    </Stack>
                })}
            </Box>
        </Grid >
    )
}

export default EventList