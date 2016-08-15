import { Metrics, Colors, Fonts } from '../../Themes'

export default {
  title: {
    ...Fonts.style.h5,
    color: Colors.coal,
    margin: Metrics.baseMargin,
    textAlign: 'center'
  },
  body: {
    ...Fonts.style.regular,
    color: Colors.coal,
    margin: Metrics.baseMargin
  },
  view: {
    marginTop: 40,
    marginBottom: 22,
    marginLeft:14,
    marginRight: 14,
    backgroundColor: 'rgba(220,220,220, 0.94)',
    borderRadius: 14,
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
