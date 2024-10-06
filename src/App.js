import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';
import Info from './components/Info';
import Partners from './components/Partners';
import React, {useState} from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
    <Main />
    <Header toggleMenu = {toggleMenu}></Header>
    {isMenuOpen && <Menu toggleMenu={toggleMenu}/>}
    <Info />
    <Partners />
    </div>
  );
};

export default App;
