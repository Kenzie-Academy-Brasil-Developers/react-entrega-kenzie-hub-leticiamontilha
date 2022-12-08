import { yupResolver } from "@hookform/resolvers/yup"
import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { TechContext } from "../../Contexts/TechContext"
import { ErrorMessage } from "../Form/style"
import { AddTechSchema } from "./addTechSchema"
import { EditTechSchema } from "./editTechSchema"
import { FormModal, Modal } from "./style"

export const ModalAddTech = () => {
    
    const { techCreate, setModalAdd } = useContext(TechContext)

    const { register, handleSubmit, reset, formState: {errors} } = useForm({
        mode: "onBlur",
        resolver: yupResolver(AddTechSchema)
    })

    const submit = (data) => {
        techCreate(data)
        reset()
        setModalAdd(false)
    };

 
    return (
        <Modal>
            <div>
                <h5>Cadastrar Tecnologia</h5>
                <button onClick={() => setModalAdd(false)}>X</button>
            </div>
            <FormModal noValidate onSubmit={handleSubmit(submit)}>
                <label htmlFor="">Nome</label>
                <input type="text" placeholder="Digite o nome da tecnologia" {...register("title")}/>
                {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
                
                <label htmlFor="">Selecionar Status</label>
                <select name="" id="" {...register("status")}>
                    <option value="">Selecione o status</option>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                {errors.status && <ErrorMessage>{errors.status.message}</ErrorMessage>}

                <button className="btn" type="submit" >Cadastrar Tecnologia</button>
            </FormModal>
        </Modal>
    )
}


export const ModalEditTech = () => {

    const { techEdit, setModalEdit, listTechs } = useContext(TechContext)

    const { register, handleSubmit, reset, formState: {errors} } = useForm({
        mode: "onBlur",
        resolver: yupResolver(EditTechSchema)
    })

    const submit = (data) => {
        const techId = localStorage.getItem("@TECHID")
        techEdit(techId, data)
        reset()
        setModalEdit(false)
    };

    const findTech = () => {
        const techId = localStorage.getItem("@TECHID")
        const tech = listTechs.find(elem => elem.id === techId)

        return tech
    }


    return (
        <Modal>
         <div>
            <h5>Tecnologia Detalhes</h5>
            <button onClick={() => setModalEdit(false)}>X</button>
        </div>
        <FormModal noValidate onSubmit={handleSubmit(submit)}>
            <label htmlFor="">Nome do projeto</label>
            <input type="text" disabled value={findTech().title}/>
            <label htmlFor="">Status</label>
          
            <select {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </select>
            
            {errors.status && <ErrorMessage>{errors.status.message}</ErrorMessage>}
           
            <button className="btnSalvar" type="submit">Salvar Alterações</button>
            <button>Excluir</button>
        </FormModal>
        </Modal>
    )
}