// Get the modal elements
const signInModal = document.getElementById('signInModal');
const signUpModal = document.getElementById('signUpModal');
const addPostModal = document.getElementById('addPostModal');

// Get the button elements
const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');
const addPostBtn = document.getElementById('addPostBtn');

// Get the <span> element that closes the modal
const closeButtons = document.querySelectorAll('.close');

// When the user clicks the button, open the modal
signInBtn.onclick = function() {
  signInModal.style.display = 'flex';
}

signUpBtn.onclick = function() {
  signUpModal.style.display = 'flex';
}

addPostBtn.onclick = function() {
  addPostModal.style.display = 'flex';
}

// When the user clicks on <span> (x), close the modal
closeButtons.forEach(button => {
  button.onclick = function() {
    signInModal.style.display = 'none';
    signUpModal.style.display = 'none';
    addPostModal.style.display = 'none';
  }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == signInModal) {
    signInModal.style.display = 'none';
  }
  if (event.target == signUpModal) {
    signUpModal.style.display = 'none';
  }
  if (event.target == addPostModal) {
    addPostModal.style.display = 'none';
  }
}

// Track the current alignment
let isImageLeft = true;

// Handle adding posts
document.getElementById('addPostForm').onsubmit = function(event) {
  event.preventDefault();

  const title = document.getElementById('postTitle').value;
  const content = document.getElementById('postContent').value;
  const imageUrl = document.getElementById('postImage').value; // Get image URL from form
  const postsContainer = document.getElementById('postsContainer');

  const postHTML = `
    <div class="h-card ${isImageLeft ? 'image-left' : 'image-right'}">
      <div class="card_content">
        <h2>${title}</h2>
        <p>${content}</p>
        <div class="status">
          <p>${new Date().toLocaleDateString()}</p>
          <a href="post.html"><button class="read-btn">Read More</button></a>
        </div>
      </div>
      <img src="${imageUrl || 'images/placeholder.png'}" alt="Post image" /> <!-- Use provided image URL or default placeholder -->
    </div>
  `;

  postsContainer.insertAdjacentHTML('beforeend', postHTML);

  // Clear form and close modal
  document.getElementById('postTitle').value = '';
  document.getElementById('postContent').value = '';
  document.getElementById('postImage').value = ''; // Clear image URL field
  addPostModal.style.display = 'none';

  // Toggle the alignment for the next post
  isImageLeft = !isImageLeft;
}
