interface ErrorCodeEnum {
    [key: number]: string;
  }
  const errorCodesEnumObject: ErrorCodeEnum = {
    0: "The fields cannot be empty.",
    1: "User exist.",
    2: "User successfully created.",
    3: "Email not verified.",
    4: "Password is incorrect.",
    5: "Problem with Claim in HttpContext.",
    6: "Refresh token is incorrect.",
    7: "Refresh token expires.",
    8: "User verified.",
    9: "Request sended to server.",
    10: "Password changed successfully.",
    11: "Token expired.",
    12: "Password changed successfully.",
    13: "User not found.",
    14: "Invalid token.",

    998: "Registration data validation error",
    999: "Undefined alertError",
  };
  export default errorCodesEnumObject;
  