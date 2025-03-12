import styled from 'styled-components'
import { getPrefix } from '../_utils/index'

const types = ['primary', 'success', 'warning', 'danger', 'info']

export const LinkStyle = styled.a`
    --l-link-text-color: var(--l-text-color-regular);
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    position: relative;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    font-size: var(--l-font-size-base);
    font-weight: var(--l-link-font-weight);
    color: var(--l-link-text-color);
    &:hover {
        color: var(--l-color-primary);
    }
    &.is-underline {
        &:after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            height: 0;
            bottom: 0;
            border-bottom: 1px solid var(--l-link-text-color);
        }
    }
    &.is-disabled {
        &,
        &:hover,
        &:focus {
            color: var(--l-link-disabled-font-color);
            cursor: not-allowed;
        }
    }
    & .l-icon {
        margin-right: 5px;
    }
    &.link--right .l-icon {
        margin-right: 0px;
        order: 2;
    }
    &.${props => `${getPrefix('divider')}-vertical`} {
    }
    &.${() => `${getPrefix('link')}--primary`} {
        --l-link-text-color: #ccc;
    }

    ${types.map(type => {
        return `
        &.${`link--${type}`} {
            --l-link-text-color: var(--l-color-${type});
            --l-link-hover-text-color: var(--l-color-${type}-light-3);
            --l-link-disabled-font-color: var(--l-color-${type}-light-5);
        }
    `
    })}
`
