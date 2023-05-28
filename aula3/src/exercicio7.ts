import { Area } from "./area";
import { Curso } from "./curso";
import { Turma } from "./turma";
import { Turno } from "./turno";

const nodejs = new Curso('Introdução ao NodeJS', Area.EXATAS);
const bancoDeDados = new Curso('Bando de Dados', Area.EXATAS);

const turma1 = new Turma(1, 'Turma 11111', Turno.MANHA, nodejs);
const turma2 = new Turma(2, 'Turma 22222', Turno.TARDE, nodejs);
const turma4 = new Turma(4, 'Turma 44444', Turno.MANHA, bancoDeDados);

const turma4Editar = new Turma(4, 'Turma 4 Editada', Turno.NOITE, bancoDeDados);

let turmas: Turma[] = [];

function adicionar(turma: Turma) {
    turmas.push(turma);
}
function excluir(turma: Turma) {
    const index = turmas.indexOf(turma, 0);
    if (index > -1) {
        turmas.splice(index, 1);        
    }
}
function alterar(turma: Turma) {
    const turmaCadastrada = turmas.find((t: Turma) => t.getId === turma.getId );
    if(turmaCadastrada) {
        excluir(turmaCadastrada);
        adicionar(turma);
    } else {
        console.log('Turma não encontrada');
    }
}
function buscar(id: number) {
    const obj = turmas.find((t: Turma) => t.getId === id );
    console.log('Resultado método buscar');
    console.log(obj);
    return obj;
}
function imprimir() {
    turmas.forEach(turma => {
        console.log(turma);
    });
}
console.log('Adicionar turmas 1,2 e 4');
adicionar(turma1);
adicionar(turma2);
adicionar(turma4);
imprimir();
console.log('---------------------');
excluir(turma2);
console.log('Turma excluida!');
imprimir();
console.log('---------------------');
buscar(1);
console.log('---------------------');
console.log('Editar Turma');
alterar(turma4Editar);
console.log('---------------------');
imprimir();
console.log('Instanciando turma com validacao no Decorator invalida!');
// Tamanho invalido, turma3
const turma3 = new Turma(3, 'Turma 3', Turno.NOITE, nodejs);