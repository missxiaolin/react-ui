import React from 'react'
import { createFromIconFontCN, Row, Col } from '@l/ui'
import { iconArr } from './index'

const MyIcon = createFromIconFontCN({
    // 在 iconFont.cn 上生成
    scriptUrl: '//at.alicdn.com/t/c/font_4054851_le4r49cthb.js'
})

// import ReactDOM from 'react-dom/client';
// ReactDOM.createRoot(mountNode).render(<MyIcon type="icon-example" />);

const Icon: React.FC = () => {
    return (
        <Row cols={6} gutter={5}>
            {iconArr.map(item => (
                <Col
                    key={item.font_class}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        padding: '20px 15px 20px 15px'
                    }}
                >
                    <MyIcon type={`l-${item.font_class}`}></MyIcon>
                    <div
                        className="icon-class"
                        style={{
                            display: 'block',
                            color: 'var(--l-text-color-secondary)',
                            paddingTop: '5px',
                            maxWidth: '100%',
                            overflow: 'hidden',
                            fontSize: '12px',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis'
                        }}
                    >
                        l-{item.font_class}
                    </div>
                </Col>
            ))}
        </Row>
    )
}

export default Icon
