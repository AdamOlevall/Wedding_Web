import React from 'react';
import PropTypes from 'prop-types';
import Isvg from 'react-inlinesvg';
import './styles.css';
import { Sizes, Modifiers, Animations } from './constants';

const View = ({
  icon, modifier, size, animate, color,
}) => (
  <Isvg
    className={`icon icon--${modifier} icon--${color}  icon--${size} icon--${animate}`}
    src={icon}
    key={icon}
  />
);

View.defaultProps = {
  size: Sizes.MEDIUM,
  modifier: Modifiers.DEFAULT,
  animate: Animations.DEFAULT,
};

View.propTypes = {
  modifier: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  animate: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

export default View;
