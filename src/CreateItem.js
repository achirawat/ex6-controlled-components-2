import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateItem extends Component {
    state = {
        value: '',
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
      };
    
    addItem = event => {
        event.preventDefault();
        this.setState(oldState => ({
          items: [...oldState.items, this.state.value],
        }));
      };

    render() {
        return(
            <div>
                <form onSubmit={this.addItem}>
                    <input
                        type="text"
                        placeholder="Enter New Item"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <button disabled={this.inputIsEmpty()}>Add</button>
                </form>
            </div>
        );
    }
}