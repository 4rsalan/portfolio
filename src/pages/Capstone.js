import React from 'react';
import me from "../img/me.jpg";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

const Capstone = () => {
    return (
        <div style={boxStyle}>
            <Box
                width="100%"
                container="div"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems='center'
            >
                <Typography variant="h2" component="h2">Final Year Engineering Capstone</Typography>
                <Card style={expStyle}>

                </Card>
            </Box>
        </div>
    );
};

const boxStyle = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    flexDirection:"column",
    justifyContent:"center",
};

const cardStyle = {
    width: '80%',
    padding: '2%',
    marginTop: '1%',
    marginBottom: '1%',
};

const expStyle = {
    display: 'flex',
    width: '80%',
    padding: '2%',
    marginTop: '1%',
    marginBottom: '1%',
};

export default Capstone;
