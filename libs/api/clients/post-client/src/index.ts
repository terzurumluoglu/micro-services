import axios from 'axios';

export class PostClient {
  constructor(private baseUrl: string) {}

  getAllPosts() {
    return axios.get(`${this.baseUrl}posts`);
  }

  getPostById(postId: number) {
    return axios.get(`${this.baseUrl}posts/${postId}`);
  }
}
