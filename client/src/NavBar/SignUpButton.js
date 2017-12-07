import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';

const style = {
  margin: 12,
};

const SignUpButton = () => (
  <div>
    <RaisedButton label="Sign up with Email" fullWidth={true} />
  </div>
);

export default SignUpButton;