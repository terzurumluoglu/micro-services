import {
  HttpError,
  SuccessResponse,
  FailureResponse,
} from '@micro-services/api-models';
import { RESPONSE_CODES, ResponseCode } from '@micro-services/core-models';

export class HttpResponseFactory {
  private static readonly type = 'http';
  static success<T>(result: T, statusCode: ResponseCode = RESPONSE_CODES.OK) {
    return new SuccessResponse<T>(result, statusCode, this.type);
  }

  static failure(error: HttpError) {
    return new FailureResponse(error, this.type);
  }
}
