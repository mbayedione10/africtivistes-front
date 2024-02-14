const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const posts = await graphql(`
    {
      allWpPost(sort: { fields: [date] }) {
        nodes {
          title
          excerpt
          content
          slug
          categories {
              nodes {
                name
                slug
              }
          }
          terms {
              nodes {
                name
              }
          }
          language {
            slug
          }
        }
      }
    }
  `).then(res => res.data)

  posts.allWpPost.nodes.forEach(node => {
    const categories = node.categories ? node.categories.nodes.map(category => category.name) : [];
    const tags = node.terms ? node.terms.nodes.map(term => term.name) : [];
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.slug,
        lang: node.language.slug,
        categories,
        tags,

      },
    })
  })

  const programmes = await graphql(`
    {
      allWpProgramme(sort: {fields: date}) {
      nodes {
        link
        slug
        terms: programme{
            etiquette
          }
        language {
          slug
        }
      }
    }
  }
  `).then(res => res.data)

  programmes.allWpProgramme.nodes.forEach(node => {
    createPage({
      path: `/programme/${node.slug}`,
      component: path.resolve(`./src/templates/programme-detail.js`),
      context: {
        slug: node.slug,
        lang: node.language.slug,
        tags: node.terms.etiquette
      },
    })
  })

  const allPostsFR = await graphql(`
    {
    allWpPost(
      filter: {
          language: {code: {eq: FR}}
         
          }
    ){
      totalCount
      nodes {
        link
        title
        id
        slug
        date(formatString: "DD MMMM, YYYY", locale: "fr")
        excerpt
        featuredImage {
          node {
            altText
            big: localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 360,
                  height: 200,
                  placeholder: DOMINANT_COLOR
                )
              }
            }
            small: localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 70,
                  height: 68,
                  placeholder: DOMINANT_COLOR
                )
              }
            }
          }
        }
        categories {
          nodes {
            slug
            name
          }
        }
        language {
          slug
        }
      }
    }
  }
  `).then(res => res.data)




  const allPostsEN = await graphql(`
  {
    allWpPost(
      filter: {
          language: {code: {eq: EN}}
         
          }
    ){
      totalCount
      nodes {
        link
        title
        id
        slug
        date(formatString: "DD MMMM, YYYY", locale: "en")
        excerpt
        featuredImage {
          node {
            altText
            big: localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 360,
                  height: 200,
                  placeholder: DOMINANT_COLOR
                )
              }
            }
            small: localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 70,
                  height: 68,
                  placeholder: DOMINANT_COLOR
                )
              }
            }
          }
        }
        categories {
          nodes {
            slug
            name
          }
        }
        language {
          slug
        }
      }
    }
  }
`).then(res => res.data)


  // Fonction pour créer les pages pour chaque catégorie
  const createCategoryPages = (posts, lang, perPage) => {
    const categories = [];
    const categoryNames = [];

    // Regrouper les posts par catégorie
    posts.forEach(post => {
      post.categories.nodes.forEach(({ slug, name }) => {
        const existingCategoryIndex = categories.findIndex(category => category.slug === slug);
        if (existingCategoryIndex === -1) {
          categories.push({ slug,name, posts: [post] });
        } else {
          categories[existingCategoryIndex].posts.push(post);
        }
      });
    });
    
    categories.forEach(category => {
      const { slug } = category;
      const postsLength = category.posts.length;
      const name = category.posts[0].categories.nodes[0].name;
      categoryNames.push({ slug, name, postsLength });
      categoryNames.sort((a, b) => b.postsLength - a.postsLength);
    });

    // Créer les pages pour chaque catégorie
    categories.forEach((category) => {
      const { slug } = category;
      const categoryName = category.name; 
      const postsInCategory = category.posts;
      const numPages = Math.ceil(postsInCategory.length / perPage);

      Array.from({ length: numPages }).forEach((_, i) => {
        const currentPage = i + 1;
        const basePath = currentPage === 1 ? `/${slug}` : `${slug}/${currentPage}`;
        const skip = i * perPage;
        const paginatedPosts = postsInCategory.slice(skip, skip + perPage);
        createPage({
          path: basePath,
          component: path.resolve("./src/templates/category.js"),
          context: {
            category: slug,
            categoryName: categoryName,
            categoryNames: categoryNames,
            lang: lang,
            posts: paginatedPosts,
            totalPages: numPages,
            currentPage: currentPage,
          },
        });
      });
    });
  }
  const totalPerPage = 18
  // Créer les pages pour les catégories pour chaque langue
  createCategoryPages(allPostsFR.allWpPost.nodes, "fr", totalPerPage);
  createCategoryPages(allPostsEN.allWpPost.nodes, "en", totalPerPage);
}