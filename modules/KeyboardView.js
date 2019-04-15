import React from 'react'
import { Keyboard } from 'react-native'

// const window = Dimensions.get('window')

class KeyboardView extends React.Component {
  state = { screenBottom: 0 }

  componentDidMount() {
    this.showListener = Keyboard.addListener('keyboardDidShow', this.keyboardEnter)
    this.hideListener = Keyboard.addListener('keyboardDidHide', this.keyboardExit)
  }

  componentWillUnmount() {
    this.showListener.remove()
    this.hideListener.remove()
  }

  /**
   * Screen-y marks y coordinate od keyboard start
   */
  keyboardEnter = ({ endCoordinates }) => {

    console.log(endCoordinates);
    
    this.setState({ screenBottom: endCoordinates.screenY })
  }

  keyboardExit = () => {
    this.setState({ screenBottom: 0 })
  }

  render() {
    const { render, children } = this.props
    const { screenBottom } = this.state

    const renderFunction = render || children

    if (typeof renderFunction !== 'function') {
      throw Error('Render prop function not provided to "KeyboardView"')
    }

    return children(screenBottom)
  }
}

export default KeyboardView
