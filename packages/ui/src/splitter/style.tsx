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
    --l-control-item-bg-active-hover: #bae0ff;
    ${resetComponent()}
    list-style: none;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: stretch;
    &.${() => `${getPrefix('splitter')}-horizontal`} {
        flex-direction: row;
        & .${() => `${getPrefix('splitter')}-bar`} {
            cursor: col-resize;
            height: 100%;
            width: var(--l-splitter-split-trigger-size);
            position: relative;
            user-select: none;
            box-sizing: border-box;
            & .${() => `${getPrefix('splitter')}-bar-dragger-active`} {
                &::before {
                    background-color: var(--l-control-item-bg-active-hover) !important;
                }
            }
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
            & .${() => `${getPrefix('splitter')}-bar-collapse-bar-start`} {
                width: 12px;
                height: 24px;
                left: auto;
                right: calc(var(--l-splitter-split-trigger-size) / 2);
                transform: translateY(-50%);
            }
            & .${() => `${getPrefix('splitter')}-bar-collapse-bar-end`} {
                width: 12px;
                height: 24px;
                left: calc(var(--l-splitter-split-trigger-size) / 2);
                right: auto;
                transform: translateY(-50%);
            }
        }
    }
    &.${() => `${getPrefix('splitter')}-vertical`} {
        flex-direction: column;
        & .${() => `${getPrefix('splitter')}-bar-dragger-active`} {
            &::before {
                background-color: var(--l-control-item-bg-active-hover) !important;
            }
        }
        & .${() => `${getPrefix('splitter')}-bar`} {
            cursor: row-resize;
            width: 100%;
            height: var(--l-splitter-split-trigger-size);
            position: relative;
            user-select: none;
            box-sizing: border-box;
            & .${() => `${getPrefix('splitter')}-bar-dragger`} {
                ${centerStyle()}
                cursor: row-resize;
                height: 6px;
                width: 100%;
                z-index: 1;
                &::before {
                    width: 100%;
                    height: 2px;
                    content: '';
                    background: var(--l-control-item-bg-hover);
                    ${centerStyle()}
                }
                &::after {
                    width: 20px;
                    height: 2px;
                    content: '';
                    background: rgba(0, 0, 0, 0.15);
                    ${centerStyle()}
                }
            }
        }
        & .${() => `${getPrefix('splitter')}-bar-collapse-bar`} {
            height: 12px;
            width: 24px;
        }
        & .${() => `${getPrefix('splitter')}-bar-collapse-bar-start`} {
            top: auto;
            bottom: calc(var(--l-splitter-split-trigger-size) / 2);
            transform: translateX(-50%);
        }
        & .${() => `${getPrefix('splitter')}-bar-collapse-bar-end`} {
            top: calc(var(--l-splitter-split-trigger-size) / 2);
            bottom: auto;
            transform: translateX(-50%);
        }
    }

    & .${() => `${getPrefix('splitter')}-bar`} {
        &:hover {
            .${() => `${getPrefix('splitter')}-bar-collapse-bar`} {
                opacity: 1;
            }
        }
    }

    & .${() => `${getPrefix('splitter')}-bar-collapse-bar`} {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        background: rgba(0, 0, 0, 0.04);
        font-size: 12px;
        border-radius: 2px;
        color: rgba(0, 0, 0, 0.88);
        cursor: pointer;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    & .l-splitter-panel-hidden {
        padding: 0;
        overflow: hidden;
    }
`
