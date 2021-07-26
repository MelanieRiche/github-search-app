import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import Repo from './Repo';

const ReposResults = ({ listOfRepos }) => (
  <Card.Group itemsPerRow={6} stackable>
    {listOfRepos.map((currentRepo) => (
      <Repo key={currentRepo.id} {...currentRepo} />
    ))}
  </Card.Group>
);

ReposResults.propTypes = {
  listOfRepos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ReposResults;
