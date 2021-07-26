import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Segment } from 'semantic-ui-react';

const SearchBar = ({
  value,
  changeValue,
  doSearch,
  isLoading,
}) => {
  const handleChange = (event) => {
    changeValue(event.target.value);
  };
  const handleSubmit = () => {
    doSearch();
  };
  return (
    <Segment>
      <Form onSubmit={handleSubmit}>
        <Input
          loading={isLoading}
          placeholder="Recherche"
          icon="search"
          iconPosition="left"
          fluid
          value={value}
          onChange={handleChange}
        />
      </Form>
    </Segment>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
  doSearch: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default SearchBar;
