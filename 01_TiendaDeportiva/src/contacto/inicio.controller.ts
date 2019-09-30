import {Body, Controller, Get, Post, Res} from "@nestjs/common";
import {InicioService} from "./inicio.service";
import {Contacto} from "../../interfaces/contacto";

@Controller('/contacto')
export class InicioController {
    constructor(private readonly _inicioService: InicioService ) {
    }
// Contacto
    @Get('lista')
    listarContactos(@Res() res) {
        const array = this._inicioService.bddContacto;
        res.render('contacto/listar_contactos', {arrayContacto: array})
    }

    @Get('inicio')
    mostrarInicio(@Res() res) {
        res.render('inicio/Index')
    }

    @Get('crearCont')
    crearContacto(@Res() res) {
        res.render('contacto/formulario_contacto')
    }

    @Post('crearCont')
    crearContactoPost(@Body() contacto: Contacto, @Res() res) {
        contacto.idcontacto = Number(contacto.idcontacto);
        this._inicioService.registrarContacto(contacto);
        res.redirect('/cliente/lista');
    }
}