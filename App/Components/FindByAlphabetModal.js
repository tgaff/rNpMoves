import React, { Component, PropTypes } from 'react'
import { Text, TouchableOpacity, Modal, TouchableHighlight, View, ListView } from 'react-native'
import RoundedButton from './RoundedButton'

import styles from './Styles/FindByAlphabetModalStyles'
const ALPHABET="ABCDEFGHIJKLMNOPRSTVWZ".split('')


class FindByAlphabetModal extends Component {
  constructor(props) {
    super(props)

    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})
    // Datasource is always in state

    // initial state
    this.state = {
      openModal: false,
      styles: props.styles,
      // onSelection: props.onSelection,
      dataSource: ds.cloneWithRows(ALPHABET)
    }
  }

  static propTypes = {
    styles: React.PropTypes.object,
    onSelection: React.PropTypes.func.isRequired,
    visible: React.PropTypes.bool
    // title: React.PropTypes.string.isRequired,
    // body: React.PropTypes.string.isRequired
  }

  _renderRow = (rowData) => {
    return (<TouchableHighlight onPress={ () => this.handlePressButton(rowData) } style={styles.row}>
              <View >
                <Text style={[styles.alphaChar]}>{rowData}</Text>
              </View>
            </TouchableHighlight>
          )
  }

  handlePressButton = (character) => {
    // this._closeModal()
    this.setState({openModal: false});

    this.props.onSelection(character)
  }

  _closeModal = () => {
    this.setState({openModal: false});
  }


  componentWillReceiveProps = (newProps) => {
    let newState = {
      openModal: newProps.visible
    }
    this.setState(newState)
  }

  render () {

    return (
      <Modal animationType='fade' transparent={true} visible={this.state.openModal}
                             onRequestClose={ this._closeModal } >
        <View style={[styles.view, styles.container,this.state.styles]}>
          <Text>{this.state.openModal}</Text>
          <ListView
            initialListSize={45}
            pageSize={12}
            contentContainerStyle={styles.listContent}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
          />

          <RoundedButton
            text='X'
            onPress={this._closeModal}
          />
        </View>
      </Modal>
    )
  }
}

export default FindByAlphabetModal
