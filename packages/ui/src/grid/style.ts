import styled from 'styled-components'
import { resetComponent } from '../_style'
import { getPrefix } from '../_utils/index'

export const RowStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    width: 100%;
    &.l-flex-1 {
        flex: 1;
    }
    &.is-flex-column {
        flex-direction: column;
    }
    @media screen and (max-width: 768px) {
        width: 100% !important;
        flex-direction: column;
    }
`

export const ColStyle = styled.div`
    --l-col-gutter-width: 6px;
    --l-rows-grid: 5;
    --l-col-flex: 1;
    --l-col-label-width: 70px; // TODO: 动态计算
    display: flex;
    position: relative;
    align-items: baseline;
    margin: var(--l-col-gutter-width);
    position: relative;
    width: calc(((100% / var(--l-rows-grid)) * var(--l-col-flex)) - (var(--l-col-gutter-width) * 2));
    @media screen and (max-width: 1024px) {
        width: 50%;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    @media screen and (max-width: 568px) {
        &.is-col-wap-label-column {
            flex-direction: column;
        }
    }
`
