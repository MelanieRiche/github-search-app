import React from 'react';
import { Segment, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const More = ({ loadMore, loading }) => (
  <Segment textAlign="center">
    <Button
      onClick={loadMore}
      loading={loading}
    >
      Plus de résultats
    </Button>
  </Segment>
);

More.propTypes = {
  loadMore: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default More;
