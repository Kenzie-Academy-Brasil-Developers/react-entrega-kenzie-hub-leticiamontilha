import {  InputTypeSelect, LabelInput, OptionSelect, InputType } from "./style"

export const InputAndLabel = ({label, type, name, id, placeholder, register}) => {
    return (
        <>
         <LabelInput>{label}</LabelInput>
         <InputType type={type} name={name} id={id} placeholder={placeholder} {...register}/>
        </>
    )
}


export const InputSelect = ({label, register}) => {
    return (
        <>
        <LabelInput>{label}</LabelInput>
        <InputTypeSelect name="modulo" id="modulo" {...register}>
            <OptionSelect value="">Selecione o módulo</OptionSelect>
            <OptionSelect value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</OptionSelect>
            <OptionSelect value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</OptionSelect>
            <OptionSelect value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</OptionSelect>
            <OptionSelect value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</OptionSelect>
        </InputTypeSelect>
        </>
    )
}