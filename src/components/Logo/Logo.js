import React from 'react';
import { Link } from 'react-router-dom';
import LogoSvg from 'img/sprite.svg';
import css from './Logo.module.css';

export const Logo = () => {
  return (
    <Link>
      <svg width={40} height={40} className={css.Logo_svg}>
        <use href={LogoSvg + '#icon-logo'}></use>
      </svg>
    </Link>
  );
};
