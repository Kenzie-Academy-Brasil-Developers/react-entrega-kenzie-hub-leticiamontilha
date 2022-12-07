import React, { useContext } from "react"
import { UserContext } from "../../Contexts/UserContext"
import { FormModal, Modal } from "./style"

export const ModalAddTech = () => {

    
    const { setModalAdd } = useContext(UserContext)
 
    return (
        <Modal>
            <div>
                <h5>Cadastrar Tecnologia</h5>
                <button onClick={() => setModalAdd(false)}>X</button>
            </div>
            <FormModal>
                <label htmlFor="">Nome</label>
                <input type="text" placeholder="Digite o nome da tecnologia"/>
                <label htmlFor="">Selecionar Status</label>
                <select name="" id="">
                    <option value="">Selecione o status</option>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </select>
                <button className="btn" type="submit">Cadastrar Tecnologia</button>
            </FormModal>
        </Modal>
    )
}


export const ModalEditTech = () => {

    const { setModalEdit } = useContext(UserContext)

    return (
        <Modal>
         <div>
            <h5>Tecnologia Detalhes</h5>
            <button onClick={() => setModalEdit(false)}>X</button>
        </div>
        <FormModal>
            <label htmlFor="">Nome do projeto</label>
            <input type="text" placeholder=""/>
            <label htmlFor="">Status</label>
            <select name="" id="">
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </select>
            <button className="btnSalvar">Salvar Alterações</button>
            <button>Excluir</button>
        </FormModal>
        </Modal>
    )
}