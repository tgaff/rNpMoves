import React, { Component } from 'react'
import { Scene, Router, ActionConst } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen'
import AllComponentsScreen from '../Containers/AllComponentsScreen'
import UsageExamplesScreen from '../Containers/UsageExamplesScreen'
import LoginScreen from '../Containers/LoginScreen'
import ListviewExample from '../Containers/ListviewExample'
import ListviewGridExample from '../Containers/ListviewGridExample'
import MapviewExample from '../Containers/MapviewExample'
import APITestingScreen from '../Containers/APITestingScreen'
import ThemeScreen from '../Containers/ThemeScreen'
import DeviceInfoScreen from '../Containers/DeviceInfoScreen'
import MoveListScreen from '../Containers/MoveListScreen'
import PokeListScreen from '../Containers/PokeList'
import MovesHelpScreen from '../Containers/MovesHelpScreen'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene key='presentationScreen' component={PresentationScreen} title='Ignite' renderLeftButton={NavItems.hamburgerButton} />
            <Scene key='componentExamples' component={AllComponentsScreen} title='Components' />
            <Scene key='usageExamples' component={UsageExamplesScreen} title='Usage' rightTitle='Example' onRight={() => window.alert('Example Pressed')} />
            <Scene key='login' component={LoginScreen} title='Login' hideNavBar />
            <Scene key='listviewExample' component={ListviewExample} title='Listview Example' />
            <Scene key='listviewGridExample' component={ListviewGridExample} title='Listview Grid' />
            <Scene key='mapviewExample' component={MapviewExample} title='Mapview Example' />
            <Scene key='apiTesting' component={APITestingScreen} title='API Testing' />
            <Scene key='theme' component={ThemeScreen} title='Theme' />
            <Scene key='deviceInfo' component={DeviceInfoScreen} title='Device Info' />
            <Scene key='moveList' component={MoveListScreen} title='Available Moves' type={ActionConst.PUSH} />
            <Scene key='movesHelp' component={MovesHelpScreen} title='Help' type={ActionConst.PUSH} />
            <Scene initial key='pokeList' component={PokeListScreen} title='Pokemon List' />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
