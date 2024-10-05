import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';
import React, {useState} from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
    <Main />
    <Header toggleMenu = {toggleMenu}> 
    </Header>
    {isMenuOpen && <Menu toggleMenu={toggleMenu}/>}
    
    </div>
  );
};

export default App;
