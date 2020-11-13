const _BASE_URL = "https://api.unsplash.com/";
const _CLIENT_ID = "?client_id=jLpfReaYxvC_gqU0AithAyoj1DZmetoZM045C1fnaBc";

async function getRandomPhoto() {
  const url = `${_BASE_URL}/photos/random${_CLIENT_ID}`;
  const res = await fetch(url);
  return await res.json();
}

export { getRandomPhoto };
