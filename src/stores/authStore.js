import { observable, makeAutoObservable, action } from 'mobx';
import decode from 'jwt-decode';
import instance from './instance';
class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this, {
      //   signin: action,
      //   signup: action,
    });
  }

  setUser = (token) => {
    localStorage.setItem('myToken', token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signup = async (userData) => {
    try {
      const res = await instance.post('/signup', userData);
      this.setUser(res.data.token);
    } catch (error) {
      console.log('AuthStore -> signup -> error', error);
    }
  };
  signin = async (userData) => {
    try {
      const res = await instance.post('/signin', userData);
      this.setUser(res.data.token);
    } catch (error) {
      console.log('AuthStore -> signin -> error', error);
    }
  };
  signout = () => {
    delete instance.defaults.headers.common.Authorization;
    localStorage.removeItem('myToken');
    this.user = null;
  };

  checkForToken = () => {
    const token = localStorage.getItem('myToken');
    if (token) {
      const currentTime = Date.now();
      const user = decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
