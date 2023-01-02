export enum Nivel{
    "Informativa",
    "Urgente", 
    "Bloqueante"
}

export interface ITarea{
    titulo: string,
    descripcion?: string,
    completada: boolean | undefined,
    urgencia?: Nivel,
    resumen: () => string
    
}