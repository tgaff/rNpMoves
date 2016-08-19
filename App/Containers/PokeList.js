import React, { PropTypes } from 'react'
import { View, Text, ListView, TouchableHighlight, Image } from 'react-native'
import { connect } from 'react-redux'
import { Actions as NavigationActions } from 'react-native-router-flux'
///import pokemonData from '../Lib/PokemonList'
import data from '../Lib/PokemonList'
import { Images, Colors } from '../Themes'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'
import FindByAlphabetModal from '../Components/FindByAlphabetModal'

// For empty lists
import AlertMessage from '../Components/AlertMessageComponent'

// Styles
import styles from './Styles/PokeListStyle'

class PokeListScreen extends React.Component {

  constructor (props) {
    super(props)
    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})
    // Datasource is always in state
    this.state = {
      pokemonData: data.data,
      dataSource: ds.cloneWithRows(data.data),
      sortByAlphabetModal: false
    }
  }

  /* ***********************************************************
  * STEP 3
  * `_renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  _renderRow = (rowData) => {
    var buttonStyle = styles[rowData.type1.toLowerCase()+"Row"]
    console.log('style', buttonStyle, rowData.type1)
    return (<TouchableHighlight style={buttonStyle} onPress={ () => this.handlePressButton(rowData.id)  }>
              <View>
                <Image style={styles.buttonImage} source={Images.pokemon[rowData.id]}>
                <Text style={[styles.boldLabel]}>{rowData.name}</Text>

                </Image>
              </View>
            </TouchableHighlight>
          )
  }


  handlePressButton (id) {
    const data = this.state.pokemonData.find(function(item) { return item.id === id});

    this.props.moveListScreen({data: {subdata: data} })
    //NavigationActions.MoveListScreen(data);
    // this.props.navigator.push({pokeNumber: id})
    // const {dispatch} = this.props
    // dispatch(Actions.displayMoves(id))
  }

  _openFilterModal = (params) => {
    if (params.sortType === 'alphabetical') {

    } else {
      window.alert('sort by '+ params.sortType)

    }
    this.setState({modal: params})
    this.setState({openModal: true})
  }


  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newProps.someData)
        })
      }
    }
  *************************************************************/

  static propTypes = {
  }

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
  _noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    const searchIcon = (<Icon name="ios-search" size={30} color={Colors.snow} />)

    return (
      <View style={styles.container}>
        <AlertMessage title='Nothing to See Here, Move Along' show={this._noRowData()} />
        <ListView
          initialListSize={45}
          pageSize={12}
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
        <ActionButton buttonColor={Colors.charcoal} icon={searchIcon} degrees={450}>
          <ActionButton.Item buttonColor='#9b59b6' title="Find by type" onPress={() => {this._openFilterModal({sortType: 'type'})}}>
            <Icon name="md-flame" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Find alphabetical" onPress={()=>{this._openFilterModal({sortType: 'alphabetical'})}}>
            <Text style={styles.actionButtonMainText}>Aa</Text>
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Sort by Pokedex number" onPress={()=>{this._openFilterModal({sortType: 'number'})} }>
            <Text style={styles.actionButtonMainText}>#</Text>
          </ActionButton.Item>
        </ActionButton>

        <FindByAlphabetModal visible={this.state.sortByAlphabetModal} onRequestClose={this.filterAlphabetical}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  //console.log(cleanedPokeData)
  return {}
}

const mapDispatchToProps = () => {
  return {
    moveListScreen: NavigationActions.moveList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokeListScreen)
