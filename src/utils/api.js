import axios from 'axios';

const baseUrl = 'https://node-api-minhc.herokuapp.com/';

export const login = async (username, password) => {
    const url = baseUrl + '/login';
    const data = {
        email: username,
        password: password
    }
    const res = await axios.post(url, data, { 
        headers : {
            'Content-Type': 'application/json'
        }
    });
  return res;
};

export const signup = async (username, password) => {
    const url = baseUrl + '/signup';
    const data = {
        email: username,
        password: password
    }
    const res = await axios.post(url, data, { 
        headers : {
            'Content-Type': 'application/json'
        }
    });
  return res;
};

export const getBoards = async (token, user) => {
    const url = baseUrl + '/board';
  const res = await axios.get(url, { 
        headers : {
            'Content-Type': 'application/json',
            'auth-token': token
        }
    });
  return res;
};

export const addBoard = async (token, data) => {
    const url = baseUrl + '/board';
    const res = await axios.post(url, data, { 
        headers : {
            'Content-Type': 'application/json',
            'auth-token': token
        }
    });
    return res;
}

export const getListCard = async (token, boardId) => {
    const url = baseUrl + "/tag/"+ boardId;
    const res = await axios.get(url, { 
        headers : {
            'Content-Type': 'application/json',
            'auth-token': token
        }
    });
    return res;
}

export const addCard = async (token, data) => {
    const url = baseUrl + '/tag';
    const res = await axios.post(url, data, { 
        headers : {
            'Content-Type': 'application/json',
            'auth-token': token
        }
    });
    return res;
}


