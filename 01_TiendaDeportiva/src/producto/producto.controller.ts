import {Body, Controller, Get, Param, Post, Res} from "@nestjs/common";
import {ProductoService} from "./producto.service";
import {Producto} from "../../interfaces/producto";

@Controller('/producto')
export class ProductoController {
    constructor(private readonly _productoService: ProductoService ) {
    }

    @Get('lista')
    listarProductos(@Res() res) {
        const array = this._productoService.bddProductos;
        res.render('productos/listar_producto', {arrayProductos: array})
    }

    @Get('crear')
    crearProducto(@Res() res) {
        res.render('productos/crear_producto')
    }

    @Post('crear')
    crearProductoPost(@Body() producto: Producto, @Res() res) {
        producto.idprod = Number(producto.idprod);
        this._productoService.registrarProducto(producto);
        res.redirect('/producto/lista');
    }

    @Get('editar/:idProveedor')
    editarProducto(@Res() response, @Param('idProveedor') idproducto: string) {
        const productoEncontrado = this._productoService.buscarPorId(+idproducto);
        response.render('productos/editar_producto',{
            producto: productoEncontrado
        })
    }

    @Post('editar/:idProveedor')
    editarProductoPost(@Res() res, @Param('idProveedor') idproducto: string, @Body() producto: Producto) {
        console.log(producto);
        producto.idprod =+idproducto;
        this._productoService.actualizarProducto(producto, +idproducto);
        res.redirect('/producto/lista');
    }

    @Post('buscar')
    buscar(@Res() res, @Body('busqueda') busqueda:string) {
        const listaBusqueda: Producto[] = this._productoService.buscarPorNombre(busqueda);
        console.log(listaBusqueda);
        console.log(busqueda);
        if (listaBusqueda != null) {
            res.render('productos/listar_producto', {arrayProductos: listaBusqueda})
        } else {
            res.redirect('/producto/lista');
        }
    }

    //eliminar
    @Post('eliminar')
    eliminarProducto(@Res() res, @Body('id') id:string) {
        this._productoService.eliminarPorId(Number(id));
        res.redirect('/producto/lista');
    }
}