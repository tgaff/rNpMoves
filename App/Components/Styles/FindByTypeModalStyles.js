import { Metrics, Colors, Fonts } from '../../Themes'

export default {

  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
  //  backgroundColor: Colors.charcoal,
  //  opacity: 0.92,

  },
  listContent: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  buttonLabel: {
    fontWeight: 'bold',
//    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    textAlignVertical: 'bottom',
    fontSize: 16

  },
  row: {
    width: 68,
    height: 104,
    justifyContent: 'center',
    alignItems: 'center',
    margin: Metrics.smallMargin,
  //  backgroundColor: Colors.drawer,
  },
  buttonImage: {

    width: 70,
    height: 70
  },
  wrappingView: {
    paddingBottom: 21
  },








  title: {
    ...Fonts.style.h5,
    color: Colors.coal,
    margin: Metrics.baseMargin,
    textAlign: 'center'
  },
  body: {
    ...Fonts.style.regular,
    color: Colors.coal,
    margin: Metrics.baseMargin,
    textAlign: 'justify'
  },
  view: {
    // marginTop: 40,
    // marginBottom: 22,
    // marginLeft:14,
    // marginRight: 14,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: 'rgba(220,220,220, 0.94)',
    // borderRadius: 14,
    justifyContent: 'space-between'
  },
  button: {
    margin: Metrics.baseMargin,
  }
}
// alignItems: 'center',
// backgroundColor: '#f5fcff',
// flex: 1,
// justifyContent: 'center',
