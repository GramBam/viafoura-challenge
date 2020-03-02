import React from 'react';
import Vote from '../Vote/Vote';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <p className="footer__reply">REPLY</p>
      <p className="footer__replies"><b>21 </b>REPLIES</p>
      <Vote upvote={true} />
      <Vote upvote={false} />
    </div>
  )
}

export default Footer;