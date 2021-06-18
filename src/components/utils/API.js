import axios from "axios";

// CONST VARIABLE OF 150 RANDOM USERS
const URL = 'https://randomuser.me/api/?results=150&nat=us'

/* eslint-disable-next-line */
export default{
  searchEmployees: function() {
    return axios.get(URL);
  }
}