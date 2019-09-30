import {Injectable} from "@nestjs/common";
import {Contacto} from "../../interfaces/contacto";

@Injectable()
export class InicioService {

    bddContacto = [];
    idContacto = 1;

    constructor() {
        const m1 = {
            idcontacto: 1,
            nombre: 'Cliente a',
            correo: 'correo1@mail.com',
            mensaje: 'Muy buena atención'
        };
        this.listarContactos(m1);
        const m2 = {
            idcontacto: 2,
            nombre: 'Cliente b',
            correo: 'correo2@mail.com',
            mensaje: 'Pueden mejorar'
        };
        this.listarContactos(m2);
    }

    listarContactos(contacto) {
        contacto.idcli = this.idContacto;
        this.idContacto++;
        this.bddContacto.push(contacto);
        return contacto;
    }

    registrarContacto(nuevoContacto: Contacto): Contacto {
        nuevoContacto.idcontacto = this.idContacto;
        this.idContacto++;
        this.bddContacto.push(nuevoContacto);
        return nuevoContacto;
    }
}
