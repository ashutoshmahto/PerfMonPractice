/*  Initiate lighthouse run from index.js
    Currently URL is fixed for demo purpose
*/
const lighthouse = require('lighthouse');
const customConfig = require('custom-config.js');

lighthouse('https://www.example.com', {}, customConfig);

