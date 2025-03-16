import styled from 'styled-components'
import { getPrefix } from '../_utils/index'

export const StickyStyle = styled.div`
    & .${() => `${getPrefix('sticky')}--fixed`} {
        position: fixed;
    }
`
