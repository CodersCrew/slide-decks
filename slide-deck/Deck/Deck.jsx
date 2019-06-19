import { withRouter } from 'next/router';
import { Component } from 'react';
import { number, oneOfType, exact, string, shape, oneOf, object, arrayOf, objectOf, func } from 'prop-types';
import GlobalStyle from '../GlobalStyle';
import Slide from '../Slide';
import { nextSlide, prevSlide, handleArrowPress } from './slides-methods';
import { renderHead } from './renderers';
import { ProgressBar } from '../../templates/main/components';
import { nextStep, prevStep } from '../../templates/main/components/ProgressBar';
import { updateURL, checkForStateChange, checkForNewAnimation, addKeysToSlides, getScale } from './utils';
import { Container } from './styles';

import '../../style/main.scss';

const types = ['prev', 'curr', 'next'];

@withRouter
class Deck extends Component {
  constructor(props) {
    super(props);
    const { router, config, template } = props;

    this.state = {
      slideIndex: Number(router.query.slide) || 0,
      scale: 0,
      animation: null,
      percentage: Number(router.query.slide)/17*100,
    };

    this.slides = addKeysToSlides(config.slides);
    this.slidesCount = this.slides.length;
    this.template = template;
    this.head = renderHead(this.template.head);

    this.nextSlide = nextSlide.bind(this);
    this.prevSlide = prevSlide.bind(this);
    this.handleArrowPress = handleArrowPress.bind(this);

    this.nextStep = nextStep.bind(this);
    this.prevStep = prevStep.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleArrowPress);
    window.addEventListener('resize', this.handleScaleChange);
    window.addEventListener('keydown', this.nextStep);
    window.addEventListener('keydown', this.prevStep);

    if (this.template.scripts.onInit) {
      this.template.scripts.onInit(this);
    }

    this.handleScaleChange({ currentTarget: window });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return checkForStateChange(this.state, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    updateURL(prevState, this.state, this.props.router);
    checkForNewAnimation(prevState, this.state, () => this.setState({ animation: null }));
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleArrowPress);
    window.removeEventListener('resize', this.handleScaleChange);

    if (this.template.scripts.onDestroy) {
      this.template.scripts.onDestroy(this);
    }
  }

  handleScaleChange = e => this.setState({ scale: getScale(e, this.template) });

  renderSlide = slide => {
    const { slideIndex, animation } = this.state;
    const visibleSlides = [slideIndex - 1, slideIndex, slideIndex + 1];

    if (visibleSlides.includes(slide.key)) {
      const type = types[visibleSlides.indexOf(slide.key)];
      return (
        <Slide
          template={this.template.slides}
          animation={animation}
          visible={slide.key === slideIndex}
          key={slide.key}
          type={type}
          data={slide}
        />
      );
    }
    return null;
  };

  render() {
    const { scale, percentage } = this.state;
    const { width, height } = this.template.globals;

    console.log(this.state.slideIndex);

    return (
      <>
        {this.head}
        <GlobalStyle templateStyle={this.template.styles} />
        <Container width={width} height={height} scale={scale}>
          {this.slides.map(this.renderSlide)}
          <ProgressBar percentage={percentage} />
        </Container>
      </>
    );
  }
}

Deck.propTypes = {
  router: object,
  config: exact({
    slides: arrayOf(
      shape({
        animation: exact({
          type: oneOf(['horizontal', 'vertical']),
        }),
        content: object,
        template: string,
      }),
    ),
  }),
  template: shape({
    globals: exact({
      width: number,
      height: number,
    }),
    head: arrayOf(
      exact({
        key: oneOfType([string, number]),
        tag: string,
        content: string,
        attr: objectOf(string),
      }),
    ),
    slides: objectOf(func),
    styles: arrayOf(string),
  }),
};

export default Deck;
