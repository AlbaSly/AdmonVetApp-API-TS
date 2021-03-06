import { AuthRouter } from "./auth/auth.routes";
import { IRouteDeclarations } from "../interfaces/route_declarations.interface";
import { UsuarioRouter } from "./usuarios/usuario.routes";
import { PacienteRouter } from "./pacientes/pacientes.routes";

export const ROUTE_DECLARATIONS:IRouteDeclarations = {
    path: '/api',
    routers: [
        AuthRouter,
        UsuarioRouter,
        PacienteRouter
    ]
}