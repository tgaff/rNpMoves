import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'
import { Image } from 'react-native'


export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  text: {
    color: Colors.snow
  },
  col:{
    flex: 1,
    color: Colors.snow,

  },
  row: {
    flexDirection: 'row',
    margin: Metrics.baseMargin
  },
  listContent: {
    // justifyContent: 'space-around',
    // flexDirection: 'column',
    // flexWrap: 'wrap',
    flex: 1,
    marginTop: Metrics.baseMargin,
    marginBottom: 0,
    borderRadius: 20,
    borderColor: '#ffffff',
    borderWidth: 2,
  },
  monOverview: {
    //flex: 1,
    borderTopWidth: 0,
    //height: 100,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    opacity: 1,
    paddingBottom: 20
  },
  monImage: {
    opacity: 1,
    width: 100,
    resizeMode: Image.resizeMode.contain
  },
  monTypeView: {
    width: 200,
    flexDirection: 'row',
    backgroundColor: Colors.snow,
    justifyContent: 'space-around',


  },
  monTypeText: {
    padding: 5,
    textAlign: 'center',
    color: Colors.coal,
    textAlignVertical: 'center'
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
    //  alignItems: 'stretch'
    }
  }
  return StyleSheet.create(style)
}
