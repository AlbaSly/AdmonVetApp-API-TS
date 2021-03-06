import {IPropietario} from './models/paciente_model.interface';

export interface FiltrosPacienteBusqueda {
    readonly veterinario_id: string
}

export interface PacienteNuevo {
    nombre: string,
    propietario: IPropietario,
    sintomas: string,
    fechaAlta: Date,
    veterinario_id: string
}

export interface PacienteEditar {
    readonly _id: string,
    readonly veterinario_id: string,
    nombre?: string,
    propietario?: IPropietario,
    sintomas?: string,
    fechaAlta?: Date,
}

export interface PacienteActualizarEstado {
    readonly _id: string,
    readonly veterinario_id: string
}

export interface PacienteEliminar {
    readonly _id: string,
    readonly veterinario_id: string
}