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
            <OptionSelect value="Primeiro Modulo">Primeiro módulo (Introdução ao Frontend)</OptionSelect>
            <OptionSelect value="Segundo Modulo">Segundo módulo (Frontend Avançado)</OptionSelect>
            <OptionSelect value="Terceiro Modulo">Terceiro módulo (Introdução ao Backend)</OptionSelect>
            <OptionSelect value="Quarto Modulo">Quarto módulo (Backend Avançado)</OptionSelect>
        </InputTypeSelect>
        </>
    )
}