import { SxProps } from '@mui/material';

export type Styles = {
    [key: string]: SxProps;
};

export const homepageStyles: Styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        gap: 3,
        alignItems: 'center',
        padding: 6,
        border: '2px #000',
    },
    text: {
        fontSize: {ls: 50, md: 40, sm: 30, xs: 20},
        fontFamily: 'Work Sans',
        textShadow: '12px 10px 10px #ccc',
    },
    image: {
        boxShadow: '10px 10px 25px #000',
        borderRadius: 20,
    },
    footerContainer: {
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#f2f2f2',
        height: '10vh',
        justifyContent: 'center',
        gap: 3,
    },
    footerBtn: {
        borderRadius: 2,
        width: '50%',
        bgcolor: '#fff',
        color: '#000',
        ":hover": {
            bgcolor: '#f2f2f2',
        }
    },
    footerText: {
        fontFamily: 'Work Sans',
        fontWeight: '500',
        fontSize: 12,
        color: '#000',
    }
}