import React, { PureComponent } from 'react';
import { styles } from '../styles/Confirm';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Confirm extends PureComponent {
  constructor(props) {
    super(props);
  }

  handleClick = ({ confirm = false }) => {
    const { onClickHandler } = this.props;
    onClickHandler(confirm);
  };

  render() {
    const {
      titleText = `Confirm Action`,
      bodyText,
      trigger,
      fullWidthDialog,
      maxWidthDialog
    } = this.props;
    return (
      <Dialog
        open={trigger}
        fullWidth={fullWidthDialog}
        maxWidth={maxWidthDialog}
        aria-labelledby="confirm-dialogbox"
      >
        <DialogTitle>{titleText}</DialogTitle>
        <DialogContent>
          <DialogContentText>{bodyText}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={event => this.handleClick({ confirm: true })}
            color="secondary"
          >
            Yes
          </Button>
          <Button
            onClick={event => this.handleClick({ confirm: false })}
            color="secondary"
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(Confirm);
