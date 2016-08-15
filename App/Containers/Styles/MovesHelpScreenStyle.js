import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics, ApplicationStyles } from '../../Themes/'

const marginTop = 12

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background,
    marginLeft: 7,
    marginRight: 7
  },
  h1: {
    ...Fonts.style.h1
  },
  h2: {
    ...Fonts.style.h2
  },
  h3: {
    ...Fonts.style.h3,
    marginTop: marginTop
  },
  h4: {
    ...Fonts.style.h4,
    marginTop: marginTop
  },
  h5: {
    ...Fonts.style.h5,
    marginTop: marginTop
  },
  h6: {
    ...Fonts.style.h6,
    marginTop: 7
  },
  li: {
    ...Fonts.style.normal,
    fontSize: Fonts.size.small,
    marginLeft: 10,
    marginRight: 10
  },
  normal: {
    ...Fonts.style.normal,
    fontSize: Fonts.size.small
  },
  blue: {
    // ...Fonts.style.normal,
    // fontSize: Fonts.size.small,
    color: 'blue'
  },
  strong: {
    fontFamily: Fonts.type.bold,  // appears to do NOTHING
    fontSize: Fonts.size.small,
    color: 'black'
  }
})
