import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Pdfreader from './Components/Pdfreader';
import Home from './Components/Home';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: '20px'
  },
}));

export default function App() {
  const classes = useStyles();

  const goBack = () => {
    window.location.href = '/'
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={goBack}>
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Colegio Mixto Nicanor Lopez
          </Typography>
        </Toolbar>
      </AppBar>

      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/leer-libro" component={Pdfreader} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

