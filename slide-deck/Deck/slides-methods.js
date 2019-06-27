export function nextSlide() {
  const { slideIndex } = this.state;
  if(slideIndex !== this.slidesCount - 1){
  this.setState(state => ({
    slideIndex: state.slideIndex + 1,
    animation: { direction: 'next', type: this.slides.find(({ key }) => key === state.slideIndex).animation.type },
    percentage: this.state.percentage + (1/(this.slidesCount-1))*100
  }))}
}

export function prevSlide() {
  const { slideIndex } = this.state;
  if(slideIndex !== 0){
  this.setState(state => ({
    slideIndex: state.slideIndex - 1,
    animation: {
      direction: 'prev',
      type: this.slides.find(({ key }) => key === state.slideIndex - 1).animation.type,
    },
    percentage: this.state.percentage - (1/(this.slidesCount-1))*100,
  }));
}
}

export function handleArrowPress({ keyCode }) {
  const { slideIndex } = this.state;
  if (keyCode === 37 && slideIndex !== 0) {
    this.prevSlide();
  } else if (keyCode === 39 && slideIndex !== this.slidesCount - 1) {
    this.nextSlide();
  }
};
