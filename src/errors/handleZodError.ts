import { IGenericErrorResponse } from '../interface/common';
import { ZodError, ZodIssue } from 'zod';
import { IGenericErrorMessages } from '../interface/error';

const handleZodError = (error: ZodError): IGenericErrorResponse => {
  const statusCode = 400;
  const errors: IGenericErrorMessages[] = error.issues.map(
    (issue: ZodIssue) => ({
      path: issue.path[issue.path.length - 1],
      message: issue.message,
    })
  );
  return {
    statusCode,
    message: 'Zod Validation Error',
    errorMessages: errors,
  };
};

export default handleZodError;
