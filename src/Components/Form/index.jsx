// import Eye from "../../Assets/img/eye.svg"
import { ErrorMessage, Form } from "./style"
import { InputAndLabel, InputSelect } from "../Input"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { RegisterSchema } from "../../Pages/RegisterPage/registerSchema"
import { LoginSchema } from "../../Pages/LoginPage/loginSchema"


export const FormularioLogin = ({userLogin, loading}) => {
    
    const { register, handleSubmit, reset, formState: {errors} } = useForm({
        mode: "onBlur",
        resolver: yupResolver(LoginSchema)
    });

    const submit = (data) => {
        userLogin(data)
        reset()
    };

    return (
        <Form noValidate onSubmit={handleSubmit(submit)}>
            <InputAndLabel label="Email" type="Email" name="Email" placeholder="Digite aqui seu email" register={register("email")}/>
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            
            <InputAndLabel label="Senha" type="password" name="password" placeholder="Digite aqui sua senha" register={register("password")}/>
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

            <button disabled={loading} type="submit"> { loading ? "Carregando.." : "Entrar"} </button>
        </Form>
    )
}


export const FormularioRegister = ({userRegister, loading}) => {
   
    const { register, handleSubmit, formState: {errors}, reset } = useForm({
        mode: "onBlur",
        resolver: yupResolver(RegisterSchema)
    });


    const submit = (data) => {
        const newUser = {
            name: data.name,
            email: data.email,
            password: data.password,
            bio: data.bio,
            contact: data.contact,
            course_module: data.course_module
        }
        
        userRegister(newUser)
        reset()
    };
    
    return (
       <Form noValidate onSubmit={handleSubmit(submit)}>
            <InputAndLabel label="Nome" type="text" name="Name" placeholder="Digite aqui seu nome" register={register("name")}/>
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

            <InputAndLabel label="Email" type="Email" name="Email" placeholder="Digite aqui seu email" register={register("email")}/>
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

            <InputAndLabel label="Senha" type="password" name="password" placeholder="Digite aqui sua senha" register={register("password")}/>
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

            <InputAndLabel label="Confirmar Senha" type="password" name="confirmPassword" placeholder="Digite novamente sua senha" register={register("confirmPassword")}/>
            {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}

            <InputAndLabel label="Bio" type="text" name="bio" placeholder="Fale sobre você" register={register("bio")}/>
            {errors.bio && <ErrorMessage>{errors.bio.message}</ErrorMessage>}

            <InputAndLabel label="Contato" type="number" name="contato" placeholder="Opção de contato" register={register("contact")}/>
            {errors.contact && <ErrorMessage>{errors.contact.message}</ErrorMessage>}

            <InputSelect label="Selecionar módulo" register={register("course_module")}/>
            {errors.course_module && <ErrorMessage>{errors.course_module.message}</ErrorMessage>}

            <button type="submit" disabled={loading}>{ loading ? "Cadastrando..." : "Cadastrar"}</button>
           
       </Form>
    );
}