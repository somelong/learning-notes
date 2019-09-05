import React from 'react';
import style from './index.less'

export default class Index extends React.PureComponent {
  render() {
    return (
      <div className={style.bruce}>
        <div className={style.fault_text} data-text="ERROR">ERROR</div>
      </div>
    )
  }
}