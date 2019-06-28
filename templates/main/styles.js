/* stylelint-disable custom-property-empty-line-before */

import { css } from 'styled-components';

export default css`
  :root {
    ${'' /* Colors */}

    --red: #fc3b63;
    --orange: #fc6c24;
    --yellow: #fedb62;
    --green: #31cf65;
    --cyan: #22d0b2;
    --light-blue: #8cddfc;
    --blue: #2b9eeb;
    --dark-blue: #3776d9;
    --purple: #b770f9;

    --black: #121212;
    --grey-darker: #292929;
    --grey-dark: #4a4a4a;
    --grey: #7a7a7a;
    --grey-light: #b8b8b8;
    --grey-lighter: #e4e7ed;
    --white: #fff;

    --primary: var(--blue);
    --text-primary: var(--black);
    --text-secondary: var(--grey);
    --text-regular: var(--grey-dark);
    --text-placeholder: var(--grey-light);

    ${'' /* Defaults */}

    --slide-background: var(--white);
    --global-background: var(--black);

    ${'' /* Fonts */}

    --regular-font: 'Open Sans', sans-serif;
    --header-font: 'Open Sans Condensed', sans-serif;

    --normal: 400;
    --bold: 700;

    --size-xl: 96px;
    --size-lg: 80px;
    --size-md: 56px;
    --size-sm: 40px;
    --size-xs: 32px;
  }

  body {
    font-family: var(--regular-font);
    font-weight: var(--normal);
    font-size: var(--size-xs);
    line-height: 1.25;
    color: var(--text-regular);
  }

  p {
    font-family: var(--regular-font);
    font-weight: var(--normal);
    font-size: var(--size-sm);
    line-height: 1.25;
    color: var(--text-regular);

    + p {
      padding-top: 24px;
    }
  }

  h1 {
    font-family: var(--header-font);
    font-weight: var(--bold);
    font-size: var(--size-xl);
    line-height: 1;
    color: var(--text-primary);
  }

  h2 {
    font-family: var(--header-font);
    font-weight: var(--bold);
    font-size: var(--size-lg);
    line-height: 1;
    color: var(--text-primary);
  }

  h3 {
    font-family: var(--regular-font);
    font-weight: var(--bold);
    font-size: var(--size-md);
    line-height: 1.1;
    color: var(--text-secondary);
  }

  h4 {
    font-family: var(--regular-font);
    font-weight: var(--bold);
    font-size: var(--size-sm);
    line-height: 1.1;
    color: var(--text-primary);
  }

  html[data-theme="dark"] {
    --text-primary: var(--white);
    --text-secondary: var(--white);
    --text-regular:  var(--white);
    --text-placeholder:  var(--white);
    --slide-background: var(--black);
    --global-background: var(--grey-darker);
}

    html.theme-transition,
    html.theme-transition *,
    html.theme-transition *:before,
    html.theme-transition *:after {
      transition: background 750ms !important;
      transition-delay: 0 !important;
    }
`;
