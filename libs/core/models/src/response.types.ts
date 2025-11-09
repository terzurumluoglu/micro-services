export type ResponseType = 'http' | 'socket';
export interface BaseResponse {
  success: boolean;
  statusCode: number;
  timestamp: string;
  type: ResponseType;
}

export interface Success<T> extends BaseResponse {
  result?: T;
}

export interface Failure extends BaseResponse {
  error: {
    code: string;
    message: string;
    details: string;
  };
}
