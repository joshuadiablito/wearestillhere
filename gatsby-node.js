const path = require(`path`);
const stories = require('./src/provider/stories');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  stories.forEach(
    ({ id, title, href, images, mainImage, shortDescription }) => {
      const pathHref = `/story/${href}`;

      createPage({
        path: pathHref,
        component: path.resolve(`./src/templates/StoryPage/index.js`),
        context: {
          stories,
          story: {
            id,
            title,
            href,
            images,
            mainImage,
            shortDescription,
          },
        },
      });
    }
  );
};
