import React from 'react'
import { Container, Aside, Header, Footer, Main } from '@l/ui'

const headerStyle: React.CSSProperties = {
    background: '#b3c0d1',
    color: '#333',
    textAlign: 'center',
    lineHeight: '30px'
}

const mainStyle: React.CSSProperties = {
    background: '#e9eef3',
    color: '#333',
    textAlign: 'center',
    lineHeight: '160px'
}

const footerStyle: React.CSSProperties = {
    background: '#b3c0d1',
    color: '#333',
    textAlign: 'center',
    lineHeight: '50px'
}
const asideStyle: React.CSSProperties = {
    background: '#d3dce6',
    color: '#333'
}

const AppDivider: React.FC = () => {
    return (
        <>
            <div>
                <Container style={{ paddingBottom: '20px' }}>
                    <Header style={{ ...headerStyle }}>Header</Header>
                    <Main style={{ ...mainStyle }}>main</Main>
                </Container>

                <Container style={{ paddingBottom: '20px' }}>
                    <Header style={{ ...headerStyle }}>Header</Header>
                    <Main style={{ ...mainStyle }}>Main</Main>
                    <Footer style={footerStyle}>Footer</Footer>
                </Container>
                <Container direction={'horizontal'} style={{ paddingBottom: '20px' }}>
                    <Aside style={asideStyle}>aside</Aside>
                    <Main style={{ ...mainStyle }}>main</Main>
                </Container>
                <Container style={{ paddingBottom: '20px' }}>
                    <Header style={{ ...headerStyle }}>Header</Header>
                    <Container direction={'horizontal'}>
                        <Aside style={asideStyle}>aside</Aside>
                        <Main style={{ ...mainStyle }}>main</Main>
                    </Container>
                </Container>
                <Container style={{ paddingBottom: '20px' }}>
                    <Header style={{ ...headerStyle }}>Header</Header>
                    <Container direction={'horizontal'}>
                        <Aside style={asideStyle}>aside</Aside>
                        <Container>
                            <Main style={{ ...mainStyle }}>main</Main>
                            <Footer style={footerStyle}>Footer</Footer>
                        </Container>
                    </Container>
                </Container>
            </div>
        </>
    )
}

export default AppDivider
