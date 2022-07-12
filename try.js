'use strict';

const jwt = require('jsonwebtoken');
const t1 = jwt.sign({ hey: 'hey1' }, 'shhhhhhh');
console.log(jwt.verify(t1, 'shhhhhhh'));
