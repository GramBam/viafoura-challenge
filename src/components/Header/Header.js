import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {name:"", minutesOld: 1};
    fetch("https://randomuser.me/api/").then(res => res.json()).then((data)=> {
      this.setState({name: data.results[0].name.first});
    });

    setTimeout(() => {
      this.setState({minutesOld: this.state.minutesOld+1});
    }, 60000);
  }

  render() {
    return (
      <div className="header">
        <p className="header__name">{this.state.name}</p>
        <p className="header__info">AUTHOR</p>
        <p className="header__time">· {this.state.minutesOld} {this.state.minutesOld === 1 ? "minute" : "minutes"} ago</p>
      </div>
    )
  }
}

export default Header;