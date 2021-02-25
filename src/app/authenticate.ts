import { useState } from 'react';

export default function useAuthToken() {
  const getAuthToken = () => {
    const tokenString: any = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const [token, setAuthToken] = useState(getAuthToken());

  const saveAuthToken = (userToken: any) => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setAuthToken(userToken.token);
  };

  return {
    setAuthToken: saveAuthToken,
    token
  }
}