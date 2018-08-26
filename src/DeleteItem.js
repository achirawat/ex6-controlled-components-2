import React from 'react';
import PropTypes from 'prop-types';

const DeleteItem = props => {
    const handleDeleteLastItem = event => {
        props.onDeleteLastItem();
      };
    return (
        <button onClick={handleDeleteLastItem} disabled={props.disableButton}>
          Delete Last Item
        </button>
    );
}

DeleteItem.propTypes = {
    disableButton: PropTypes.func.isRequired,
    handleDeleteLastItem: PropTypes.func.isRequired,
};

export default DeleteItem;