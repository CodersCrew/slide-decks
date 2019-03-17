import Head from 'next/head';

export const renderHead = head => {
  if (head && head.length) {
    return (
      <Head>
        {head.map(({ key, tag, attr = {}, content = null }) => {
          return React.createElement(tag, { key, ...attr }, content);
        })}
      </Head>
    );
  }

  return null;
};
