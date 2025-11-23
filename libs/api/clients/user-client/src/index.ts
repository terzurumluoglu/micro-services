import axios from 'axios';

export class UserClient {
  constructor(private baseUrl: string) {}

  getAllUsers() {
    return axios.get(`${this.baseUrl}users`);
  }

  getUserById(userId: number) {
    return axios.get(`${this.baseUrl}users/${userId}`);
  }

  getUsersByIds(ids: number[]) {
    return axios.post(`${this.baseUrl}users/bulk`, { ids });
  }
}
