'use strict';

import React from 'react';
import { styles } from '../styles/Selection';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

class Selection extends React.Component {
  handleListItemClick = ({ ...args }) => {
    const { onClose } = this.props;
    onClose({ ...args });
  };

  render() {
    const { id, list, titleText, open } = this.props;
    if (Object.keys(list).length < 1) {
      return <React.Fragment />;
    }
    return (
      <Dialog
        onClose={() =>
          this.handleListItemClick({
            selectedValue: null,
            triggerChange: false
          })
        }
        open={open}
      >
        <DialogTitle id={id}>{titleText}</DialogTitle>
        <div>
          <List>
            {Object.keys(list).map(a => {
              const item = list[a];
              return (
                <ListItem
                  button
                  onClick={() =>
                    this.handleListItemClick({
                      selectedValue: a,
                      triggerChange: true
                    })
                  }
                  key={a}
                >
                  <ListItemText primary={item.name} />
                </ListItem>
              );
            })}
          </List>
        </div>
      </Dialog>
    );
  }
}

export default withStyles(styles)(Selection);
