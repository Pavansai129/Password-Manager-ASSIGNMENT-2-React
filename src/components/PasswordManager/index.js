import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'

class PasswordManager extends Component {
  state = {
    website: '',
    userName: '',
    userPassword: '',
    passwordsList: [],
    showPassword: false,
    searchWebsiteInput: '',
  }

  onUserWebsiteChange = event => {
    this.setState({website: event.target.value})
  }

  onUserNameChange = event => {
    this.setState({userName: event.target.value})
  }

  onUserPasswordChange = event => {
    this.setState({userPassword: event.target.value})
  }

  addPassword = event => {
    event.preventDefault()
    const {website, userName, userPassword, passwordsList} = this.state
    if (website !== '' && userName !== '' && userPassword !== '') {
      const newPasswordObj = {
        id: uuidv4(),
        website,
        userName,
        userPassword,
      }
      this.setState({
        passwordsList: [...passwordsList, newPasswordObj],
        userName: '',
        userPassword: '',
        website: '',
      })
    }
  }

  filterPasswordsList = event => {
    this.setState({searchWebsiteInput: event.target.value})
  }

  togglePassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  deletePasswordCardItem = uniqueId => {
    const {passwordsList} = this.state
    const filteredPasswordsList = passwordsList.filter(
      eachCard => eachCard.id !== uniqueId,
    )
    this.setState({passwordsList: filteredPasswordsList})
  }

  render() {
    const {
      website,
      userName,
      userPassword,
      passwordsList,
      showPassword,
      searchWebsiteInput,
    } = this.state
    const passwordsCount = passwordsList.length
    const filteredPasswordsList = passwordsList.filter(each =>
      each.website.toLowerCase().includes(searchWebsiteInput.toLowerCase()),
    )
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
                    alt="website"
                    className="website-logo"
                  />
                  <input
                    placeholder="Enter Website"
                    type="text"
                    className="website-input"
                    onChange={this.onUserWebsiteChange}
                    value={website}
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
                    onChange={this.onUserNameChange}
                    value={userName}
                  />
                </div>
                <div className="password-input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="password-logo"
                  />
                  <input
                    placeholder="Enter Password"
                    type="password"
                    className="password-input"
                    onChange={this.onUserPasswordChange}
                    value={userPassword}
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
          <div className="passwords-container">
            <div className="passwords-count-and-search-container">
              <div className="your-password-text-count-container">
                <h1 className="your-passwords-text">Your Passwords</h1>
                <p className="passwords-count">{passwordsCount}</p>
              </div>
              <div className="passwords-search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-logo"
                />
                <input
                  placeholder="Search"
                  type="search"
                  className="password-search-input"
                  onChange={this.filterPasswordsList}
                />
              </div>
            </div>
            <hr className="horizontal-line" />
            <div className="show-passwords-container">
              <input
                type="checkbox"
                id="showPasswords"
                onClick={this.togglePassword}
              />
              <label htmlFor="showPasswords" className="show-passwords-text">
                Show Passwords
              </label>
            </div>
            <div className="passwords-storage-container">
              {filteredPasswordsList.length > 0 ? (
                <ul className="passwords-storage-cards-container">
                  {filteredPasswordsList.map(eachPassword => (
                    <PasswordItem
                      key={eachPassword.id}
                      showPassword={showPassword}
                      deletePasswordCardItem={this.deletePasswordCardItem}
                      passwordDetails={eachPassword}
                    />
                  ))}
                </ul>
              ) : (
                <div className="no-passwords-image-text-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                    className="no-passwords-image"
                  />
                  <p className="no-passwords-text">No Passwords</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
