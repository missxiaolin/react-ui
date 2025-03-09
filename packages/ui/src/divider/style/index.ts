import styled from 'styled-components'
import { resetComponent } from '../../_style'
import { getPrefix } from '../../_utils/index'

export const DividerStyle = styled.div`
    ${resetComponent()};
    position: relative;
    &.${props => `${getPrefix('divider')}-horizontal`} {
        display: block;
        height: 1px;
        width: 100%;
        margin: 24px 0;
        border-top: 1px var(--l-border-color-base) var(--l-border-style-base);
    }
    &.${props => `${getPrefix('divider')}-vertical`} {
        display: inline-block;
        width: 1px;
        height: 1em;
        margin: 0 8px;
        vertical-align: middle;
        position: relative;
        border-left: 1px var(--l-border-color-base) var(--l-border-style-base);
    }

    &.${props => `${getPrefix('divider')}-dashed`} {
        border-style: dashed;
    }
    & .${props => `${getPrefix('divider')}-inner-text`} {
        position: absolute;
        background-color: var(--l-color-white);
        padding: 0 20px;
        font-weight: 500;
        color: var(--l-text-color-primary);
        font-size: 14px;
    }
    & .${props => `${getPrefix('divider')}-inner-text-center`} {
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    .${props => `${getPrefix('divider')}-inner-text-left`} {
        left: 20px;
        transform: translateY(-50%);
    }
    .${props => `${getPrefix('divider')}-inner-text-right`} {
        right: 20px;
        transform: translateY(-50%);
    }
`
