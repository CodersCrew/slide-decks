import styles from './styles';
import scripts from './scripts';
import slides from './slides';

export default {
  globals: {
    width: 1920,
    height: 1080,
  },
  styles,
  scripts,
  head: [
    {
      key: '1',
      tag: 'link',
      attr: {
        href: 'https://fonts.googleapis.com/css?family=Open+Sans+Condensed:700|Open+Sans:400,700&amp;subset=latin-ext',
        rel: 'stylesheet',
      },
    },
    {
      key: '2',
      tag: 'title',
      content: 'My Next.js presentation',
    },
  ],
  slides,
};
