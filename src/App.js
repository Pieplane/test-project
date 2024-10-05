import Header from './components/Header';
import Menu from './components/Menu';
import React, {useState} from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
    <Header toggleMenu = {toggleMenu}/>
    {isMenuOpen && <Menu toggleMenu={toggleMenu}/>}
    </div>
  );
};

export default App;
