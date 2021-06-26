import express from 'express';

import { verifyLoggerApi } from '../../controllers/api.js';
import { validateUserUtility } from '../../utils/validation/user.js';
import { validateDataUtility } from '../../utils/validation/data.js';

const router = express.Router();

router.post('/',validateDataUtility,verifyLoggerApi,validateUserUtility);
// app.post('/',verifyLoggerApi).get(validateUserUtility);

export default router;

// client has to prove his identity
// there r 2 ways for that:-
// 1. client proves itslf somehow on the request of server - JWT, in this token contains some data that identifies the client, also this token is non-changeable, it is set once and then stored in the db, it contains some basic info abt user(not any sensitive data), it is encoded in base64, so use atob() in js to decrypt the middle part out of 3 parts in it
// 2. client share a secret with server - cookie, in this a cookie containing some data is shared with server and everytime client logs in again, the server sense the cookie from its db and restore client's session
