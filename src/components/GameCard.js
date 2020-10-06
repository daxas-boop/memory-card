import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

const GameCard = (props) => {
    const classes = useStyles();
    const {onClickCards, name, anime, src} = props

    return (
        <Grid item onClick={() => onClickCards(name)}>
            <Card className={classes.root}>
                <CardActionArea disableRipple>
                    <CardMedia
                    component="img"
                    alt={name}
                    height="300"
                    image={src}
                    title={name}
                    />
                    <CardContent>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography align="center" variant="body2" color="textSecondary" component="p">
                        {anime}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default GameCard;