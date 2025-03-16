import styled from 'styled-components'
import { getPrefix } from '../_utils/index'

export const BackTopStyle = styled.div`
    --l-backtop-bg-color: var(--l-color-white);
    --l-backtop-text-color: var(--l-color-primary);
    --l-backtop-hover-bg-color: var(--l-border-color-extra-light);
    width: 0;
    height: 0;
    & .${() => `${getPrefix('backtop')}__fixed`} {
        position: fixed;
        background-color: var(--l-backtop-bg-color);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: var(--l-backtop-text-color);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
        cursor: pointer;
        z-index: 5;
        &:hover {
            background-color: var(--l-backtop-hover-bg-color);
        }
    }
    & .l-icon {
        font-size: 20px;
    }
`
