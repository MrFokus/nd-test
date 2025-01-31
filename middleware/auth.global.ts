export default defineNuxtRouteMiddleware((from,to)=>{
    const userToken = useCookie('user_token_nd')    
    if(!userToken.value && from.path!=='/'){
        return navigateTo('/?sign-in')
    }
    return true
})