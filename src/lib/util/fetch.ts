import fetch from 'isomorphic-unfetch'

export const getJsonData = async (endpoint) => {
  const response = await fetch(endpoint);
  return await response.json();
};