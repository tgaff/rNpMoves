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
    color: Colors.snow,
    margin: Metrics.baseMargin

  },
  headerButton: {
    flex: 2,

  },
  headerText: {
    fontSize: 9,
    color: Colors.snow,
    textAlignVertical: 'bottom', // doesn't seem to have any effect
    textAlign: 'left',
    margin: 0,
    borderWidth: 0,

  },
  headerRow: {
    flexDirection: 'row',
    margin: Metrics.baseMargin,
    marginBottom: 0,
    marginTop: 2
  },

  col:{
    flex: 2,
    color: Colors.snow,
  },
  row: {
    flexDirection: 'row',
    margin: Metrics.baseMargin,
  },
  colImage: {
    // flex: 1,
    height: 24,
    width: 24
  },
  listContent: {
    // justifyContent: 'space-around',
    // flexDirection: 'column',
    // flexWrap: 'wrap',
    //flex: 1,
    marginTop: Metrics.baseMargin,
    margin: Metrics.baseMargin,
    // borderRadius: 20,
    // borderColor: '#ffffff',
    // borderWidth: 2,
  },
  tableLabel: {
    padding: 5,
    textAlign: 'center',
    color: Colors.coal,
    textAlignVertical: 'center',
    backgroundColor: Colors.snow,
    justifyContent: 'space-around',

  },
  monOverview: {
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
    textAlignVertical: 'center',
    borderWidth: 1
  },
  monTypeImage: {
    height: 20,
    width: 20,
    marginLeft: 14
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
      //paddingTop: Metrics.baseMargin

    //  alignItems: 'stretch'
    }
  }
  return StyleSheet.create(style)
}
