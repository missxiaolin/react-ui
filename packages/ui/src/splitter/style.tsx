import styled from 'styled-components'
import { getPrefix } from '../_utils/index'
import { resetComponent } from '../_style'

const centerStyle = () => {
    return `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    `
}

export const SplitterStyle = styled.div`
    --l-splitter-split-bar-size: 2px;
    --l-splitter-split-trigger-size: 6px;
    --l-splitter-split-bar-draggable-size: 20px;
    --l-splitter-resize-spinner-size: 20px;
    --l-control-item-bg-hover: rgba(0, 0, 0, 0.04);
    ${resetComponent()}
    list-style: none;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: stretch;
    &.${() => `${getPrefix('splitter')}-horizontal`} {
        flex-direction: row;
    }
    & .${() => `${getPrefix('splitter')}-bar`} {
        cursor: col-resize;
        height: 100%;
        width: var(--l-splitter-split-trigger-size);
        position: relative;
        user-select: none;
        box-sizing: border-box;
        & .${() => `${getPrefix('splitter')}-bar-dragger`} {
            ${centerStyle()}
            cursor: col-resize;
            height: 100%;
            width: 6px;
            z-index: 1;
            &::before {
                width: 2px;
                height: 100%;
                content: '';
                background: var(--l-control-item-bg-hover);
                ${centerStyle()}
            }
            &::after {
                width: 2px;
                height: 20px;
                content: '';
                background: rgba(0, 0, 0, 0.15);
                ${centerStyle()}
            }
        }
    }
`
