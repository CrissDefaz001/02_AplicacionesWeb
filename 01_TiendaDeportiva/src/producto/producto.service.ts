import {Injectable} from "@nestjs/common";
import {Producto} from "../../interfaces/producto";

@Injectable()
export class ProductoService {
    bddProductos = [];
    idProducto = 1;


    constructor() {
        const c1 = {
            idprod: 1,
            nombre: 'CAMISETA DEPORTIVA TSX',
            precioUnitario: 9.5,
            stock: 22
        };
        this.listarProductos(c1);
        const c2 = {
            idprod: 2,
            nombre: 'TSX CAPRI BICOLOR',
            precioUnitario: 14.0,
            stock: 20
        };
        this.listarProductos(c2);
        const c3 = {
            idprod: 2,
            nombre: 'TSX LEGGINS / LARGO SELECCION',
            precioUnitario: 16.5,
            stock: 20
        };
        this.listarProductos(c3);
    }

    listarProductos(producto) {
        producto.idprod = this.idProducto;
        this.idProducto++;
        this.bddProductos.push(producto);
        return producto;
    }

    registrarProducto(nuevoCli: Producto): Producto {
        nuevoCli.idprod = this.idProducto;
        this.idProducto++;
        this.bddProductos.push(nuevoCli);
        return nuevoCli;
    }

    buscarPorId(id: number):Producto {
        return this.bddProductos.find(
            (producto) => {
                return producto.idprod === id;
            }
        );
    }

    buscarPorNombre(nombre: string):Producto[] {
        if(nombre!=='' && nombre!==null){
            return this.bddProductos.filter(
                (producto) => {
                    return producto.nombre.toUpperCase().includes(nombre.toUpperCase());
                }
            );
        }else{
            return this.bddProductos;
        }
    }

    actualizarProducto(productoEncontrado: Producto, id:number):Producto[] {
        const indice = this.bddProductos.findIndex(
            (producto) => {
                return producto.idprod === id
            }
        );
        productoEncontrado.idprod = this.bddProductos[indice].idprod;
        this.bddProductos[indice] = productoEncontrado;
        return this.bddProductos;
    }

    eliminarPorId(id:number):Producto[]{
        const indice = this.bddProductos.findIndex(
            (producto) => {
                return  producto.idprod === id
            }
        );
        this.bddProductos.splice(indice,1);
        return this.bddProductos;
    }
}
