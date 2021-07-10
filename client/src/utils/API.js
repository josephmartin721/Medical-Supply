import axios from "axios";

export default {
    getMed: function() {
        return axios.get("api/")
    },
    login: function() {
        return axios.post("api/users/login")
    },
    logout: function() {
        return axios.post("api/users/logout")
    },
    register: function() {
        return axios.post("api/users")                    
    },
    products: function() {
        return axios.get("api/products")
    }
}