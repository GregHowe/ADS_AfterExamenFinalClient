export class StudentDto {
    id: number;
    nombre: string;
    apellido: string;
    codigo : string;
    idTipoNivelEstudio : string;
    scholarship : number;
    isActive : boolean;

    constructor() {}

    public setStudentId(value: number): StudentDto {
        this.id = value;
        return this;
    }

    public setFirstName(value: string): StudentDto {
        this.nombre = value;
        return this;
    }

    public setLastName(value: string): StudentDto {
        this.apellido = value;
        return this;
    }

    public setStudentType(value: string): StudentDto {
        this.idTipoNivelEstudio = value;
        return this;
    }

    public setStudentCode(value: string): StudentDto {
        this.codigo = value;
        return this;
    }
    
    public setIsActive(value: boolean): StudentDto {
        this.isActive = value;
        return this;
    }

    public setAmount(value: number): StudentDto {
        this.scholarship = value;
        return this;
    }
}
