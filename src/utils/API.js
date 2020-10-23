import Axios from "axios";

export default{ 
    getUsers:function(){    
        return Axios.get("https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=200&nat=us");
    }
};