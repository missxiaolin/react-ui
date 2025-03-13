import styled from 'styled-components'
import { getPrefix } from '../_utils/index'

export const WatermarkStyle = styled.div`
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    pointer-events: none;
    background-repeat: repeat;
    &.${() => `${getPrefix('watermark')}__full-page`} {
        position: fixed;
    }
`
