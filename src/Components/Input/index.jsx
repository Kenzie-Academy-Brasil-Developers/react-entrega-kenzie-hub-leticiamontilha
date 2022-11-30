import { InputTypeEmail, InputTypeNumber, InputTypePassword, InputTypeSelect, InputTypeText, LabelInput, OptionSelect } from "./style"

export const InputEmail = () => {
    return (
        <>
         <LabelInput htmlFor="email">Email</LabelInput>
         <InputTypeEmail type="email" name="email" id="" placeholder="Digite seu email aqui"/>
        </>
    )
}


export const InputPassword = () => {
    return (
        <InputTypePassword type="password" name="passaword" id="" placeholder="Digite aqui sua senha" />
    )
}


export const InputName = () => {
    return (
        <InputTypeText type="text" name="name" id="" placeholder="Digite aqui seu nome" />
    )
}


export const InputBio = () => {
    return (
        <InputTypeText type="text" name="bio" id="" placeholder="Fale sobre você" />
    )
}


export const InputNumber = () => {
    return (
        <InputTypeNumber type="number" name="contato" id="" placeholder="Opção de contato" />      
    )
}

export const InputSelect = () => {
    return (
        <InputTypeSelect name="modulo" id="modulo">
            <OptionSelect value="Primeiro Modulo">Primeiro Modulo</OptionSelect>
            <OptionSelect value="Segundo Modulo">Segundo Modulo</OptionSelect>
            <OptionSelect value="Terceiro Modulo">Terceiro Modulo</OptionSelect>
            <OptionSelect value="Quarto Modulo">Quarto Modulo</OptionSelect>
            <OptionSelect value="Quinto Modulo">Quinto Modulo</OptionSelect>
            <OptionSelect value="Sexto Modulo">Sexto Modulo</OptionSelect>
        </InputTypeSelect>
    )
}