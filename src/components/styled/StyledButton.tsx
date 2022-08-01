import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";

export const StyledButton = styled(Button)(({ theme }) => ({
    fontSize: 16,
    fontWeight: 600,
    padding: 4,
    [theme.breakpoints.only('xs')]: {
        fontSize: 14,
    },
})) as typeof Button;
