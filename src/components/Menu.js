import '../styles/components/menu.css';

const Menu = ({ toggleMenu }) => {
  // Функция, вызываемая при нажатии на кнопку
  const handleClick = () => {
    console.log('Кнопка была нажата!');
  };

  return (
    <div className="menu">
      <div className="menu__close" onClick={toggleMenu}>
        <img src="images/menu_close.png" alt="Menu_close" />
      </div>
      <div className="menu__pad">
        {/* Содержимое меню */}
        <div className="menu__city">
          <img src="images/City.png" alt="City" />
        </div>
        <div className="menu__to">
          <img src="images/To.png" alt="research" />
        </div>

        <div className="menu__order">
          <p>Send a Parcel</p>
        </div>
        <div className="menu__courier">
          <p>Become a Courier</p>
        </div>
        <div className="menu__program">
          <p>Affiliate Program</p>
        </div>
        <div className="menu__help">
          <p>Help & Support</p>
        </div>

        <div className="menu__btn">
          <img
            src="images/Btn.png"
            alt="take a complex order"
            onClick={handleClick} // Здесь вызывается функция при клике
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;