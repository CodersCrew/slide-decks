import styles from './styles';
import TitleSlide from './slides/TitleSlide';
import BigQuestion from './slides/BigQuestion';

export default {
  styles,
  defaults: {
    width: 1920,
    height: 1080,
  },
  slides: {
    title: TitleSlide,
    bigQuestion: BigQuestion,
  },
  head: [
    {
      key: '1',
      tag: 'link',
      attr: {
        href: 'https://fonts.googleapis.com/css?family=Montserrat:700|Raleway:400,700&amp;subset=latin-ext',
        rel: 'stylesheet',
      },
    },
    {
      key: '2',
      tag: 'title',
      content: 'My Next.js presentation',
    },
  ],
};
