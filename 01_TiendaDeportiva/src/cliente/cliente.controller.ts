import {Body, Controller, Get, Param, Post, Res} from "@nestjs/common";
import {Cliente} from "../../interfaces/cliente";
import {ClienteService} from "./cliente.service";

@Controller('/cliente')
export class ClienteController {
    constructor(private readonly _clienteService: ClienteService ) {
    }

    @Get('lista')
    listarClientes(@Res() res) {
        const array = this._clienteService.bddClientes;
        res.render('cliente/listar_cliente', {arrayClientes: array})
    }

    @Get('crear')
    crearCliente(@Res() res) {
        res.render('cliente/crear_cliente')
    }

    @Post('crear')
    crearClientePost(@Body() cliente: Cliente, @Res() res) {
        cliente.idcli = Number(cliente.idcli);
        this._clienteService.registrarCliente(cliente);
        res.redirect('/cliente/lista');
    }

    @Get('editar/:idProveedor')
    editarCliente(@Res() response, @Param('idProveedor') idcliente: string) {
        const clienteEncontrado = this._clienteService.buscarPorId(+idcliente);
        response.render('cliente/edita_cliente',{
            cliente: clienteEncontrado
        })
    }

    @Post('editar/:idProveedor')
    editarClientePost(@Res() res, @Param('idProveedor') idcliente: string, @Body() cliente: Cliente) {
        console.log(cliente);
        cliente.idcli = parseInt(idcliente)
        this._clienteService.actualizarCliente(cliente, +idcliente);
        res.redirect('/cliente/lista');
    }

    @Post('buscar')
    buscar(@Res() res, @Body('busqueda') busqueda:string) {
        const listaBusqueda: Cliente[] = this._clienteService.buscarPorNombre(busqueda);
        console.log(listaBusqueda);
        console.log(busqueda);
        if (listaBusqueda != null) {
            res.render('cliente/listar_cliente', {arrayClientes: listaBusqueda})
        } else {
            res.redirect('/cliente/lista');
        }
    }

    //eliminar
    @Post('eliminar/:id')
    eliminarCliente(@Res() res, @Param('id') id:string) {
        this._clienteService.eliminarPorId(Number(id));
        res.redirect('/cliente/lista');
    }

}
