const _BASE_URL = "https://api.unsplash.com";
const _CLIENT_ID = "?client_id=jLpfReaYxvC_gqU0AithAyoj1DZmetoZM045C1fnaBc";
const _COLOR = "?color=black_and_white";

async function getRandomPhoto() {
  const url = `${_BASE_URL}/photos/random${_CLIENT_ID}`;
  const res = await fetch(url);
  return await res.json();
}

async function getPhotos(query, page = 1) {
  const url = `${_BASE_URL}/search/photos${_CLIENT_ID}&query=${query}&per_page=20&page=${page}`;
  const res = await fetch(url);
  return await res.json();
}

export { getRandomPhoto, getPhotos };
