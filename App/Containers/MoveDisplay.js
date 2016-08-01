import React, { PropTypes } from 'react'
import { ScrollView, Text, ListView, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import Routes from '../Navigation/Routes'

// Styles
import styles from './Styles/MoveDisplayStyle'

class MoveDisplay extends React.Component {

  constructor (props) {
    super(props)

    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})
    // const quickMoves = this.props.data.QuickMoves
    const powerMoves = this.props.data.CinematicMoves
    console.log('quick moves', this.props.data.QuickMoves)
    this.state = {
      quickMoves: ds.cloneWithRows(this.props.data.QuickMoves),
      powerMoves: ds.cloneWithRows(powerMoves)
    }
    // interesting stuff
    console.log('routes', props.navigator.state.routeStack);
    console.log(this.props.navigator.navigationContext.currentRoute);
    //props.number = this.props.navigator.navigationContext.currentRoute.passProps.number;
  }

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
  }


  _renderRow = (rowData) => {
    return (  <TouchableHighlight onPress={ () => console.log('clicked')  }>
              <Text style={styles.item}>({rowData})</Text>
            </TouchableHighlight>
          )
  }


  render () {
    //const number = this.props.navigator.navigationContext.currentRoute.passProps.number
    const data = this.props.data
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>{data.Name} is {data.Type1}</Text>
        <Text style={styles.text}>Quick moves</Text>
        <ListView
            initialListSize={100}
            contentContainerStyle={styles.listContent}
            dataSource={this.state.quickMoves}
            renderRow={this._renderRow}
        />
        <Text style={styles.text}>Power moves</Text>
          <ListView
              initialListSize={100}
              contentContainerStyle={styles.listContent}
              dataSource={this.state.powerMoves}
              renderRow={this._renderRow}
          />

      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps');
  console.log(state);
  return {
    someState: 'foo'
  }
}

export default connect(mapStateToProps)(MoveDisplay)
