import React, { Component, PropTypes } from 'react'
import { ScrollView, Image } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

class DrawerContent extends Component {

  constructor (props) {
    super(props)
    this.state = {monImageId: Math.floor(Math.random() * (152 - 1) + 1)}

  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressComponents = () => {
    this.toggleDrawer()
    NavigationActions.componentExamples()
  }

  handlePressUsage = () => {
    this.toggleDrawer()
    NavigationActions.usageExamples()
  }

  handlePressAPI = () => {
    this.toggleDrawer()
    NavigationActions.apiTesting()
  }

  handlePressTheme = () => {
    this.toggleDrawer()
    NavigationActions.theme()
  }

  handlePressDevice = () => {
    this.toggleDrawer()
    NavigationActions.deviceInfo()
  }

  handlePressPokeList = () => {
    this.toggleDrawer()
    NavigationActions.pokeList()
  }


  handlePressHelp = () => {
    this.toggleDrawer()
    NavigationActions.movesHelp()
  }

  // render () {
  //   return (
  //     <ScrollView style={styles.container}>
  //       <Image source={Images.logo} style={styles.logo} />
  //       <DrawerButton text='Component Examples' onPress={this.handlePressComponents} />
  //       <DrawerButton text='Usage Examples' onPress={this.handlePressUsage} />
  //       <DrawerButton text='API Testing' onPress={this.handlePressAPI} />
  //       <DrawerButton text='Themes' onPress={this.handlePressTheme} />
  //       <DrawerButton text='Device Info' onPress={this.handlePressDevice} />
  //     </ScrollView>
  //   )
  // }

  render () {
    // get a random image to render as the logo
    //const monImage = Images.pokemon[Math.floor(Math.random() * (152 - 1) + 1)]
    const monImage = Images.pokemon[this.state.monImageId]
    this.state.monImageId = this.state.monImageId + 1 || 1
    //const monImage = Images.pokemon[2]
    return (
      <ScrollView style={styles.container}>
        <Image source={monImage} style={styles.logo} />
        <DrawerButton text='All Pokemon' onPress={this.handlePressPokeList} />
        <DrawerButton text='Help' onPress={this.handlePressHelp} />
      </ScrollView>
    )
  }


}

DrawerContent.propTypes = {
}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
