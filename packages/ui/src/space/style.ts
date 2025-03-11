import styled from 'styled-components'
import { resetComponent } from '../_style'
import { getPrefix } from '../_utils/index'

export const SpaceStyle = styled.div`
    display: inline-flex;
    &.${() => `${getPrefix('space')}-rtl`} {
        direction: rtl;
    }
    &.${() => `${getPrefix('space')}-vertical`} {
        flex-direction: column;
    }
    &.${() => `${getPrefix('space')}-gap-col-small`} {
        column-gap: var(--l-padding-xs);
    }
    &.${() => `${getPrefix('space')}-gap-col-small`} {
        column-gap: var(--l-padding-xs);
    }
    &.${() => `${getPrefix('space')}-gap-row-small`} {
        row-gap: var(--l-padding-xs);
    }
    &.${() => `${getPrefix('space')}-gap-col-middle`} {
        column-gap: var(--l-padding-md);
    }
    &.${() => `${getPrefix('space')}-gap-row-middle`} {
        row-gap: var(--l-padding-md);
    }
    &.${() => `${getPrefix('space')}-gap-col-large`} {
        column-gap: var(--l-padding-lg);
    }
    &.${() => `${getPrefix('space')}-gap-row-large`} {
        row-gap: var(--l-padding-lg);
    }
    &.${() => `${getPrefix('space')}-align-center`} {
        align-items: center;
    }
    &.${() => `${getPrefix('space')}-align-start`} {
        align-items: flex-start;
    }
    &.${() => `${getPrefix('space')}-align-end`} {
        align-items: flex-end;
    }
    &.${() => `${getPrefix('space')}-align-baseline`} {
        align-items: baseline;
    }
`
