import axios from "axios";

export default {
    getMed: function() {
        return axios.get("/api/")
    },
    login: function(params) {
        return axios.post("/api/users/login", params)
    },
    logout: function(params) {
        return axios.post("/api/users/logout", params)
    },
    register: function() {
        return axios.post("/api/users")                    
    },
    products: function() {
        return axios.get("/api/product")
    },
    productById: function(value) {
        return axios.get(`/api/product/${value}`)
    }
}