export default function debouncedRequest(delay) {
    let timeout = null;

    async function makeRequest(url, callback) {
        const response = await fetch(url);
        const body = await response.json();
        callback(body);
    }

    return async function (url, callback) {
        if(timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            makeRequest(url, callback);
        }, delay);
    }
}