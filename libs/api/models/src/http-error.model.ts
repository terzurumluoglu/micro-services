import { ResponseCode } from '@micro-services/core-models';

export interface HttpErrorOptions {
  statusCode: ResponseCode;
  message: string;
  details: string;
  code: string;
  stack?: string;
}

/**
 * Gelişmiş, hem HTTP hem Socket için kullanılabilir hata modeli.
 */
export class HttpError extends Error {
  public readonly statusCode: ResponseCode;
  public readonly code: string;
  public readonly details: string;

  constructor(options: HttpErrorOptions) {
    super(options.message);
    this.name = this.constructor.name;
    this.statusCode = options.statusCode;
    this.code = options.code;
    this.details = options.details;

    // Stack trace
    if (options.stack) this.stack = options.stack;
    else if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  toJSON() {
    return {
      code: this.code,
      message: this.message,
      details: this.details,
    };
  }
}
