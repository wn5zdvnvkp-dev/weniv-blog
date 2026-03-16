const BASE_URL = 'https://dev.wenivops.co.kr/services/fastapi-crud/38';

const getTokens = () => {
    return localStorage.getItem('access_token');
};

const getHeaders = () => {
    const token = getTokens();
    const headers = {
        'Content-Type': 'application/json',
    };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
};