var appURL = "http://localhost:3300/users/"
var axios = require('axios');


function getTopics() {
       return  axios.get(appURL)
}

function addTopic(nq) {
    console.log(nq)
    return axios.post(appURL,nq)
}

function deleteTopic(id) {
    console.log(id)
    return axios.delete(appURL+`${id}`)
}


export {getTopics, addTopic, deleteTopic};