import styled from 'styled-components'
import { getPrefix } from '../_utils/index'

export const TagStyle = styled.div`
    --l-tag-bg-color: #eaf9f9;
    --l-tag-text-color: #29c1c2;
    --l-tag-border-color: #94e0e1;
    --l-tag-hover-color: #29c1c2;
    --l-tag-radius: 4px;
    display: inline-block;
    box-sizing: border-box;
    vertical-align: middle;
    border-radius: var(--l-tag-radius);
    border: 1px solid;
    color: var(--l-tag-text-color);
    border-color: transparent;
    background-color: var(--l-tag-bg-color);
    & + .${() => `${getPrefix('tag')}`} {
        margin-left: 8px;
    }
`
