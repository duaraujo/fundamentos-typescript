import { Area } from "./area";

export class Curso  {
    descricao: string;
    area: Area;
    constructor( descricao: string, area: Area) {
        this.descricao = descricao;
        this.area = area;        
    }
}