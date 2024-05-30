import { Styles } from './homepage-styles';


export const headerStyles: Styles = {
    appBar: {
        position: 'sticky',
        bgcolor: '#f2f2f2',
        color: '#000',
    },
    tabContainer: {
        width: '100%',
        marginLeft: 'auto',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    authBtn: {
        ml: 2,
        bgcolor: "#fff",
        color: "black",
        borderRadius: 20,
        width: 80,
        ":hover" : {
            bgcolor: '#d9d9d9'
        },
    },
    writeBtn: {
        ml: 2,
        mr: 3,
        bgcolor: "#262626",
        color: "white",
        borderRadius: 20,
        width: 80,
        ":hover" : {
            bgcolor: '#404040'
        },
    }   
}