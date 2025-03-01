const photoUpload = document.getElementById('photo-upload');
const deletePhoto = document.getElementById('delete-photo');

const photoPreview = document.getElementById('photo-preview');
const photoPlaceholder = document.getElementById('photo-placeholder');

function showImage() {
  photoPreview.classList.remove('hidden');
  photoPlaceholder.classList.add('hidden');
  deletePhoto.classList.remove('hidden');
  photoUpload.disabled = true;
}

function deleteImage() {
  photoPreview.classList.add('hidden');
  photoPlaceholder.classList.remove('hidden');
  deletePhoto.classList.add('hidden');
  photoUpload.disabled = false;
}

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
}

function maskPassword(input) {
  let value = input.value;
  input.value = '*'.repeat(value.length);
}
