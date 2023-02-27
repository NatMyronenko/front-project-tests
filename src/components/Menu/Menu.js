import React from 'react';
import css from './Menu.module.css';

export const Menu = () => {
  return (
    <ul className={css.Menu__list}>
      <li className={css.Menu__item}>
        Home
        {/* <a className="menu__link"></a> */}
      </li>
      <li className={css.Menu__item}>
        Test Variants
        {/* <a className="menu__link"></a> */}
      </li>
    </ul>
  );
};
