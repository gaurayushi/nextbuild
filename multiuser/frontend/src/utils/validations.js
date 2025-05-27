export function validateUsername(username) {
  const regex = /^[a-zA-Z0-9_]{4,20}$/;
  return regex.test(username);
}

export function isValidPassword(password) {
  const regex = /^(?=.*[!@#$%^&*])(?=.*\d).{8,}$/;
  return regex.test(password);
}

export function isImageFile(file) {
  return file && ["image/jpeg", "image/png"].includes(file.type);
}

export function isFileSizeValid(file) {
  return file && file.size <= 2 * 1024 * 1024;
}
