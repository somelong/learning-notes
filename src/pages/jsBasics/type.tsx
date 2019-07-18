import React, { PureComponent } from 'react';
import { Card, Row, Col } from 'antd'
import styles from './index.scss'

class JsType extends PureComponent {
  render() {
    return (<>

      <Row>
        <Col span={19} className={styles.padding_12}>
          <Card
            title="javaScript变量和类型"
            extra={<a href="#">More</a>}
            bordered={false}>
            这边是文章的主要内容
            </Card>
        </Col>
        <Col span={5}>
          <Card
            title="javaScript变量和类型"
            extra={<a href="#">More</a>}
            bordered={false}>
            这边是文章的大概列表
            </Card>
        </Col>
      </Row>
    </>)
  }
}

export default JsType;