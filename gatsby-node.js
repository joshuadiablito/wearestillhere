const path = require(`path`);
const stories = require('./src/provider/stories');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  stories.forEach(({ id, title, href, image, fullImage, shortDescription }) => {
    createPage({
      path: `/story/${href}-${id}`,
      component: path.resolve(`./src/templates/StoryPage/index.js`),
      context: {
        stories,
        story: {
          id,
          title,
          href,
          image,
          fullImage,
          shortDescription,
        },
      },
    });
  });
};