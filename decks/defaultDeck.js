import { css } from 'styled-components';

const timelineNoContent = css`
  > .content {
    color: transparent;
  }
`;

const code = `
const Code = ({ title, content, code, styles }) => (
  <Container styles={styles} className="code">
    <BoxHeading align="center" title={title} content={content}>
      <CodeHighlighter language="javascript" style={atomDark}>
        {code}
      </CodeHighlighter>
    </BoxHeading>
  </Container>
);
`;

export default {
  slides: [
    {
      template: 'Title',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: '/static/react.png',
        title: 'Presentation title',
        subtitle: 'Some longer presentation subtitle',
      },
    },
    {
      template: 'ImageDescription',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: 'https://images.unsplash.com/photo-1553029230-2be4f5c23de8?w=600&q=80',
        title: 'Slide title',
        content: `
          Vivamus ac risus eget orci mollis sodales. Praesent faucibus accumsan risus. Etiam semper orci id tellus dignissim pretium.

          Praesent laoreet nibh quis semper rutrum. Nulla quis lorem sit amet magna ultrices tempus.
        `,
      },
    },
    {
      template: 'ImageDescription2',
      animation: {
        type: 'horizontal',
      },
      content: {
        image: 'https://images.unsplash.com/photo-1548407260-da850faa41e3?w=600&q=80',
        title: 'Slide title',
        content: `
          Vivamus ac risus eget orci mollis sodales. Praesent faucibus accumsan risus. Etiam semper orci id tellus dignissim pretium.

          Praesent laoreet nibh quis semper rutrum. Nulla quis lorem sit amet magna ultrices tempus.
        `,
      },
    },
    {
      template: 'Services',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Slide title',
        content:
          'Maecenas vulputate ac elit vel blandit. Morbi vulputate elit purus, vitae mattis urna tristique quis. Morbi ac cursus justo.',
        items: [
          {
            icon: '/static/icons/light/calendar-alt.svg',
            title: 'Service name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            icon: '/static/icons/light/comments.svg',
            title: 'Service name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            icon: '/static/icons/light/gem.svg',
            title: 'Service name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            icon: '/static/icons/light/hourglass-half.svg',
            title: 'Service name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            icon: '/static/icons/light/paper-plane.svg',
            title: 'Service name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            icon: '/static/icons/light/star.svg',
            title: 'Service name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
        ],
      },
    },
    {
      template: 'Services2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Slide title',
        content:
          'Maecenas vulputate ac elit vel blandit. Morbi vulputate elit purus, vitae mattis urna tristique quis. Morbi ac cursus justo.',
        items: [
          {
            icon: '/static/icons/light/calendar-alt.svg',
            title: 'Service name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            icon: '/static/icons/light/comments.svg',
            title: 'Service name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            icon: '/static/icons/light/gem.svg',
            title: 'Service name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            icon: '/static/icons/light/hourglass-half.svg',
            title: 'Service name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            icon: '/static/icons/light/paper-plane.svg',
            title: 'Service name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            icon: '/static/icons/light/star.svg',
            title: 'Service name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
        ],
      },
    },
    {
      template: 'Timeline',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Slide title',
        content:
          'Maecenas vulputate ac elit vel blandit. Morbi vulputate elit purus, vitae mattis urna tristique quis. Morbi ac cursus justo.',
        first: true,
        items: [
          {
            image: 'https://images.unsplash.com/photo-1469989744817-b70e88eb8cda?w=600&q=80',
            date: '01.01',
            title: 'Event name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=600&q=80',
            date: '01.02',
            title: 'Event name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            image: 'https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?w=600&q=80',
            date: '01.03',
            title: 'Event name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
        ],
      },
    },
    {
      template: 'Timeline',
      animation: {
        type: 'horizontal',
      },
      content: {
        styles: timelineNoContent,
        content:
          'Maecenas vulputate ac elit vel blandit. Morbi vulputate elit purus, vitae mattis urna tristique quis. Morbi ac cursus justo.',
        items: [
          {
            image: 'https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=600&q=80',
            date: '01.04',
            title: 'Event name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            image: 'https://images.unsplash.com/photo-1472584069410-35e46830b642?w=600&q=80',
            date: '01.05',
            title: 'Event name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=600&q=80',
            date: '01.06',
            title: 'Event name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
        ],
      },
    },
    {
      template: 'Timeline',
      animation: {
        type: 'horizontal',
      },
      content: {
        content:
          'Maecenas vulputate ac elit vel blandit. Morbi vulputate elit purus, vitae mattis urna tristique quis. Morbi ac cursus justo.',
        last: true,
        styles: timelineNoContent,
        items: [
          {
            image: 'https://images.unsplash.com/photo-1526244434298-88fcbcb066b5?w=600&q=80',
            date: '01.07',
            title: 'Event name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            image: 'https://images.unsplash.com/photo-1523527927236-da4036f4f66b?w=600&q=80',
            date: '01.08',
            title: 'Event name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            image: 'https://images.unsplash.com/photo-1523575166472-a83a0ed1d522?w=600&q=80',
            date: '01.09',
            title: 'Event name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
        ],
      },
    },
    {
      template: 'NumberItems',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Slide title',
        content:
          'Maecenas vulputate ac elit vel blandit. Morbi vulputate elit purus, vitae mattis urna tristique quis. Morbi ac cursus justo.',
        items: [
          {
            number: '01',
            title: 'Item name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            number: '02',
            title: 'Item name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            number: '03',
            title: 'Item name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            number: '04',
            title: 'Item name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            number: '05',
            title: 'Item name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            number: '06',
            title: 'Item name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
        ],
      },
    },
    {
      template: 'NumberItems2',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Slide title',
        content:
          'Maecenas vulputate ac elit vel blandit. Morbi vulputate elit purus, vitae mattis urna tristique quis. Morbi ac cursus justo.',
        items: [
          {
            number: '1',
            title: 'Item name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            number: '2',
            title: 'Item name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            number: '3',
            title: 'Item name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            number: '4',
            title: 'Item name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            number: '5',
            title: 'Item name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            number: '6',
            title: 'Item name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
        ],
      },
    },
    {
      template: 'Projects',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Slide title',
        content:
          'Maecenas vulputate ac elit vel blandit. Morbi vulputate elit purus, vitae mattis urna tristique quis. Morbi ac cursus justo.',
        items: [
          {
            image: 'https://images.unsplash.com/photo-1532667449560-72a95c8d381b?w=600&q=80',
            title: 'Project name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            image: 'https://images.unsplash.com/photo-1484071096222-7936a931e094?w=600&q=80',
            title: 'Project name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
          {
            image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=600&q=80',
            title: 'Project name',
            content: 'Pellentesque sollicitudin leo leo, vitae dapibus nisi convallis at.',
          },
        ],
      },
    },
    {
      template: 'Logos',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Slide title',
        content:
          'Maecenas vulputate ac elit vel blandit. Morbi vulputate elit purus, vitae mattis urna tristique quis. Morbi ac cursus justo.',
        items: [
          {
            image: 'http://pngimg.com/uploads/intel/intel_PNG15.png',
          },
          {
            image:
              'https://wiki.duraspace.org/download/attachments/31655033/duracloud_logo_12in.png?version=1&modificationDate=1329183208810&api=v2',
          },
          {
            image: 'https://github.githubassets.com/images/modules/site/logos/spotify-logo.png',
          },
          {
            image:
              'https://static1.squarespace.com/static/567069c3d82d5e5d015ccbac/56bc080545bf21e4826b890c/5b0eaf48f950b73551e8f753/1527689039587/amazon+logo.png',
          },
          {
            image: 'https://us.coca-cola.com/content/dam/coke2016/walgreens-fall-football/Coca-Cola-logo.png',
          },
          {
            image: 'https://kubernetes.io/images/kubernetes-horizontal-color.png',
          },
        ],
      },
    },
    {
      template: 'Card',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Slide title',
        subtitle: 'Slide subtitle',
        icon: '/static/icons/light/gem.svg',
        image: 'https://images.unsplash.com/photo-1553109231-0bd785712347?w=1350&q=80',
        content: `
        Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
        Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
        `,
      },
    },
    {
      template: 'Percentages',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Slide title',
        content:
          'Maecenas vulputate ac elit vel blandit. Morbi vulputate elit purus, vitae mattis urna tristique quis. Morbi ac cursus justo.',
        items: [
          {
            value: 25,
            title: 'Percent one',
            content: 'Vivamus ac risus eget orci mollis sodales. Etiam semper orci id tellus dignissim pretium.',
          },
          {
            value: 48,
            title: 'Percent two',
            content: 'Vivamus ac risus eget orci mollis sodales. Etiam semper orci id tellus dignissim pretium.',
          },
          {
            value: 81,
            title: 'Percent three',
            content: 'Vivamus ac risus eget orci mollis sodales. Etiam semper orci id tellus dignissim pretium.',
          },
        ],
      },
    },
    {
      template: 'Code',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Slide title',
        content:
          'Maecenas vulputate ac elit vel blandit. Morbi vulputate elit purus, vitae mattis urna tristique quis. Morbi ac cursus justo.',
        code,
        language: 'jsx',
        stylesObj: {
          fontSize: 40,
        },
      },
    },
    {
      template: 'CodeSandbox',
      animation: {
        type: 'horizontal',
      },
      content: {
        sandboxId: 'mzq0jz1ryp',
      },
    },
    {
      template: 'Funnel',
      animation: {
        type: 'horizontal',
      },
      content: {
        title: 'Slide title',
        items: [
          {
            image: '/static/icons/light/funnel_piece_one.svg',
            name: 'item name 1',
            content: 'Vivamus ac risus eget orci mollis sodales.',
          },
          {
            image: '/static/icons/light/funnel_piece_two.svg',
            name: 'item name 2',
            content: 'Vivamus ac risus eget orci mollis sodales.',
          },
          {
            image: '/static/icons/light/funnel_piece_three.svg',
            name: 'item name 3',
            content: 'Vivamus ac risus eget orci mollis sodales.',
          },
          {
            image: '/static/icons/light/funnel_piece_four.svg',
            name: 'item name 4',
            content: 'Vivamus ac risus eget orci mollis sodales.',
          },
          {
            image: '/static/icons/light/funnel_piece_five.svg',
            name: 'item name 5',
            content: 'Vivamus ac risus eget orci mollis sodales.',
          },
          {
            image: '/static/icons/light/funnel_piece_six.svg',
            name: 'item name 6',
            content: 'Vivamus ac risus eget orci mollis sodales.',
          },
        ],
      },
    },
  ],
};
