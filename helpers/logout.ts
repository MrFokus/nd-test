export default function(){
    const userToken = useCookie('user_token_nd')
    userToken.value =null
    navigateTo('/')
}