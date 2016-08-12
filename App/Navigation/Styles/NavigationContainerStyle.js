import {Colors} from '../../Themes/'

export default {
  container: {
    flex: 1
  },
  navBar: {
    backgroundColor: Colors.background
  },
  title: {
    color: Colors.coal
  },
  leftButton: {
    tintColor: Colors.charcoal
  },
  rightButton: {
    top: 0
  },
  rightButtonTextStyle: {
    color: Colors.charcoal,
    fontSize: 22,
    padding: 8, // weird alignment issues, had to add a top:0 on the container (rightButton above)
    marginTop: 4,
    textAlignVertical: 'top'
  }
}
