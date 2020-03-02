import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './Vote.css';

class Vote extends React.Component {
  constructor(props) {
    super();

    this.state = {voteCount: 0}
  }

  render() {
    return (
      <div className="vote-display" onClick={()=> this.setState({voteCount:this.state.voteCount+1})}>
        <FontAwesomeIcon icon={this.props.upvote ? faChevronUp : faChevronDown} />
        <p className="vote-display__count">{this.state.voteCount}</p>
      </div>
    )
  }
}

export default Vote;