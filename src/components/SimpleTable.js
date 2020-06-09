import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: "50%",
    },
});

export default function SimpleTable(props) {
    const classes = useStyles();

    return (
        <TableContainer style={props.MyStyle} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Languages</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell align="center">Frameworks/Libraries</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="left">C#</TableCell>
                        <TableCell align="left">Javascript/NodeJS</TableCell>
                        <TableCell align="right">React Native</TableCell>
                        <TableCell align="right">ReactJS</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">MySQL</TableCell>
                        <TableCell align="left">Java</TableCell>
                        <TableCell align="right">Angular2</TableCell>
                        <TableCell align="right">.Net Framework</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">HTML5/CSS3</TableCell>
                        <TableCell align="left">Python</TableCell>
                        <TableCell align="right">AndroidSDK</TableCell>
                        <TableCell align="right">Laravel</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">PHP</TableCell>
                        <TableCell align="left">Swift</TableCell>
                        <TableCell align="right">Numpy</TableCell>
                        <TableCell align="right">TensorFlow</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
