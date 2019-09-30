import {Body, Controller, Get, Param, Post, Res} from "@nestjs/common";
import {ProveedorService} from "./proveedor.service";
import {Proveedor} from "../../interfaces/proveedor";

@Controller('/proveedor')
export class ProveedorController {
    constructor(private readonly _proveedorService: ProveedorService ) {
    }

    @Get('lista')
    listarProveedor(@Res() res) {
        const array = this._proveedorService.bddProveedor;
        res.render('proveedor/listar_proveedor', {arrayProveedor: array})
    }

    @Get('crear')
    crearProveedor(@Res() res) {
        res.render('proveedor/crear_proveedor')
    }

    @Post('crear')
    crearProveedorPost(@Body() proveedor: Proveedor, @Res() res) {
        proveedor.idprov = Number(proveedor.idprov);
        this._proveedorService.registrarProveedor(proveedor);
        res.redirect('/proveedor/lista');
    }

    @Get('editar/:idProveedor')
    editarProveedor(@Res() response, @Param('idProveedor') idproveedor: string) {
        const proveedorEncontrado = this._proveedorService.buscarPorId(+idproveedor);
        response.render('proveedor/editar_proveedor',{
            proveedor: proveedorEncontrado
        })
    }

    @Post('editar/:idProveedor')
    editarProveedorPost(@Res() res, @Param('idProveedor') idproveedor: string, @Body() proveedor: Proveedor) {
        console.log(proveedor);
        proveedor.idprov =+idproveedor;
        this._proveedorService.actualizarProveedor(proveedor, +idproveedor);
        res.redirect('/proveedor/lista');
    }

    @Post('buscar')
    buscar(@Res() res, @Body('busqueda') busqueda:string) {
        const listaBusqueda: Proveedor[] = this._proveedorService.buscarPorNombre(busqueda);
        console.log(listaBusqueda);
        console.log(busqueda);
        if (listaBusqueda != null) {
            res.render('proveedor/listar_proveedor', {arrayProveedor: listaBusqueda})
        } else {
            res.redirect('/proveedor/lista');
        }
    }

    //eliminar
    @Post('eliminar')
    eliminarProveedor(@Res() res, @Body('id') id:string) {
        this._proveedorService.eliminarPorId(Number(id));
        res.redirect('/proveedor/lista');
    }
}