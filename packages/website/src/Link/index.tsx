import React from 'react'
import { Link, Row, Col } from '@l/ui'

const App: React.FC = () => {
    return (
        <Row cols={6}>
            <Col>
                <Link href="https://www.baidu.com" target={'_blank'} icon={'l-jinggao1'} iconOrientation={'right'}>
                    百度
                </Link>
            </Col>
            <Col>
                <Link href="https://www.baidu.com" target={'_blank'} type="primary">
                    百度
                </Link>
            </Col>
            <Col>
                <Link href="https://www.baidu.com" target={'_blank'} type="success">
                    百度
                </Link>
            </Col>
            <Col>
                <Link href="https://www.baidu.com" target={'_blank'} type="warning">
                    百度
                </Link>
            </Col>
            <Col>
                <Link href="https://www.baidu.com" target={'_blank'} type="danger">
                    百度
                </Link>
            </Col>
            <Col>
                <Link href="https://www.baidu.com" target={'_blank'} type="info">
                    百度
                </Link>
            </Col>
        </Row>
    )
}

export default App
