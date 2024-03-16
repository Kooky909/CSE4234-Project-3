import { createUseStyles } from 'react-jss';

const colors = {
    skyBlue: '#13B6F6',
    coral: '#FF4782',
    smokeyWhite: '#F5F5F5',
    white: '#FFFFFF',
    mutePurple: "#523D4F",
    lightGray: "#E0E0E0",
    midGray: "#AAAAAA"
}

const tableCellPadding = "10px"

const style = {
    app: {
        margin: '0rem',
        fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, serif',
        padding: '0rem',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    },
    navHeader: {
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        width: 'auto',
        background: colors.smokeyWhite,
        color: 'aliceblue',
        padding: '20px 30px',
        boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 0px 30px'
    },
    navTitle: {
        display: 'inline-block',
        witdth: 'auto',
        margin: '0px',
        background: `linear-gradient(to right, ${colors.skyBlue}, ${colors.coral})`,
        backgroundClip: 'text',
        color: 'transparent',
        verticalAlign: 'center'
    },
    navHeaderMenu: {
        display: 'inline-block',
        marginLeft: 'auto',
        margin: 0
    },
    navHeaderItem: {
        display: 'inline-block',
        borderStyle: 'solid',
        borderWidth: '1px',
        backgroundColor : colors.white,
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        borderRadius: '10px',
        margin: '0.5em',
      
    },
    navHeaderAnchor: {
        display: 'inline-block',
        borderColor: '#fff',
        color: colors.mutePurple,
        textDecoration: 'none',
        padding: '10px 20px',
        '&:hover': {
            textDecoration: 'underline',
            cursor: "pointer"
        }
    },
    mainBody: {
        padding: '0px 30px'
    },
    productContent: {
        display: "flex",
        flexDirection: 'column'
    },
    productCellHeader: {
        margin: "0px 1px",
        padding: tableCellPadding,
        backgroundColor: colors.midGray
    },
    productRow: {
        display: "grid",
        gridTemplateColumns: "4fr 2fr 3fr 2fr 2fr 2fr 2fr",
        borderRadius: "12px",
        overflow: "hidden"
    },
    productCellColored: {
        margin: "0px 1px",
        padding: tableCellPadding,
        backgroundColor: colors.lightGray
    },
    productCellWhite: {
        margin: "0px 1px",
        padding: tableCellPadding,
        backgroundColor: colors.white
    }
}

export default style;