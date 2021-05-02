
import { errorMessages } from './ErrorMessages';

export const errorHandler = response => {
  if (response.status) {
    let _message = errorMessages[response.status].title;
  }
};
