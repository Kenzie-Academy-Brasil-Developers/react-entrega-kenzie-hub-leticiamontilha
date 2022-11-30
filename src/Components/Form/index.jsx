// import Eye from "../../Assets/img/eye.svg"
import { ButtonEntrar } from "../Button"
import { InputBio, InputEmail, InputName, InputNumber, InputPassword, InputSelect } from "../Input"
import { LabelInput } from "../Input/style"
import { Form } from "./style"

export const FormularioLogin = () => {
    return (
        <Form>
            <InputEmail />
            
            <LabelInput htmlFor="passaword">Senha</LabelInput>
            
            <div>
                <InputPassword />
                {/* <img src={Eye} alt="" /> */}
            </div>
            
            <ButtonEntrar type="submit">Entrar</ButtonEntrar>
            
        </Form>
    )
}


export const FormularioRegister = () => {
    return (
       <Form >
            <LabelInput htmlFor="">Nome</LabelInput>
            <InputName />

            <InputEmail />

            <LabelInput htmlFor="">Senha</LabelInput>
            <InputPassword />

            <LabelInput htmlFor="">Senha</LabelInput>
            <InputPassword />
            
            <LabelInput htmlFor="">Bio</LabelInput>
            <InputBio />

            <LabelInput htmlFor="">Contato</LabelInput>
            <InputNumber />

            <LabelInput htmlFor="">Selecionar módulo</LabelInput>
            <InputSelect />

            <button type="submit">Cadastrar</button>
       </Form>
    )
}