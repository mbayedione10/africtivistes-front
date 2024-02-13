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
          }
        }
        language {
          slug
        }
      }
    }
  }
  `).then(res => res.data)

  const total = allPostsFR.allWpPost.totalCount
  const perPage = 50
  const numPages = Math.ceil(total / perPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/actualites` : `/actualites/${i + 1}`,
      component: path.resolve(`./src/templates/actualites.js`),
      context: {
        limit: perPage,
        skip: i * perPage,
        numPages,
      },
    })
  }
  )
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
          }
        }
        language {
          slug
        }
      }
    }
  }
`).then(res => res.data)


  const totalEN = allPostsEN.allWpPost.totalCount
  const perPageEN = 6
  const numPagesEN = Math.ceil(totalEN / perPageEN)

  Array.from({ length: numPagesEN }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/news` : `/news/${i + 1}`,
      component: path.resolve(`./src/templates/news.js`),
      context: {
        limit: perPageEN,
        skip: i * perPageEN,
        numPagesEN,
      },
    })
    
  }
  )

  // Fonction pour créer les pages pour chaque catégorie
  const createCategoryPages = (posts, lang, perPage) => {
    const categories = {};

    // Regrouper les posts par catégorie
    posts.forEach(post => {
      post.categories.nodes.forEach(({ slug }) => {
        if (!categories[slug]) {
          categories[slug] = [];
        }
        categories[slug].push(post);
      });
    });

    // Créer les pages pour chaque catégorie
    Object.keys(categories).forEach((category) => {
      const postsInCategory = categories[category];
      const numPages = Math.ceil(postsInCategory.length / perPage);
      Array.from({ length: numPages }).forEach((_, i) => {
        const currentPage = i + 1;
        const skip = i * perPage;
        const paginatedPosts = postsInCategory.slice(skip, skip + perPage);
        createPage({
          path: `/categories/${category}/${currentPage}`,
          component: path.resolve("./src/templates/category.js"),
          context: {
            category: category,
            lang: lang,
            posts: paginatedPosts,
            totalPages: numPages,
            currentPage: currentPage,
          },
        });
      });
    });
  };

  const totalPerPage = 18
  // Créer les pages pour les catégories pour chaque langue
  createCategoryPages(allPostsFR.allWpPost.nodes, "fr", totalPerPage);
  createCategoryPages(allPostsEN.allWpPost.nodes, "en", totalPerPage);
}