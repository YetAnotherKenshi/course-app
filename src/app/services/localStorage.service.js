const TOKEN_KEY = "jwt-token";
const REFRESH_KEY = "jwt-refresh-token";
const EXPIRES_KEY = "jwt-expires";

export function setTokens({ expiresIn = 3600, idToken, refreshToken }) {
    const ExpiresDate = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem(TOKEN_KEY, idToken);
    localStorage.setItem(REFRESH_KEY, refreshToken);
    localStorage.setItem(EXPIRES_KEY, ExpiresDate);
}

export function getAccessToken() {
    return localStorage.getItem(TOKEN_KEY);
}
export function getRefreshToken() {
    return localStorage.getItem(REFRESH_KEY);
}
export function getExpiresDate() {
    return localStorage.getItem(EXPIRES_KEY);
}

const localStorageService = {
    setTokens,
    getAccessToken,
    getRefreshToken,
    getExpiresDate
};

export default localStorageService;