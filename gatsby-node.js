const path = require(`path`);
const _ = require("lodash");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
      query {
        allBooks {
            edges {
              node {
                author
                cover
                description
                id
                isbn
                pages
                published
                publisher
                rating
                subtitle
                title
                topic
                website
              }
            }
          }
      }
    `);
  
    result.data.allBooks.edges.forEach((edge) => {
      createPage({
        path: `/${_.kebabCase(edge.node.title)}/`,
        component: path.resolve(`./src/templates/BookDetails.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          title: edge.node.title,
        },
    });
  
      /*if (edge.node.frontmatter.tags) {
        edge.node.frontmatter.tags.forEach(tag => {
          tagSet.add(tag);
        });
      }
      tagSet.forEach(tag => {
        createPage({
          path: `/tags/${_.kebabCase(tag)}/`,
          component: path.resolve(`./src/templates/tagged-post.js`),
          context: { tag }
        });
      });*/
    })
  }
  