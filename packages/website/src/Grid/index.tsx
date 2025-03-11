import React from 'react'
import { Row, Col } from '@l/ui'

const AppDivider: React.FC = () => {
    const baseStyle: React.CSSProperties = {
        height: 20,
        fontSize: 12,
        lineHeight: '20px',
        textAlign: 'center',
        backgroundColor: '#f1f1f1'
    }
    return (
        <Row cols={5}>
            <Col style={baseStyle}>小林</Col>
            <Col style={baseStyle}>100</Col>
            <Col style={baseStyle}>200</Col>
            <Col style={baseStyle}>300</Col>
            <Col style={baseStyle}>400</Col>
        </Row>
    )
}

export default AppDivider
