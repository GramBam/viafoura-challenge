import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Container.css';


function Container() {
  return (
    <div className="comment-box">
      <img src="https://picsum.photos/50/50" alt ="avatar" className="avatar"></img>
      <Header />
      <div className="comment-box__content">
        So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork.
      </div>
      <Footer />
    </div>
  )
}

export default Container;