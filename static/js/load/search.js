$(function () { 
  $("#search").on('click', function () {
    $(".search-box").fadeIn(600);
  });

  $(".closebtn").on('click', function () {
    $(".search-box").fadeOut(600);
  });
});

{/* <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css"
/>
<script src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"></script>
<script>
  algoliasearchNetlify({
    appId: '<YOUR_ALGOLIA_APP_ID>',
    apiKey: '<YOUR_ALGOLIA_API_KEY>',
    siteId: '<YOUR_NETLIFY_SITE_ID>',
    branch: '<YOUR_TARGET_GIT_BRANCH>',
    selector: 'div#search',
  });
</script> */}
