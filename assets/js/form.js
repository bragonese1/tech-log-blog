/*Getting values entered by user*/
const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');

/*Submitting form*/
document.getElementById('blog').addEventListener('submit', function(event) {
    event.preventDefault();
/*make sure all fields are filled*/
if (!username.value || !title.value || !content.value) {
  alert('Please fill in all fields.');
  return;
}
/*create post object*/
const post = {
    username: username.value,
    title: title.value,
    content: content.value
  };

  /*create array of posts*/
  let posts = JSON.parse(localStorage.getItem('posts'));
  /*if no posts, create array*/
  if (!posts) {
    posts = [];
  }
  /*add post to array*/
  posts.push(post);
  /*save array to local storage*/
  localStorage.setItem('posts', JSON.stringify(posts));
/*direct to blogpost page*/
  window.location.href = 'blogpost.html'});

