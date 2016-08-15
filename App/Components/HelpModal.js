import React, { Component, PropTypes } from 'react'
import { Text, TouchableOpacity, Modal, TouchableHighlight, View } from 'react-native'
import RoundedButton from './RoundedButton'

import styles from './Styles/HelpModalStyles'

class HelpModal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openModal: false,
      styles: props.styles,
      onRequestClose: props.onRequestClose,
      title: props.title,
      body: props.body
    }
  }

  static propTypes = {
    styles: React.PropTypes.object,
    onRequestClose: React.PropTypes.func,
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired
  }


  _closeModal = () => {

    if ( this.props.onRequestClose ) { this.props.onRequestClose() }
    this.setState({openModal: false});
  }

  // _open = () => {
  //   this.setState({openModal: true});
  // }

  componentWillReceiveProps = (newProps) => {
    //newState = Object.assign({}, this.state)
    //debugger
    let newState = {
      title: newProps.title,
      body: newProps.body,
      onRequstClose: newProps.onRequestClose,
      openModal: newProps.openModal
    }
    // (newProps.styles) && (newState.styles = newProps.styles) // only if passed
    // newProps.onRequestClose && (newState.onRequestClose = newProps.onRequestClose)
    // finally, display it

    this.setState(newState)
  }
  render () {

    return (
      <Modal animationType='slide' transparent={true} visible={this.state.openModal}
                             onRequestClose={ this._closeModal } >
        <View style={[styles.view, this.state.styles]}>
          <Text style={[styles.title]}>{this.state.title}</Text>
          <Text style={[styles.body]}>{this.state.body}</Text>

          <RoundedButton
            text='Thanks!'
            onPress={this._closeModal}
          />
        </View>
      </Modal>
    )
  }
}

export default HelpModal
