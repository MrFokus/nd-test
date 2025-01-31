export interface SignInForm{
    email:TFormField,
    password:TFormField
}
export interface AddNote{
    title:TFormField,
    content:TFormField
}
export interface RegisterForm{
    email:TFormField,
    password:TFormField
    passwordRepeat:TFormField
}

type TFormField = {
    value:string,
    error?:string
}