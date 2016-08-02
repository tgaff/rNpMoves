import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  text: {
    color: Colors.silver
  },

  item: {
    width: 100,
    color: Colors.snow,
    backgroundColor: Colors.fire,
    margin: Metrics.baseMargin,
    borderRadius: 5
  },
  listContent: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }

})
