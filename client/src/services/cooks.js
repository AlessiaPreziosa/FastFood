const BASE_URL = 'http://localhost:3020/api/v1/fastFood/cook',
    HEADERS = {"Content-Type": "application/json"};

// eslint-disable-next-line
export default {

    getOrder: () => {
        return fetch(BASE_URL, {
            headers: HEADERS
        }).then(res => res.json())
            .then(data => data)
    },

    updateCarico: (requestBody) => {
        return fetch(BASE_URL + '/updateCarico?_method=PUT',
            {
                method: 'post',
                body: JSON.stringify(requestBody),
                headers: HEADERS
            })
            .then(res => res.json())
    },

    updateConcludi: (requestBody) => {
        return fetch(BASE_URL + '/updateConcludi?_method=PUT',
            {
                method: 'post',
                body: JSON.stringify(requestBody),
                headers: HEADERS
            })
            .then(res => res.json())
    }

}

