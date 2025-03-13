import styled from 'styled-components'
import { getPrefix } from '../_utils/index'

export const EmptyStyle = styled.div`
    --l-empty-padding: 40px 0;
    --l-empty-image-width: 160px;
    --l-empty-description-margin-top: 20px;
    --l-empty-bottom-margin-top: 20px;
    --l-empty-fill-color-1: #fcfcfd;
    --l-empty-fill-color-2: #f8f9fb;
    --l-empty-fill-color-3: #f7f8fc;
    --l-empty-fill-color-4: #eeeff3;
    --l-empty-fill-color-5: #edeef2;
    --l-empty-fill-color-6: #e9ebef;
    --l-empty-fill-color-7: #e5e7e9;
    --l-empty-fill-color-8: #e0e3e9;
    --l-empty-fill-color-9: #d5d7de;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    box-sizing: border-box;
    padding: var(--l-empty-padding);
    & .${() => `${getPrefix('empty')}__image`} {
        width: var(--l-empty-image-width);
        img {
            user-select: none;
            width: 100%;
            height: 100%;
            vertical-align: top;
            object-fit: contain;
        }
    }
    & .${() => `${getPrefix('empty')}__description`} {
        margin-top: 20px;

        p {
            margin: 0;
            font-size: var(--l-font-size-base);
            color: var(--l-text-color-secondary);
        }
    }
    & .${() => `${getPrefix('empty')}__bottom`} {
        margin-top: var(--l-empty-bottom-margin-top);
    }
`
