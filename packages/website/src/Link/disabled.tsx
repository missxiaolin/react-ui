import React from 'react'
import { Link, Row, Col } from '@l/ui'

const App: React.FC = () => {
    return (
        <Row cols={6}>
            <Col>
                <Link href="https://www.baidu.com" target={'_blank'} disabled>
                    百度
                </Link>
            </Col>
            <Col>
                <Link href="https://www.baidu.com" target={'_blank'} type="primary" disabled>
                    百度
                </Link>
            </Col>
            <Col>
                <Link href="https://www.baidu.com" target={'_blank'} type="success" disabled>
                    百度
                </Link>
            </Col>
            <Col>
                <Link href="https://www.baidu.com" target={'_blank'} type="warning" disabled>
                    百度
                </Link>
            </Col>
            <Col>
                <Link href="https://www.baidu.com" target={'_blank'} type="danger" disabled>
                    百度
                </Link>
            </Col>
            <Col>
                <Link href="https://www.baidu.com" target={'_blank'} type="info" disabled>
                    百度
                </Link>
            </Col>
        </Row>
    )
}

export default App
