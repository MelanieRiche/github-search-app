import React from 'react';
import PropTypes from 'prop-types';

import { Message as MessageSemanticUi } from 'semantic-ui-react';

const Message = ({ content }) => (
  <MessageSemanticUi>
    {content}
  </MessageSemanticUi>
);

Message.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Message;
