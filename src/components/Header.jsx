import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  subtitle: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
      [theme.breakpoints.up('md')]: {
      flexGrow: 3,
    }
  }
}));

const Header = (props) => {
    const classes = useStyles();
    const {score, bestScore} = props
    return (
        <AppBar >
            <Toolbar>
                <Typography variant="h4" className={classes.title} align='center'>
                    Memory Card
                </Typography>
                <Typography  className={classes.subtitle}>
                    Score: {score}
                </Typography>
                <Typography  className={classes.subtitle}>
                    Best score: {bestScore}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;