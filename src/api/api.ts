import axios from 'axios';

export const fetchApi = async () => {
  return (await axios.get('https://api.unsplash.com/photos/?client_id=o6uGpHAzyK_UsTiJ8FofQk4WcNpelZKsVUfx9RqKOKM')).data;
}
