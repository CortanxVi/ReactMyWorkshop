import React from 'react'
import {userContext} from './context'

export default class Header2 extends React.Component {
  static contextType = userContext

  render() {
    let [user, setUser] = this.context
    const headerStyle = {
      backgroundColor: '#cee',
      textAlign: 'center',
      padding: 5,
    }

    const onClickSignout = (event) => {
      event.preventDefault()
      setUser('')
    }

    const onClickSignin = (event) => {
      event.preventDefault()
      setUser('root')
    }

    return (
      <div style={headerStyle}>
        <a href="/">Home</a>&nbsp;-&nbsp;
        <a href="/product">Product</a>&nbsp;-&nbsp;
        <a href="/contact">Contact Us</a>&nbsp;-&nbsp;
        {
          (user)
          ? <span>[{user}&nbsp;:&nbsp;<a href="#"
          onClick={onClickSignout}>Signout</a>]</span>
          :<span>[<a href="#" onClick={onClickSignin}>
            signin</a>]</span>
        }
      </div>
    )
  }
}