import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';

const style = {
  margin: 12,
};

const GitHubButton = () => (
  <div>
    <RaisedButton label="Sign up with GitHub" fullWidth={true} />
  </div>
);

export default GitHubButton;