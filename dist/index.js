"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_client_1 = require("apollo-client");
var apollo_boost_1 = require("apollo-boost");
var apollo_link_http_1 = require("apollo-link-http");
var apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
// import fetch from 'node-fetch'
require("isomorphic-fetch");
var link = new apollo_link_http_1.HttpLink({
    uri: 'http://localhost:4000/graphql'
    // fetch
});
var cache = new apollo_cache_inmemory_1.InMemoryCache();
var client = new apollo_client_1.ApolloClient({
    link: link,
    cache: cache
});
client
    .query({
    query: apollo_boost_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      {\n        books {\n          title\n          author\n        }\n      }\n    "], ["\n      {\n        books {\n          title\n          author\n        }\n      }\n    "])))
})
    .then(function (result) {
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(result));
})
    .catch(function (result) {
    // eslint-disable-next-line no-console
    console.error(result);
});
var templateObject_1;
