// Write your code here
import './index.css'

const HistoryList = props => {
  const {HistoryDetails} = props
  const {timeAccessed, logoUrl, title, domainUrl} = HistoryDetails
  return (
    <li className="SuggestionListContainer">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} className="image" alt="domain logo" />
      <p className="title">{title}</p>
      <p className="domainName">{domainUrl}</p>
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="button"
        />
      </button>
    </li>
  )
}

export default HistoryList
