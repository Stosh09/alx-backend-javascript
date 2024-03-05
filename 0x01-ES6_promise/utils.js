export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: "profile-photo-1",
  });
}

export function createUser() {
  return Promise.resolve({
    firstName: "Guillaume",
    lastName: "Salva",
  });
}
