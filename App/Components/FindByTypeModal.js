import React, { Component, PropTypes } from 'react'
import { Image, Text, TouchableOpacity, Modal, TouchableHighlight, View, ListView } from 'react-native'
import RoundedButton from './RoundedButton'
import { Colors, Images } from '../Themes'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './Styles/FindByTypeModalStyles'
const TYPES=['water', 'grass', 'bug', 'fire',
             'normal', 'poison', 'fairy', 'ground',
             'fighting', 'electric', 'psychic', 'ice',
             'rock', 'dragon', 'ghost', 'flying']
import ActionButton from 'react-native-action-button'
/////////////////// temporary
const typeImage = Images.pokemon[1]


class FindByTypeModal extends Component {
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
      dataSource: ds.cloneWithRows(TYPES)
    }
  }

  static propTypes = {
    styles: React.PropTypes.object,
    onSelection: React.PropTypes.func.isRequired, // callback to parent
    visible: React.PropTypes.bool
  }

  _renderRow = (rowData) => {
    return (<TouchableHighlight onPress={ () => this.handlePressButton(rowData) } style={styles.row}>
              <View >
                <Image style={[styles.alphaChar]}>{typeImage}</Image>
              </View>
            </TouchableHighlight>
          )
  }

  handlePressButton = (character) => {
    this.props.onSelection(character)
  }

  componentWillReceiveProps = (newProps) => {
    let newState = {
      openModal: newProps.visible
    }
    this.setState(newState)
  }

  render () {
    const closeIcon = (<Icon name="ios-close" size={30} color="#fff" />)

    return (
      <Modal animationType='fade' transparent={true} visible={this.state.openModal}
                             onRequestClose={ () => { this.handlePressButton('') } } >
        <View style={[styles.view, styles.container,this.state.styles]}>
          <Text>{this.state.openModal}</Text>
          <ListView
            initialListSize={45}
            pageSize={12}
            contentContainerStyle={styles.listContent}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
          />
          <ActionButton
            position="center"
            buttonColor={Colors.charcoal}
            icon={closeIcon}
            onPress={() => { this.handlePressButton('') }}
          />
        </View>
      </Modal>
    )
  }
}

export default FindByTypeModal
