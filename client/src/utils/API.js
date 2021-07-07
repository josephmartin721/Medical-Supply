import axios from "axios";

export default {
    getMed: function() {
        return axios.get("api/")
    }
}