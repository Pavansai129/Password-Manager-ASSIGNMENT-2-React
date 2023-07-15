import './index.css'

const PasswordItem = props => {
  const {passwordDetails, deletePasswordCardItem, showPassword} = props
  const {id, website, userName, userPassword} = passwordDetails
  const websiteProfileText = website.slice(0, 1)
  const onDeletePasswordCard = () => {
    deletePasswordCardItem(id)
  }
  return (
    <li className="password-card-container">
      <div className="password-profile-container">
        <h1 className="password-profile-text">{websiteProfileText}</h1>
      </div>
      <div className="password-card-details-container">
        <p>{website}</p>
        <p>{userName}</p>
        {showPassword ? (
          <p>{userPassword}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars-image"
          />
        )}
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={onDeletePasswordCard}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default PasswordItem
