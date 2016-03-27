/**
 * @module
 * This module defines the settings that need to be configured for a new
 * environment.
 * The clientId and clientSecret are provided when you create
 * a new security profile in Login with Amazon.  
 * 
 * You will also need to specify
 * the redirect url under allowed settings as the return url that LWA
 * will call back to with the authorization code.  The authresponse endpoint
 * is setup in app.js, and should not be changed.  
 * 
 * lwaRedirectHost and lwaApiHost are setup for login with Amazon, and you should
 * not need to modify those elements.
 */
var config = {
    clientId: 'amzn1.application-oa2-client.eae48d233d9f460dac3014b0d6bdd92b',
    clientSecret: '7ad107060eb499afde69b0459737d1fd117f6e631243b92a2fe250f10bac2493',
    redirectUrl: 'https://localhost:3000/authresponse',
    lwaRedirectHost: 'amazon.com',
    lwaApiHost: 'api.amazon.com',
    validateCertChain: true,
    sslKey: '/home/pi/Documents/alexa/samples/javaclient/certs/server/node.key',
    sslCert: '/home/pi/Documents/alexa/samples/javaclient/certs/server/node.crt',
    sslCaCert: '/home/pi/Documents/alexa/samples/javaclient/certs/ca/ca.crt',
    products: {
        "pi": ["123456"], // Fill in with valid device values, eg: "testdevice1": ["DSN1234", "DSN5678"]
    },
};

module.exports = config;
