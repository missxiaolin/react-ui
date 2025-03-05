import React from 'react'
import { createFromIconFontCN } from '@l/ui'

const MyIcon = createFromIconFontCN({
    // 在 iconFont.cn 上生成
    scriptUrl: '//at.alicdn.com/t/c/font_4054851_le4r49cthb.js'
})

// import ReactDOM from 'react-dom/client';
// ReactDOM.createRoot(mountNode).render(<MyIcon type="icon-example" />);

const CheckboxApp: React.FC = () => <MyIcon type="l-suoxiao2" />

export default CheckboxApp
