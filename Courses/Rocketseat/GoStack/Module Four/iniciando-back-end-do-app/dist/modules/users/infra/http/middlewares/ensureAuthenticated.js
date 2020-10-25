"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ensureAuthenticated;

var _jsonwebtoken = require("jsonwebtoken");

var _AppError = _interopRequireDefault(require("../../../../../shared/errors/AppError"));

var _auth = _interopRequireDefault(require("../../../../../config/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ensureAuthenticated(request, response, next) {
  // get request values of the headers
  const authHeader = request.headers.authorization; // verify if the headers exists

  if (!authHeader) {
    throw new _AppError.default('JWT token is missing.', 401);
  } // disrupt the token value


  const [, token] = authHeader.split(' '); // get the value key secret of the jwt object that i made in another file

  const {
    secret
  } = _auth.default.jwt;

  try {
    // verify if token that i got is equal the key registered
    const decoded = (0, _jsonwebtoken.verify)(token, secret); // subject, whom the token refers to

    const {
      sub
    } = decoded; // user identification

    request.user = {
      id: sub
    };
    return next();
  } catch {
    throw new _AppError.default('Invalid JWT token!', 401);
  }
}