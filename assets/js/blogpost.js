/*Function calling to display the blog posts*/
function displayBlogList() {
  
    /*Retrieve the blog list from local storage*/
    const BlogList = JSON.parse(localStorage.getItem('posts'))||[];

    /*creating the section to display the blog posts*/
    const BlogPostsSection = document.getElementById('blog-list');
  
    /* Display the blog posts loop for all blog posts*/
    BlogList.forEach(function(post) {

      /*create div for each blog post*/
      const postEl = document.createElement('div');

      /*add class style from css to div*/
      postEl.classList.add('blog-list'); 

      /*adding title, content, author to using the html within the created div*/
      postEl.innerHTML =
        `<h2>${post.title}</h2>
        <p>${post.content}</p>
        <p>Author: ${post.username}</p>`;

      /*appending the created div to the BlogPostsSection*/
      BlogPostsSection.appendChild(postEl);
    });

  }
  /*display the blog list*/
  displayBlogList();

/*Making the back button work with event listener to go back to form html page*/
document.getElementById('back-btn').addEventListener('click', function() {
    window.location.href = 'form.html';
  })