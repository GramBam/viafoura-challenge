import React from 'react';


function Comment() {
  return (
    <div className="comment-box">
      <img src ="https://www.placecage.com/c/100/100" class="avatar"></img>
      <header>
        <p className="header__name">Brad</p>
        <p className="header__info">AUTHOR</p>
        <p className="header__time">2 minutes ago</p>
      </header>
        <div class="comment-box__content">
          So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork.
        </div>
    </div>
  )
}

export default Comment;