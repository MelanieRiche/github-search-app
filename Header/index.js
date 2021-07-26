import React from 'react';
import PropTypes from 'prop-types';

import Logo from 'src/components/Logo';
import SearchBar from 'src/components/SearchBar';

const Header = ({
  value,
  changeValue,
  doSearch,
  isLoading,
}) => (
  <header>
    <Logo />
    <SearchBar
      value={value}
      changeValue={changeValue}
      doSearch={doSearch}
      isLoading={isLoading}
    />
  </header>
);

Header.propTypes = {
  value: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
  doSearch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Header;
