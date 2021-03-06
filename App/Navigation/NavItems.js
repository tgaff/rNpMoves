import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './Styles/NavItemsStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors, Metrics } from '../Themes'

const toggleDrawer = () => {
  NavigationActions.refresh({
    key: 'drawer',
    open: value => !value
  })
}

export default {
  // FIXME: DOA? these don't seem to be in use really

  // backButton () {
  //   return (
  //     <TouchableOpacity onPress={NavigationActions.pop}>
  //       <Icon name='angle-left'
  //         size={Metrics.icons.medium}
  //         color={Colors.coal}
  //         style={styles.navButtonLeft}
  //       />
  //     </TouchableOpacity>
  //   )
  // },
  //
  // hamburgerButton () {
  //   return (
  //     <TouchableOpacity onPress={toggleDrawer}>
  //       <Icon name='bars'
  //         size={Metrics.icons.medium}
  //         color={Colors.coal}
  //         style={styles.navButtonLeft}
  //       />
  //     </TouchableOpacity>
  //   )
  // }

}
