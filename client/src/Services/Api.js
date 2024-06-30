import axios from 'axios';

const API_URL = '';

const API_GMAIL = async (urlObject, payload,type) => {
    return await axios({
        method: urlObject.method,
        url: `${API_URL}/${urlObject.endpoint}/${type}`,
        data: payload  // Removed the nested object to send payload directly
    });
}

export default API_GMAIL;
