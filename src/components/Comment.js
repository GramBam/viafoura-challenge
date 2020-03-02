import React from 'react';
import Vote from './Vote';


function Comment() {
  return (
    <div className="comment-box">
      <img src="https://www.placecage.com/c/50/50" alt ="avatar" className="avatar"></img>
      <div className="header">
        <p className="header__name">Brad</p>
        <p className="header__info">AUTHOR</p>
        <p className="header__time">· 2 minutes ago</p>
      </div>
      <div className="comment-box__content">
        So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork.
        </div>
      <div className="footer">
        <p className="footer__name">Reply</p>
        <p className="footer__info">21 REPLIES</p>
        <Vote />
      </div>
    </div>
  )
}

export default Comment;