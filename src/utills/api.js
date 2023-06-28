const baseUrl = 'https://api.giphy.com/v1/gifs';
const apiKey = 'api_key=aTyYrrrFv40Op4m3JdotI2eAcA7xDFKv';

export const trending = (limit) => {
  return fetch(`${baseUrl}/trending?${apiKey}&limit=${limit}`).then((res) =>
    res.json()
  );
};

export const search = (seacrhQuery, limit) => {
  return fetch(
    `${baseUrl}/search?${apiKey}&q=${seacrhQuery}&limit=${limit}&lang=ru`
  ).then((res) => res.json());
};

export const random = () => {
  return fetch(`${baseUrl}/random?${apiKey}`).then((res) => res.json());
};
