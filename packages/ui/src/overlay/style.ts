import styled from 'styled-components'
import { getPrefix } from '../_utils/index'

export const OverlayStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--l-overlay-background-color);
    &.is-model {
        background: none !important;
    }
    &.overlay-fade-enter-active,
    &.overlay-fade-leave-active {
        transition-property: opacity;
        transition-timing-function: ease;
    }

    &.overlay-fade-enter-from,
    &.overlay-fade-leave-to {
        opacity: 0;
    }
`
