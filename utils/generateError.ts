export function generateError(error: any): any {
  let code = "Unexpected Error";
  let message = "Unknown error occurred, please try again later";
  if (error.response) {
    if (
      error.response.data &&
      error.response.data.code &&
      error.response.data.message
    ) {
      message = error.response.data.message;
      code = error.response.data.code;
    }
  } else if (error.code && error.message) {
    code = error.code;
    message = error.message;
  }

  return { code, message };
}
