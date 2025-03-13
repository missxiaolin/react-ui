import React from 'react'
import { Link, Row, Col, Ellipsis } from '@l/ui'

const App: React.FC = () => {
    const [content, setContent] = React.useState(
        'React 让你可以通过组件来构建用户界面。你可以创建像 Thumbnail、LikeButton 和 Video 这样的组件。然后将它们组合成整个应用程序。无论你是独自工作还是与成千上万的其他开发人员合作，使用 React 的感觉都是相同的。它旨在让你轻松地组合由独立开发者、团队或组织编写的组件。'
    )

    React.useEffect(() => {
        //
    }, [content])

    return (
        <div style={{ fontSize: '14px' }}>
            <Ellipsis content={content}></Ellipsis>
        </div>
    )
}

export default App
