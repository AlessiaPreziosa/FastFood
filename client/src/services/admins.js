const BASE_URL = 'http://localhost:3020/api/v1/fastFood/admin',
    HEADERS = {"Content-Type": "application/json"};

// eslint-disable-next-line
export default {

    getMenu: () => {
        return fetch(BASE_URL, {
            headers: HEADERS
        }).then(res => res.json())
            .then(data => data)
    },

    addMenu: (requestBody) => {
        return fetch(BASE_URL + '/addMenu',
            {
                method: 'post',
                body: JSON.stringify(requestBody),
                headers: HEADERS
            })
            .then(res => res.json())
    },

    updateMenu: (requestBody) => {
        return fetch(BASE_URL + '/updateMenu?_method=PUT',
            {
                method: 'post',
                body: JSON.stringify(requestBody),
                headers: HEADERS
            })
            .then(res => res.json())
    },

    deleteMenu: (requestBody) => {
        fetch(BASE_URL + '/deleteMenu?_method=DELETE',
            {
                method: 'post',
                body: JSON.stringify(requestBody),
                headers: HEADERS
            })
            .then(res => res.json())
    },

}