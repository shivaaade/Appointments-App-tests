// Write your code here

const Welcome = props => {
  const {appSubList, isStarredFun} = props
  const {id, title, date, isStarred} = appSubList

  const star = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const starChange = () => {
    isStarredFun(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button testid="star" onClick={starChange} type="button">
        <img alt="star" src={star} />
      </button>
      <p>Date: {date}</p>
    </li>
  )
}

export default Welcome
