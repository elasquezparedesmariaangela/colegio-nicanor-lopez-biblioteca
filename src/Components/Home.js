import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import SearchBar from "material-ui-search-bar";
import puebloAzurduyImage from '../assets/images/pueblo-azurduy.jpeg';
import ListPhotos from './list-photos';
import reactbook from '../assets/pdfs/React-Hook.pdf';
import javaProfile from '../assets/images/java-profile.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  boxHeader: {
    width: '100%',
    height: '200px',
    backgroundImage: `url(${puebloAzurduyImage}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '4rem'
  },
  search: {
    marginLeft: '20px',
    marginTop: '20px',
    marginRight: '20px'
  }
}));

const books = [
  {
    name: 'Jundamentos de Java',
    autor: 'Nombre del autor',
    description: 'En este libro aprendera los fundamentos de programacion en el lenguaje de Java',
    profileUrl: javaProfile,
    file: reactbook,
  },
]


export default function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [searchFiltered, setSearchFiltered] = useState(books);
  const classes = useStyles();

  const filteredValues = (searchValue) => {
    return searchValue ? books.filter((book) => {
      return (book.name.toLocaleLowerCase()).includes(searchValue.toLocaleLowerCase())
        || (book.description.toLocaleLowerCase()).includes(searchValue.toLocaleLowerCase())
        || (book.autor.toLocaleLowerCase()).includes(searchValue.toLocaleLowerCase())
    }) : books;
  }

  const onChangeFilter = (searchValue) => {
    setSearchValue(searchValue);
    setSearchFiltered(filteredValues(searchValue))
  }

  return (
    <div className={classes.root}>
      <Box component="div" className={classes.boxHeader}>
        Azurduy
      </Box>
      <SearchBar
        className={classes.search}
        placeholder='Buscar'
        value={searchValue}
        onChange={(newValue) => onChangeFilter(newValue)}
        cancelOnEscape={true}
        onCancelSearch={() => setSearchValue('')}
      />

      <ListPhotos books={searchFiltered} />
    </div>
  );
}
