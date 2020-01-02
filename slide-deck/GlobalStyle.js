import { createGlobalStyle, keyframes } from 'styled-components';

const enterLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const enterRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const leaveLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const leaveRight = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

const enterTop = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const enterBottom = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const leaveTop = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const leaveBottom = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  div {
    box-sizing: border-box;
  }

  #__next {
    background-color: var(--global-background);
    max-width: 100vw;
    max-height: 100vh;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .slide-prev {
    z-index: 0;
    opacity: 0;
  }

  .slide-curr {
    z-index: 1;
    opacity: 1;
  }

  .slide-next {
    z-index: 0;
    opacity: 0;
  }

  .animated {
    &.animation-horizontal {
      &.direction-next {
        &.slide-prev {
          animation-name: ${leaveLeft};
          opacity: 1;
        }

        &.slide-curr {
          animation-name: ${enterRight};
        }
      }

      &.direction-prev {
        &.slide-curr {
          animation-name: ${enterLeft};
        }

        &.slide-next {
          animation-name: ${leaveRight};
          opacity: 1;
        }
      }
    }

    &.animation-vertical {
      &.direction-next {
        &.slide-prev {
          animation-name: ${leaveTop};
          opacity: 1;
        }

        &.slide-curr {
          animation-name: ${enterBottom};
        }
      }

      &.direction-prev {
        &.slide-curr {
          animation-name: ${enterTop};
        }

        &.slide-next {
          animation-name: ${leaveBottom};
          opacity: 1;
        }
      }
    }
  }

  ${props => props.templateStyle}
`;

export default GlobalStyle;
