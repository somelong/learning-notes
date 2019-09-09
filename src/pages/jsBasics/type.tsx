import React, { PureComponent } from 'react';
import { Card, Row, Col } from 'antd'
import styles from './index.less'

class JsType extends PureComponent {
  render() {
    return (<>

      <Row>
        <Col span={19} className={styles.padding_12}>
          <Card
            title="javaScript变量和类型"
            extra={<a href="#">More</a>}
            bordered={false}>
              <h2>一、基础数据类型</h2>
              <p>1. String</p>
              <p>2. Number</p>
              <p>3. Arry</p>
              <p>4. null</p>
              <p>5. undefind</p>
              <p>6. undefind</p>
              <h2>一、引用数据类型</h2>
              <p>3. Arry</p>
              <p>6. object</p>
              <h2>三、es6新增数据类型</h2>
              <p>1. Symbol</p>
            </Card>
        </Col>
        <Col span={5}>
          <Card
            title="javaScript变量和类型"
            extra={<a href="#">More</a>}
            bordered={false}>
            这边是文章的大概列表
            <p>这个是用来测试合并代码的</p>
            <p>这个是用来测试合并代码的</p>
            <p>这个是用来测试合并代码的</p>
            <p>这个是用来测试合并代码的</p>
            <p>这个是用来测试合并代码的</p>
            <p>这个是用来测试合并代码的</p>
            <p>这个是用来测试合并代码的</p>
            <p>这个是用来测试合并代码的</p>
            <p>这个是用来测试合并代码的</p>
            </Card>
        </Col>
      </Row>
    </>)
  }
}

export default JsType;