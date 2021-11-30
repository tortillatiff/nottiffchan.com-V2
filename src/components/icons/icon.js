import React from 'react';
import PropTypes from 'prop-types';
import {
  IconArrowRight,
  IconArrowUpRight,
  IconLinkedIn,
  IconMail
} from '../icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'ArrowRight':
      return <IconArrowRight />;
    case 'ArrowUpRight':
      return <IconArrowUpRight />;
    case 'LinkedIn':
      return <IconLinkedIn />;
    case 'Mail':
      return <IconMail />;
    default:
      return null;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
