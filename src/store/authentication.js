import { reactive, watchEffect, readonly } from 'vue'
import axios from "axios";

const state = reactive({ user: {}, token: {}, authenticated: false } );

const loginUser = async ( credentials ) =>
{
    const response = await  axios({ method: 'POST', url: 'customers/auth/login', data: { data: { type: "Customer", attributes: { email: credentials.email, password: credentials.password } } } });
    return await validateToken ( response.data.data.token.access_token, response.data.data.attributes.resource_id )
}
const validateToken = async ( token, resource ) =>
{
    try
    {
        let response = await axios({ method: 'GET', url: 'customers/' + resource, headers: { 'Authorization': 'Bearer ' + token } });
        storeData( token, response.data.data )
    }
    catch ( exception )
    {
        localStorage.clear();
        state.authenticated = false
    }
}
const storeData = ( token, user ) =>
{
    localStorage.setItem( 'token', token )
    localStorage.setItem( 'user', JSON.stringify( user ) )

    state.token = localStorage.getItem('token' )
    state.user = JSON.parse( localStorage.getItem('user' ) )

    return isAuthenticated()
}
const isAuthenticated = () =>
{
    if ( localStorage.getItem('token') && localStorage.getItem( 'user' ) )
    {
        return state.authenticated = true
    }
    else
    {
        localStorage.clear();
        return state.authenticated = false
    }
}
const getToken = () =>
{
    return localStorage.getItem( 'token' )
}
const logoutUser = () =>
{
    return axios({ method: 'POST', url: 'customers/auth/logout', headers: { 'Authorization': 'Bearer ' + getToken() } }).then(() =>{
        localStorage.removeItem( 'token' )
        localStorage.removeItem( 'user' )
        localStorage.removeItem( 'theStore' )
        localStorage.clear();
    })
}
watchEffect(() =>
{
    state.token = localStorage.getItem('token' )
    state.user = JSON.parse( localStorage.getItem('user' ))
});

export default { state: readonly(state), loginUser, logoutUser, isAuthenticated }