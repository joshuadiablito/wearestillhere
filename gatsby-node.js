const path = require(`path`);
const stories = require('./src/provider/stories');
const template = path.resolve(`./src/templates/StoryPage/index.js`);

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  stories.forEach(
    ({ id, title, href, images, mainImage, shortDescription }) => {
      const pathHref = `/story/${href}`;

      createPage({
        path: pathHref,
        component: template,
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
