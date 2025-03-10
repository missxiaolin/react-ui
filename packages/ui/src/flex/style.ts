import styled from 'styled-components'
import { resetComponent } from '../_style'
import { FlexProps } from './interface'
import { getPrefix } from '../_utils/index'
export const justifyOptions: string[] = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']
export const alignOptions = ['flex-start', 'center', 'flex-end']

export const FlexStyle = styled.div`
    ${resetComponent()};
    display: flex;
    margin: 0;
    padding: 0;
    &.${() => `${getPrefix('flex')}-vertical`} {
        flex-direction: column;
    }
    &.${() => `${getPrefix('flex')}-justify-flex-start`} {
        justify-content: flex-start;
    }
    &.${() => `${getPrefix('flex')}-justify-center`} {
        justify-content: center;
    }
    &.${() => `${getPrefix('flex')}-justify-flex-end`} {
        justify-content: flex-end;
    }
    &.${() => `${getPrefix('flex')}-justify-space-between`} {
        justify-content: space-between;
    }
    &.${() => `${getPrefix('flex')}-justify-space-around`} {
        justify-content: space-around;
    }
    &.${() => `${getPrefix('flex')}-justify-space-evenly`} {
        justify-content: space-evenly;
    }
    &.${() => `${getPrefix('flex')}-align-flex-start`} {
        align-items: flex-start;
    }
    &.${() => `${getPrefix('flex')}-align-center`} {
        align-items: center;
    }
    &.${() => `${getPrefix('flex')}-align-flex-end`} {
        align-items: flex-end;
    }
    &.${() => `${getPrefix('flex')}-wrap`} {
        flex-wrap: wrap;
    }
`
