import { css } from 'styled-components';

export default css`
  :root {
    ${'' /* Colors */}

    --primary: #1265b1;
    --text-primary: #292929;
    --text-secondary: #969696;
    --white: #fff;
    --slide-background: #f7f7f7;
    --global-background: #111;

    ${'' /* Fonts */}

    --default-font: 'Raleway', sans-serif;
    --header-font: 'Montserrat', sans-serif;
    --normal: 300;
    --bold: 700;
  }

  body {
    font-family: var(--default-font);
    font-size: 40px;
    color: var(--text-secondary);
    font-weight: var(--normal);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--header-font);
    color: var(--text-primary);
    font-weight: var(--bold);
  }

  h1 {
    font-size: 120px;
    line-height: 1.2;
  }
`;
