import axios from 'axios';

const baseUrl = 'https://node-api-minhc.herokuapp.com/';

export const login = async (username, password) => {
    const url = baseUrl + 'auth/login';
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

export const signUp = async (name, username, password) => {
    const url = baseUrl + 'auth/signup';
    const data = {
        name: name,
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

export const getBoards = async () => {
    const url = baseUrl + 'board';
  const res = await axios.get(url, { 
        headers : {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    });
  return res;
};

export const addBoard = async (data) => {
    const url = baseUrl + '/board';
    const res = await axios.post(url, data, { 
        headers : {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    });
    return res;
}

export const getListCard = async (boardId) => {
    const url = baseUrl + "/tag/"+ boardId;
    const res = await axios.get(url, { 
        headers : {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    });
    return res;
}

export const addCard = async (data) => {
    const url = baseUrl + '/tag';
    const res = await axios.post(url, data, { 
        headers : {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        }
    });
    return res;
}


