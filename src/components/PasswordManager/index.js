import {Component} from 'react'
import './index.css'

class PasswordManager extends Component {
  state = {userName: '', userPassword: '', passwordsList: []}

  addPassword = event => {
    event.preventDefault()
  }

  render() {
    const {userName, userPassword, passwordsList} = this.state
    return (
      <div className="app-container">
        <div className="password-manager-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
        </div>
        <div className="form-input-and-password-manager-image-container">
          <div className="user-name-password-input-container">
            <form onSubmit={this.addPassword}>
              <h1>Add New Password</h1>
              <div className="website-input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="username"
                  className="website-logo"
                />
                <input
                  placeholder="Enter Website"
                  type="text"
                  className="website-input"
                />
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
                <input placeholder="Enter Username" type="text" />
              </div>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="username"
                />
                <input placeholder="Enter Password" type="text" />
              </div>
              <div className="add-button-container">
                <button type="submit" className="button">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
