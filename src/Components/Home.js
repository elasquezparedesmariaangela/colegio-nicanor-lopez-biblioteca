import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import SearchBar from "material-ui-search-bar";
import ListPhotos from './list-photos';

import reactbook from '../assets/pdfs/React-Hook.pdf';
import geometriaAnalitica from '../assets/pdfs/GeometriaAnalitica.pdf';
import geometriaAnaliticaProfile from '../assets/pdfs/geometria-analitica-profile.jpg';
import matematicasParaInformatica from '../assets/pdfs/matematicas-para-informatica.pdf';
import matematicasParaInformaticaProfile from '../assets/pdfs/matematica-para-informatica-profile.jpg';
import baldor from '../assets/pdfs/baldor.pdf';
import baldorProfile from '../assets/pdfs/baldor-profile.jpg';
import cronicadeunamuerte from '../assets/pdfs/cronicadeunamuerte.pdf';
import cronicadeunamuerteProfile from '../assets/pdfs/cronica-muerte-profile.jpg';
import elArbolQueLloraSangre from '../assets/pdfs/el-arbol-que-llora-sangre.pdf';
import elArbolQueLloraSangreProfile from '../assets/pdfs/arbol-sangre-profile.jpg';
import lenguaje25 from '../assets/pdfs/lenguaje-25.pdf';
import lenguaje25Profile from '../assets/pdfs/lenguaje25-profile.jpg';
import inglesBasico01 from '../assets/pdfs/ingles-basico-01.pdf';
import inglesBasico01Profile from '../assets/pdfs/ingles-basico-1-profile.jpg';
import inglesBasico05 from '../assets/pdfs/ingles-basico-05.pdf';
import inglesBasico05Profile from '../assets/pdfs/ingles-basico-5-profile.jpg';
import sociales from '../assets/pdfs/sociales.pdf';
import socialesProfile from '../assets/pdfs/sociales-profile.jpg';
import geografia from '../assets/pdfs/geografia.pdf';
import geografiaProfile from '../assets/geografia-profile.jpg';
import musica1 from '../assets/pdfs/musica-1.pdf';
import musica1Profile from '../assets/pdfs/musica1-profile.jpg';
import musica2 from '../assets/pdfs/musica-2.pdf';
import musica2Profile from '../assets/pdfs/musica2-profile.jpg';
import artesPlasticas1 from '../assets/pdfs/artes-plasticas-1.pdf';
import artesPlasticas1Profile from '../assets/pdfs/artes-plasticas1-profile.jpg';
import artesPlasticas2 from '../assets/pdfs/artes-plasticas-2.pdf';
import artesPlasticas2Profile from '../assets/pdfs/artes-plasticas2-profile.jpg';
import ecologiaGeneral from '../assets/pdfs/ecologia-general.pdf';
import ecologiaGeneralProfile from '../assets/pdfs/ecologia-general-profile.jpg';
import anatomiaFisiologia from '../assets/pdfs/anatomia-fisiologia.pdf';
import anatomiaFisiologiaProfile from '../assets/pdfs/anatomia-fisiologia-profile.jpg';
import electrodinamica from '../assets/pdfs/Electrodinamica.pdf';
import electrodinamicaProfile from '../assets/pdfs/electrodinamica-profile.jpg';
import fisica7ma from '../assets/pdfs/fisica_7ma.pdf';
import fisica7maProfile from '../assets/pdfs/fisica-profile.jpg';
import quimicaGeneral from '../assets/pdfs/quimica_general_petrucci.pdf';
import quimicaGeneralProfile from '../assets/pdfs/quimica-general-profile.jpg';
import filosofia1 from '../assets/pdfs/filosofia-1.pdf';
import filosofia1Profile from '../assets/pdfs/filosofia1-profile.jpg';
import filosofia2 from '../assets/pdfs/filosofia-2.pdf';
import filosofia2Profile from '../assets/pdfs/filosofia2-profile.jpg';
import unPlanVidaJovenes from '../assets/pdfs/Un_plan_de_vida_para_jovenes.pdf';
import unPlanVidaJovenesProfile from '../assets/pdfs/plan-vida-jovenes-profile.jpg';
import libroValores from '../assets/pdfs/el-libro-de-los-valores.pdf';
import libroValoresProfile from '../assets/pdfs/libro-valores-profile.jpg';

import algebraProfile from '../assets/images/algebra-baldor.jpeg';
import aritmeticaProfile from '../assets/images/aritmetica.jpeg';
import feudalismoProfile from '../assets/images/feudalismo.jpeg';
import filosofiaProfile from '../assets/images/filosofia.jpg';
import fisicaProfile from '../assets/images/fisica.png';
import geografiaProfile from '../assets/images/geografia.jpg';
import iliadaProfile from '../assets/images/iliada.jpeg';
import javaProfile from '../assets/images/java-profile.jpeg';
import azurduyHeader from '../assets/images/azurduy.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  boxHeader: {
    width: '100%',
    height: '200px',
    backgroundImage: `url(${azurduyHeader}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));`,
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
    name: 'Geometria Analitica',
    autor: 'Lehmann',
    description: 'En este libro aprendera los fundamentos de programacion en el lenguaje de Java',
    profileUrl: geometriaAnaliticaProfile,
    file: geometriaAnalitica,
  },
  {
    name: 'Matematicas para Informatica',
    autor: 'Ismael Gutierres Garcia',
    description: 'En este libro aprendera los fundamentos de programacion en el lenguaje de Java',
    profileUrl: matematicasParaInformaticaProfile,
    file: matematicasParaInformatica,
  },
  {
    name: 'Algebra de Baldor',
    autor: 'A. Baldor',
    description: 'En este libro aprendera los fundamentos de programacion en el lenguaje de Java',
    profileUrl: baldorProfile,
    file: baldor,
  },
  {
    name: 'Cronica de una muerte anunciada',
    autor: 'Gabriel Garcia Marquez',
    description: 'En este libro aprendera los fundamentos de programacion en el lenguaje de Java',
    profileUrl: cronicadeunamuerteProfile,
    file: cronicadeunamuerte,
  },
  {
    name: 'El arbol que llora sangre',
    autor: 'Jhon Smit',
    description: 'En este libro aprendera los fundamentos de programacion en el lenguaje de Java',
    profileUrl: elArbolQueLloraSangreProfile,
    file: elArbolQueLloraSangre,
  },
  {
    name: 'Lenguaje',
    autor: 'Jhon Smit',
    description: 'En este libro aprendera los fundamentos de programacion en el lenguaje de Java',
    profileUrl: lenguaje25Profile,
    file: lenguaje25,
  },
  {
    name: 'Ingles basico 1',
    autor: 'Jhon Smit',
    description: 'En este libro aprendera los fundamentos de programacion en el lenguaje de Java',
    profileUrl: inglesBasico01Profile,
    file: inglesBasico01,
  },
  {
    name: 'Ingles basico 2',
    autor: 'Jhon Smit',
    description: 'En este libro aprendera los fundamentos de programacion en el lenguaje de Java',
    profileUrl: inglesBasico05Profile,
    file: inglesBasico05,
  },
  {
    name: 'Sociales',
    autor: 'Jhon Smit',
    description: 'En este libro aprendera los fundamentos de programacion en el lenguaje de Java',
    profileUrl: socialesProfile,
    file: sociales,
  },
  {
    name: 'Geografia',
    autor: 'Jhon Smit',
    description: 'En este libro aprendera los fundamentos de programacion en el lenguaje de Java',
    profileUrl: javaProgeografiaProfilefile,
    file: geografia,
  },
  {
    name: 'Musica 1',
    autor: 'Jhon Smit',
    description: 'En este libro aprendera los fundamentos de programacion en el lenguaje de Java',
    profileUrl: musica1Profile,
    file: musica1,
  },
  {
    name: 'Musica 2',
    autor: 'Jhon Smit',
    description: 'En este libro aprendera los fundamentos de programacion en el lenguaje de Java',
    profileUrl: musica2Profile,
    file: musica2,
  },
  {
    name: 'Artes Plasticas 1',
    autor: 'Jhon Smit',
    description: 'En este libro aprendera los fundamentos de programacion en el lenguaje de Java',
    profileUrl: artesPlasticas1Profile,
    file: artesPlasticas1,
  },
  {
    name: 'Artes Plascicas 2',
    autor: 'Jhon Smit',
    description: 'En este libro aprendera los fundamentos de programacion en el lenguaje de Java',
    profileUrl: artesPlasticas2Profile,
    file: artesPlasticas2,
  },
  {
    name: 'Ecologia general',
    autor: 'Jhon Smit',
    description: 'En este libro aprendera los fundamentos de programacion en el lenguaje de Java',
    profileUrl: ecologiaGeneralProfile,
    file: ecologiaGeneral,
  },
  {
    name: 'Anatomia y Fisiologia',
    autor: 'Jhon Smit',
    description: 'En este libro aprendera los fundamentos de programacion en el lenguaje de Java',
    profileUrl: anatomiaFisiologiaProfile,
    file: anatomiaFisiologia,
  },
  {
    name: 'Electrodinamica',
    autor: 'Jhon Smit',
    description: 'En este libro aprendera los fundamentos de programacion en el lenguaje de Java',
    profileUrl: electrodinamicaProfile,
    file: electrodinamica,
  },
  {
    name: 'Fisica',
    autor: 'Jhon Smit',
    description: 'En este libro aprendera los fundamentos de programacion en el lenguaje de Java',
    profileUrl: fisica7maProfile,
    file: fisica7ma,
  },
  {
    name: 'Quimica general',
    autor: 'Jhon Smit',
    description: 'En este libro aprendera los fundamentos de programacion en el lenguaje de Java',
    profileUrl: quimicaGeneralProfile,
    file: quimicaGeneral,
  },
  {
    name: 'Filosofia 1',
    autor: 'Jhon Smit',
    description: 'En este libro aprendera los fundamentos de programacion en el lenguaje de Java',
    profileUrl: filosofia1Profile,
    file: filosofia1,
  },
  {
    name: 'Filosofia 2',
    autor: 'Jhon Smit',
    description: 'En este libro aprendera los fundamentos de programacion en el lenguaje de Java',
    profileUrl: filosofia2Profile,
    file: filosofia2,
  },
  {
    name: 'Un plan de vida para Jovenes',
    autor: 'Jhon Smit',
    description: 'En este libro aprendera los fundamentos de programacion en el lenguaje de Java',
    profileUrl: unPlanVidaJovenesProfile,
    file: unPlanVidaJovenes,
  },
  {
    name: 'Libro de valores',
    autor: 'Jhon Smit',
    description: 'En este libro aprendera los fundamentos de programacion en el lenguaje de Java',
    profileUrl: libroValoresProfile,
    file: libroValores,
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
