import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  card: {
    margin: '10px',
    width: '300px',
    height: '400px'
  },
  media: {
    height: '300px',
  },
  emptyMessage: {
    color: 'white'
  }
});

export default function ListPhotos(props) {
  const classes = useStyles();
  const {books} = props;

  return (
    <div className={classes.root}>
      {
        books && books.map((book, index) => {
          return <Card className={classes.card} key={index}>
            <CardActionArea component={Link} to={{
              pathname: '/leer-libro',
              state: { book }
            }}>
              <CardMedia
                className={classes.media}
                image={book.profileUrl}
                title={book.name}
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {book.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {book.description}
                </Typography>
              </CardContent>

            </CardActionArea>
          </Card>
        })
      }
      {
        (!books || (books && books.length === 0)) && <Typography variant="h3" className={classes.emptyMessage} component="p">
          No hay resultados para mostrar.
        </Typography>
      }
    </div>
  );
}
