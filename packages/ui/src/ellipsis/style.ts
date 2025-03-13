import styled from 'styled-components'
import { getPrefix } from '../_utils/index'

export const EllipsisStyle = styled.div`
    line-height: var(--l-text-ellipsis-line-height);
    white-space: pre-wrap;
    word-break: break-word;
    & .l-ellipsis-span {
        cursor: pointer;
        color: var(--l-color-primary);

        &:active {
            opacity: var(--l-active-opacity);
        }
    }
`
