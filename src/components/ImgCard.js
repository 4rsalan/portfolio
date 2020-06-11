import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: "30%",
        margin: "1%",
    },
});

export default function ImgMediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Placeholder image pls dont hate me"
                    height="140"
                    image={props.image}
                    title="Placeholder"
                />
            </CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {`${props.name} | ${props.date}`}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <ul>
                            <li>
                                {props.p1}
                            </li>
                            <li>
                                {props.p2}
                            </li>
                            <li>
                                {props.p3}
                            </li>
                        </ul>
                    </Typography>
                </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    <a href={props.link} target={"_blank"} rel="noopener noreferrer">{props.link}</a>
                </Button>
            </CardActions>
        </Card>
    );
}
