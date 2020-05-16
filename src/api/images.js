import { API_URL } from './constans';

export const saveImage = async image => {
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

  const formData = new FormData();
  formData.append('image', image);

  const response = await fetch(`${API_URL}/image/add`, {
    method: 'POST',
    body: formData,
    mode: 'cors',
    headers
  });

  const imageID = await response.text();
  return imageID;
};
