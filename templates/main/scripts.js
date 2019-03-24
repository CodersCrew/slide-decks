const code = 'theme';
const pressed = [];
const theme = {
  light: {
    'text-primary': 'black',
    'text-secondary': 'grey',
    'text-regular': 'grey-dark',
    'text-placeholder': 'grey-light',
    'slide-background': 'white',
    'global-background': 'black',
  },
  dark: {
    'text-primary': 'white',
    'text-secondary': 'white',
    'text-regular': 'white',
    'text-placeholder': 'white',
    'slide-background': 'black',
    'global-background': 'grey-darker',
  },
};

let selectedTheme = 'light';

const handleKeyPress = e => {
  pressed.push(e.key);
  pressed.splice(-code.length - 1, pressed.length - code.length);

  if (pressed.join('').includes(code)) {
    const newTheme = selectedTheme === 'light' ? theme.dark : theme.light;
    selectedTheme = selectedTheme === 'light' ? 'dark' : 'light';

    Object.keys(newTheme).map(key => {
      document.documentElement.style.setProperty(`--${key}`, `var(--${newTheme[key]})`);
      return null;
    });
  }
};

const onInit = () => {
  window.addEventListener('keypress', handleKeyPress);
};

const onDestroy = () => {
  window.removeEventListener('keypress', handleKeyPress);
};

export default {
  onInit,
  onDestroy,
};
