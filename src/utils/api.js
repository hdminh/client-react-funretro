import axios from 'axios';

export const getBoards = async (token, user) => {
    const url = '' + user;
  const res = await axios.get(url, { 
        headers : {
            'Content-Type': 'application/json',
            'auth-token': token
        }
    });
  return res;
};

export const addBoard = async (token, data) => {
    const url = '';
    const res = await axios.post(url, data, { 
        headers : {
            'Content-Type': 'application/json',
            'auth-token': token
        }
    });
    return res;
}

export const getListCard = async (token, boardId) => {
    const url = '' + boardId;
    const res = await axios.get(url, { 
        headers : {
            'Content-Type': 'application/json',
            'auth-token': token
        }
    });
    return res;
}

export const addCard = async (token, data) => {
    const url = '';
    const res = await axios.post(url, data, { 
        headers : {
            'Content-Type': 'application/json',
            'auth-token': token
        }
    });
    return res;
}


