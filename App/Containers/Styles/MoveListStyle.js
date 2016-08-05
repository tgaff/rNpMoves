import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  text: {
    color: Colors.snow
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

export function generateStyles(color) {
  console.log('generates style for color:', color)
  let style = {
    container: // must have a key
    {
      flex: 1,
      marginTop: Metrics.navBarHeight,
      backgroundColor: Colors[color.toLowerCase()],
      opacity: 0.5
    }
  }
  return StyleSheet.create(style)
}
