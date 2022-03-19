import {Request, Response} from 'express';

import PacienteController from '../../controllers/paciente.controller';

import { PromiseResponse } from '../../interfaces/promise_response.interface';

export const NuevoPaciente = async (req: Request, res: Response): Promise<any> => {
    const paciente = req.body;
    const {userId}: Request['user'] = req.user;

    try {
        const response: PromiseResponse = await new PacienteController().CrearPaciente(paciente, userId);

        res.status(response.status).json(response);
    } catch (error: any) {
        res.status(error.status).json(error);
    }
}

export const ListadoPacientes = async (req: Request, res: Response): Promise<any> => {
    const {userId}: Request['user'] = req.user;
    const {id, ...queryParams}: Request['query'] = req.query;

    const searchParams = {
        veterinario_id: userId,
        ...(id && {_id: id}),
        ...queryParams
    }
    
    try {
        const response = await new PacienteController().ListadoPacientes(searchParams);

        res.status(response.status).json(response);
    } catch (error: any) {
        res.status(error.status).json(error);
    }
}