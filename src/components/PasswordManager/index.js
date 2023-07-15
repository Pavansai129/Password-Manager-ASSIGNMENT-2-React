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
        <div className="password-manager-container">
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
                <h1 className="add-new-password-text">Add New Password</h1>
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
                <div className="username-input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="user-logo"
                  />
                  <input
                    placeholder="Enter Username"
                    type="text"
                    className="username-input"
                  />
                </div>
                <div className="password-input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="username"
                    className="password-logo"
                  />
                  <input
                    placeholder="Enter Password"
                    type="text"
                    className="password-input"
                  />
                </div>
                <div className="add-button-container">
                  <button type="submit" className="add-button">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <div className="password-manager-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="password-manager-image"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
