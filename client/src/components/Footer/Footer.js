import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
    bottomNavContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        position: "fixed",
        background: '#003262',
        bottom: "0",
        left: "0",
        width: "100%",
        height: "10%",
        borderTop: '2px',
        borderColor: '#ccc',
        zIndex: 2,
        '@media (min-width:600px)': {
            height: "5%",
            paddingBottom: 20,
        },
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.bottomNavContainer}>
            <h3>Made by Janarthani V S</h3>
        </div>
    );
};

export default Footer

