import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Repo = ({ description, name: title, owner }) => (
  <Card>
    <Image src={owner.avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        {owner.login}
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
  </Card>
);

Repo.propTypes = {
  // eslint-disable-next-line react/require-default-props
  description: PropTypes.node,
  name: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Repo;
