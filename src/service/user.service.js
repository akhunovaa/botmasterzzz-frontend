import { authHeader } from '../helpers/';
import axios from 'axios';
import qs from 'qs';
import {fakeAuthService} from "./fakeauth.service";

export const userService = {
    loginAuth,
    login,
    logout,
    getAll
};

function loginAuth(username, password) {

    const data = qs.stringify({
        username: username,
        password: password,
        submit:	'Login'
    });

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    };

    return axios({
        method: 'post',
        url: 'login',
        data,
        headers}
    ).then(result => {
        return axios.get('oauth/authorize?client_id=web_application&response_type=code').then((res) => {
            //console.log(res.request.responseURL);
            var code = getURLParameter('code',res.request.responseURL)
            localStorage.setItem('code', code);
            var data = qs.stringify({
                grant_type: 'authorization_code',
                code: code
            });
            var auth =  {
                username: 'web_application',
                password: '123456'
            }

            axios({
                method: 'post',
                url: 'oauth/token',
                data,
                auth}
            ).then(result => {
                //console.log("token_result");
                var parsedResponse = JSON.parse(JSON.stringify(result.data));
                localStorage.setItem('token', parsedResponse.access_token);
                localStorage.setItem('token_type', parsedResponse.token_type);
                localStorage.setItem('scope', parsedResponse.scope);
                //console.log(parsedResponse.access_token);
                fakeAuthService.isAuthenticated = true;
            }).catch(result => {
                console.log(result);
            })
        });
    }).catch(result => {
        return axios.get('oauth/authorize?client_id=web_application&response_type=code').then((res) => {
            console.log(res.request.responseURL);
            var code = getURLParameter('code',res.request.responseURL)
            localStorage.setItem('code', code);
            var data = qs.stringify({
                grant_type: 'authorization_code',
                code: code
            });
            //baseURL: "https://api.lyft.com/",
            var auth =  {
                username: 'web_application',
                password: '123456'
            }

            axios({
                method: 'post',
                url: 'oauth/token',
                data,
                auth}
            ).then(result => {
                console.log(result);
            }).catch(result => {
                console.log(result);

            })
        });
    });

}

function getURLParameter(name, givenstring) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(givenstring)||[,null])[1]
    );
}

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a user in the response
            if (user) {
                // store user details and basic auth credentials in local storage
                // to keep user logged in between page refreshes
                user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}