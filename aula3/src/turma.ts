import { Curso } from "./curso";
import { Turno } from "./turno";

function validarTamanho(target: any, propertyKey: any) {    
    const newKey = `_${propertyKey}`;    
    Object.defineProperty(target, propertyKey, {
        get() {            
            return this[newKey];
        },
        set(newVal) {            
            if(newVal.length < 10) {
                console.log(`Descrição: ${newVal} deve ter mais de 9 caracteres.`);
                throw new Error(`Descrição: ${newVal} deve ter mais de 9 caracteres.`);
            }
            return newVal;
        }
    });
}

export class Turma {
    private id: number;
    
    //@validarTamanho
    descricao: string;
    turno: Turno;
    curso: Curso;
    constructor(id: number, descricao: string, turno: Turno, curso: Curso) {
        this.id = id;
        this.descricao = descricao;
        this.turno = turno;
        this.curso = curso;
    }
    protected generateId(): number {
        return Math.floor(Math.random() * 100);
    }

    get getId(): number {
        return this.id;
    }

}

