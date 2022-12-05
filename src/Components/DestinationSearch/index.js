import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  changeinputfun = event => {
    const {searchInput} = this.state
    this.setState(prevState => ({searchInput: event.target.value}))
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    // console.log(destinationsList)
    const searchresult = destinationsList.filter(eachuser =>
      eachuser.name.includes(searchInput),
    )
    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            value={searchInput}
            onChange={this.changeinputfun}
            className="searchbar"
            placeholder="search"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="searchimg"
          />
        </div>

        <ul className="cards-container">
          {searchresult.map(eachItem => (
            <DestinationItem eachItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
