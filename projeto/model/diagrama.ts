
class login{
    nome: string;
    login: string;
    senha: string;

    constructor(nome: string, login: string, senha:string){
        this.nome = nome;
        this.login = login;
        this.senha = senha;
    }

    cadastrar(){

    }
}
    
class Professor extends login{
    
    materias: string;

    constructor(materias: string, nome: string, login: string, senha: string){
        super(nome, login, senha)
        this.materias = materias;
    }

    Cadastrar_Notas(){}

    editar_notas(){}

    excluir_notas(){}

    cadastrar_atividades(){}

    editar_atividade(){}

    excluir_atividade(){}
}

  class Aluno extends login{
     
    turma: string;

    constructor(turma: string, nome: string, login: string, senha: string){
        super(nome, login, senha)
        this.turma = turma
    }

    }

class Atividades{

    descricao: string;
    dat_entrega: string;

    constructor(descricao: string, dat_entrega: string){
        this.descricao = descricao;
        this.dat_entrega = dat_entrega;
    }

    media(){}
}

class Notas{
    professor: Professor;
    atividade: Atividades;
    notas: number;

    constructor(professor: Professor, atividade: Atividades, notas:number){
        this.professor = professor;
        this.atividade = atividade;
        this.notas = notas;
    }

}