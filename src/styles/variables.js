import { css } from 'styled-components';

const variables = css`
    :root {
        --green: #4C8E96;
        --black: #313B3B;
        --purple: #5F3962;
        --pink: #F59393;
        --pink-light: #F7CDC4;
        --pink-dark: #FA9293;
        --gold: #E69F22;
        --grey: #8E8D89;
        --yellow: #F5D5A4;
        --bg-color: #FDF9F7;
      
        --text-display: 4.2rem;
        --text-h1: 54px; 
        --text-h2: 36px;
        --text-h3: 24px;
        --text-body: 18px;
        --text-xs: 18px;
      
        --br-lg: 30px;
        --br-md: 20px;
        --br-sm: 10px;
      
        --font-family-sans-serif: 'AirbnbCereal', -apple-system, sans-serif,"Apple Color Emoji";
        --font-family-monospace: 'Ubuntu Mono', SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
      
        --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
        --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
`;

export default variables;