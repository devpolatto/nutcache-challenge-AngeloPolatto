import React, { Component } from "react";

import { Modal, Box } from './styles';

export default class PopUp extends Component {

    handleClick = () => { this.props.toggle() };

    render() {
        return (
            <Modal>
                <Box>
                    <span className="close-icon" onClick={this.handleClick}>&times;</span>
                    {this.props.content}
                </Box>
            </Modal>
                
        );
    }
}