export const updateURL = (prevState, state, router) => {
  if (prevState.slideIndex !== state.slideIndex) {
    router.replace(`${router.pathname}?slide=${state.slideIndex}`);
  }
};

export const checkForStateChange = (currState, nextState) => {
  const index = currState.slideIndex !== nextState.slideIndex;
  const scale = currState.scale !== nextState.scale;
  const animation = currState.animation !== nextState.animation;
  return scale || index || animation;
};

export const checkForNewAnimation = (prevState, currState, callback) => {
  if (!prevState.animation && currState.animation) {
    window.setTimeout(callback, 2000);
  }
};

export const addKeysToSlides = slides => slides.map((slide, i) => ({ ...slide, key: i }));

export const getScale = ({ currentTarget: { innerWidth, innerHeight } }, template) => {
  const { width, height } = template.globals;
  const scaleX = innerWidth / width;
  const scaleY = innerHeight / height;
  return Math.min(scaleX, scaleY);
};
