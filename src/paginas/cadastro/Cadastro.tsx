import { ChangeEvent, FormEvent, useState } from "react";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import { Navigate } from "react-router-dom";

function Cadastro() {

    const navugate = 

    const [confirmaSenha, setConfirmaSenha] = useState<string>('');

    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
    })

    function retornar(){
        Navigate("/login")
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    function handleConfirmaSenha(e: ChangeEvent<HTMLInputElement>){
        setConfirmaSenha(e.target.value);
        console.log(confirmaSenha)
    }

    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
         
            try {
                await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
                alert('Usuário cadastrado com sucesso!');
            } catch (error) {
                alert('Erro ao cadastrar o usuário!')
            }

        }else{
            alert("Dados estão inconsistentes! Verifique os dados do usuário");
            setUsuario({...usuario, senha: ''});
            setConfirmaSenha('');
        }
    }

    return (
        <>

        </>
    )
}