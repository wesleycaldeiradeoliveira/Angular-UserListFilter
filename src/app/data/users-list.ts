import { IUser } from "../interfaces/user/user.interface";

 export const UserList: IUser [] = [
    {
        nome: "Wesley Caldeira",
        email: "Wesley@example.com",
        senha: "123",
        idade: 28,
        endereco: {
            rua: "Rua do amor",
            numero: 37,
            cidade: "São Sebastião",
            estado: "DF",
            pais: "Brasil"
        },
        telefone: "61991433452",
        ativo: true,
        funcao: "Desenvolvedor",
        dataCadastro: "2023-08-01T09:00:00.000Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-08-02T09:00:00.000Z"
        }
    },
    {
        nome: "Dayla",
        email: "Dayla@example.com",
        senha: "1234",
        idade: 25,
        endereco: {
            rua: "Mangueiral",
            numero: 100,
            cidade: "Samambaia",
            estado: "DF",
            pais: "Brasil"
        },
        telefone: "222222222",
        ativo: false,
        funcao: "Enfermeira",
        dataCadastro: "2023-08-05T09:00:00.000Z",
        status: {
            online: false,
            verificado: false,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-08-06T09:00:00.000Z"
        }
    },
    {
        nome: "Miguel",
        email: "Miguel@example.com",
        senha: "12345",
        idade: 18,
        endereco: {
            rua: "São José",
            numero: 5,
            cidade: "São Sebastião",
            estado: "DF",
            pais: "Brasil"
        },
        telefone: "33333333",
        ativo: true,
        funcao: "Gerente",
        dataCadastro: "2023-08-10T09:00:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-08-12T09:00:00.000Z"
        }
    },
    {
        nome: "Neuza",
        email: "Neuza@example.com",
        senha: "123456",
        idade: 50,
        endereco: {
            rua: "Rua das mães",
            numero: 80,
            cidade: "São Sebastião",
            estado: "DF",
            pais: "Brasil"
        },
        telefone: "444444444",
        ativo: false,
        funcao: "Dona de Casa",
        dataCadastro: "2023-08-15T09:00:00.000Z",
        status: {
            online: true,
            verificado: false,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-08-18T09:00:00.000Z"
        }
    },
    {
        nome: "Reinaldo",
        email: "Reinaldo@example.com",
        senha: "1234567",
        idade: 35,
        endereco: {
            rua: "Centro",
            numero: 60,
            cidade: "Tabocas",
            estado: "BA",
            pais: "Brasil"
        },
        telefone: "555555555",
        ativo: true,
        funcao: "Mestre de obra",
        dataCadastro: "2023-08-20T09:00:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-08-25T09:00:00.000Z"
        }
    }
];