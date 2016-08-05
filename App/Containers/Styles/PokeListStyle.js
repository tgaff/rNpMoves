import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

styles = {
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.snow
  },
  row: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: Metrics.baseMargin,
    backgroundColor: Colors.drawer,
    borderRadius: Metrics.smallMargin
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center'
  },
  listContent: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
}

// Generate specific row styles for each 'type'
colorStyles = {  }
colors = 'water grass bug fire normal poison fairy ground fighting electric\
          psychic ice rock ghost dragon flying'.split(' ')
console.log(colors)

colors.forEach((color) => {
  let newColorStyle = Object.assign({}, styles.row)
  newColorStyle.backgroundColor = Colors[color]
  colorStyles[color+"Row"] = newColorStyle
})

// now merge the styles above with the ones we just generated
Object.assign(styles, colorStyles)

export default StyleSheet.create(styles)
