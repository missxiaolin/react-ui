import styled from 'styled-components'
import { getPrefix } from '../_utils/index'

export const ContainerStyle = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
    &.is-vertical {
        flex-direction: column;
    }
`

export const HeaderStyle = styled.div`
    box-sizing: border-box;
    width: 100%;
    box-sizing: border-box;
    flex-shrink: 0;
`

export const MainStyle = styled.div`
    display: block;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
`

export const FooterStyle = styled.div`
    padding: var(--l-footer-padding);
    box-sizing: border-box;
    flex-shrink: 0;
    height: var(--l-footer-height);
`

export const AsideStyle = styled.div`
    overflow: auto;
    box-sizing: border-box;
    flex-shrink: 0;
`
