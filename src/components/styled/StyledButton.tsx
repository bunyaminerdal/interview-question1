import styled from "@emotion/styled";
import { Button, darken } from "@mui/material";


export const GreenButton = styled(Button)({
    backgroundColor: '#3BA935',
    fontSize: 16,
    fontWeight: 600,
    margin: 0.5,
    minWidth: 200,
    "&:hover": { backgroundColor: darken('#3BA935', 0.2) }
});
export const GrayButton = styled(Button)({
    backgroundColor: '#535A72',
    fontSize: 16,
    fontWeight: 600,
    margin: 0.5,
    minWidth: 200,
    "&:hover": { backgroundColor: darken('#535A72', 0.2) }
});