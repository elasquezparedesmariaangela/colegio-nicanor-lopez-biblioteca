import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import SearchBar from "material-ui-search-bar";
import puebloAzurduyImage from '../assets/images/pueblo-azurduy.jpeg';
import ListPhotos from './list-photos';
import reactbook from '../assets/pdfs/React-Hook.pdf';
import algebraProfile from '../assets/images/algebra-baldor.jpeg';
import aritmeticaProfile from '../assets/images/aritmetica.jpeg';
import feudalismoProfile from '../assets/images/feudalismo.jpeg';
import filosofiaProfile from '../assets/images/filosofia.jpg';
import fisicaProfile from '../assets/images/fisica.png';
import geografiaProfile from '../assets/images/geografia.jpg';
import iliadaProfile from '../assets/images/iliada.jpeg';
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
    name: 'Fundamentos de Java',
    autor: 'Jhon Smit',
    description: 'En este libro aprendera los fundamentos de programacion en el lenguaje de Java',
    profileUrl: javaProfile,
    file: reactbook,
  },
  {
    name: 'Algebra de Baldor',
    autor: 'Nombre del autor',
    description: 'Una vez finalizado el libro usted sera capas de resolver problemas de factorizacion',
    profileUrl: algebraProfile,
    file: reactbook,
  },
  {
    name: 'Aritmetica',
    autor: 'Nombre del autor',
    description: 'Con este libro podra aprender problemas basicos de Aritmetica',
    profileUrl: aritmeticaProfile,
    file: reactbook,
  },
  {
    name: 'Feudalismo Clasico',
    autor: 'Nombre del autor',
    description: 'Conoceremos la historia en la edad del feudalismo',
    profileUrl: feudalismoProfile,
    file: reactbook,
  },
  {
    name: 'Fisica Basica',
    autor: 'Nombre del autor',
    description: 'Se resolberan problemas basicos de fisica',
    profileUrl: fisicaProfile,
    file: reactbook,
  },
  {
    name: 'Geografia',
    autor: 'Nombre del autor',
    description: 'Conoceremos la descripcion geografica de bolivia',
    profileUrl: geografiaProfile,
    file: reactbook,
  },
  {
    name: 'La Iliada',
    autor: 'Nombre del autor',
    description: 'Una novela clasica que nos habla ...',
    profileUrl: iliadaProfile,
    file: reactbook,
  },
  {
    name: 'Filosofia',
    autor: 'Nombre del autor',
    description: 'Conoceremos los didtintos tipos de pensamiento de acuerdo a su clasificacion',
    profileUrl: filosofiaProfile,
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
        onCancelSearch={() => onChangeFilter('')}
      />

      <ListPhotos books={searchFiltered} />
    </div>
  );
}
