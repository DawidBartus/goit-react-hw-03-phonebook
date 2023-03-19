import React from 'react';
import PropTypes from 'prop-types';

const Filter = props => {
  const { onChange } = props;

  return (
    <div>
      <p>Find contact by name</p>
      <input type="text" onChange={onChange} placeholder="Search" />
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};

export default Filter;
