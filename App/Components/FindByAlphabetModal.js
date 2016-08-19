import React, { Component, PropTypes } from 'react'
import { Text, TouchableOpacity, Modal, TouchableHighlight, View, ListView } from 'react-native'
import RoundedButton from './RoundedButton'

import styles from './Styles/FindByAlphabetModalStyles'
const ALPHABET="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')


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
      onSelection: props.onSelection,
      dataSource: ds.cloneWithRows(ALPHABET)
    }
  }

  static propTypes = {
    styles: React.PropTypes.object,
    onRequestClose: React.PropTypes.func,
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
     this.props.onSelection(character)
    this._closeModal()
  }

  _closeModal = () => {

    if ( this.props.onRequestClose ) { this.props.onRequestClose() }
    this.setState({openModal: false});
  }


  componentWillReceiveProps = (newProps) => {
    let newState = {
      title: newProps.title,
      body: newProps.body,
      onRequstClose: newProps.onRequestClose,
      openModal: newProps.openModal
    }
    this.setState(newState)
  }
  render () {

    return (
      <Modal animationType='fade' transparent={true} visible={this.state.openModal}
                             onRequestClose={ this._closeModal } >
        <View style={[styles.view, styles.container,this.state.styles]}>

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
