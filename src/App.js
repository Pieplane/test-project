import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';
import Info from './components/Info';
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
    </div>
  );
};

export default App;
