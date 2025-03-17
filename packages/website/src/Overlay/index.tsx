import React from 'react'
import { Overlay } from '@l/ui'

const App: React.FC = () => {
    const [visible, setVisible] = React.useState(false)
    const [lockScroll, setLockScroll] = React.useState(true)
    return (
        <div>
            <button onClick={() => setVisible(!visible)}>显示遮罩层</button>
            <button onClick={() => setLockScroll(!lockScroll)}>是否可以滚动-{lockScroll ? '是' : '否'}</button>
            <Overlay visible={visible} onClose={() => setVisible(false)} lockScroll={lockScroll}></Overlay>
        </div>
    )
}

export default App
