import axios from 'axios';

export class PostClient {
  constructor(private baseUrl: string) {}

  getPostById(postId: number) {
    return axios.get(`${this.baseUrl}/posts/${postId}`);
  }
}
