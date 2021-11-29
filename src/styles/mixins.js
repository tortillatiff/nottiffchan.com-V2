import { css } from 'styled-components';

const priButton = css`
    font-weight: bold;
    border-radius: var(--br-sm);
    padding: 12px 28px;
    transition: var(--transition);
    border: none;
    background-color: var(--purple);
    color: white;
    box-shadow: 2px 3px #896C8B;
    cursor: pointer;

    &:hover, &:focus, &:active {
        background-color: #896C8B;
        box-shadow: none;
        outline: none;
    }
    &:after {
        display: none !important;
    }
`;

const secButton = css`
    font-weight: bold;
    border-radius: var(--br-sm);
    padding: 12px 28px;
    transition: var(--transition);
    color: var(--purple);
    border: 1px solid var(--purple);
    box-shadow: 2px 3px var(--purple);
    background-color: transparent;
    cursor: pointer;

    &:hover, &:focus, &:active {
        box-shadow: none;
        background-color: var(--purple);
        color: white;
        outline: none;
    }
    &:after {
        display: none !important;
    }
`;

const mixins = {
    flexCenter: css`
        display: flex;
        justify-content: center;
        align-items: center;
    `,

    flexBetween: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,
};

export default mixins;