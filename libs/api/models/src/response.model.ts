import {
  BaseResponse,
  Success,
  Failure,
  ResponseCode,
  ResponseType,
} from '@micro-services/core-models';
import { HttpError } from './http-error.model';

abstract class BaseResponseModel implements BaseResponse {
  abstract success: boolean;
  timestamp: string;
  statusCode: number;
  type: ResponseType;

  constructor(statusCode: ResponseCode, type: ResponseType) {
    this.timestamp = new Date().toISOString();
    this.statusCode = statusCode;
    this.type = type;
  }

  abstract toJSON(): Record<string, unknown>;

  toString(): string {
    return JSON.stringify(this.toJSON());
  }
}

export class SuccessResponse<T>
  extends BaseResponseModel
  implements Success<T>
{
  success = true;
  result: T;

  constructor(result: T, statusCode: ResponseCode, type: ResponseType) {
    super(statusCode, type);
    this.result = result;
  }

  toJSON() {
    return {
      success: true,
      statusCode: this.statusCode,
      timestamp: this.timestamp,
      result: this.result,
    };
  }
}

export class FailureResponse extends BaseResponseModel implements Failure {
  success = false;
  error: HttpError;

  constructor(error: HttpError, type: ResponseType) {
    super(error.statusCode, type);
    this.error = error;
  }

  toJSON() {
    return {
      success: this.success,
      timestamp: this.timestamp,
      statusCode: this.statusCode,
      error: this.error.toJSON(),
    };
  }
}
