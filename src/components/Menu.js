import '../styles/components/menu.css';

const Menu = ({toggleMenu}) => (
<div className="menu">
    <div className='menu__close' onClick={toggleMenu}>
        <img src="images/menu_close.png" alt="Menu_close"/>
        </div>
    <div className="menu__pad">
        {/* Содержимое меню */}
        <p>Это меню</p>
      </div>
</div>
);

export default Menu;