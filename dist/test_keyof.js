"use strict";
const user_keyof = {
    id: 666,
    name: 'huxiaozhou',
};
function getProperty(obj, key) {
    return obj[key];
}
const age = getProperty(user_keyof, 'id');
var HttpMethod;
(function (HttpMethod) {
    HttpMethod[HttpMethod["Get"] = 0] = "Get";
    HttpMethod[HttpMethod["Post"] = 1] = "Post";
})(HttpMethod || (HttpMethod = {}));
