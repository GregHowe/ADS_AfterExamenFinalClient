export class Student {
    id: number;
    nombre: string;
    apellido: string;
    codigo: string;
    idTipoNivelEstudio: string;
    isActive: boolean;

    constructor() {}

    public setStudentId(value: number): Student {
        this.id = value;
        return this;
    }

    public setFirstName(value: string): Student {
        this.nombre = value;
        return this;
    }

    public setLastName(value: string): Student {
        this.apellido = value;
        return this;
    }

    public setStudentType(value: string): Student {
        this.idTipoNivelEstudio = value;
        return this;
    }

    public setStudentCode(value: string): Student {
        this.codigo = value;
        return this;
    }

    public setIsActive(value: boolean): Student {
        this.isActive = value;
        return this;
    }
}
