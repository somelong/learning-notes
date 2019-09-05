import React from 'react';
import style from './index.less'

export default class Index extends React.PureComponent {
  render() {
    return (
      <div className={style.bruce}>
        <ul className={style.bubble_bgwall}>
          <li>Love</li>
          <li>Love</li>
          <li>Love</li>
          <li>Love</li>
          <li>Love</li>
          <li>Love</li>
          <li>Love</li>
          <li>Love</li>
          <li>Love</li>
          <li>Love</li>
        </ul>
      </div>
    )
  }
}