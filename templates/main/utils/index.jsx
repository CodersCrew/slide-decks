let key = 0;
const getKey = () => {
  key += 1;
  return key;
};

const memoizedRenderContent = () => {
  const cache = {};
  return text => {
    if (text in cache) {
      return cache[text];
    }

    const result = text
      .trim()
      .split('\n')
      .map(text => <p key={getKey()}>{text.trim()}</p>);
    cache[text] = result;
    return result;
  };
};

export const renderContent = memoizedRenderContent();
