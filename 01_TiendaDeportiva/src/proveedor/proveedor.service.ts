import {Injectable} from "@nestjs/common";
import {Proveedor} from "../../interfaces/proveedor";

@Injectable()
export class ProveedorService {
    bddProveedor = [];
    idProveedor = 1;


    constructor() {
        const c1 = {
            idprov: 1,
            nombreproveedor: 'Caltex',
            direccion: 'Los Álamos',
            telefono: '2456451'
        };
        this.listarProveedor(c1);
        const c2 = {
            idprov: 1,
            nombreproveedor: 'Favstar',
            direccion: 'Ponciano Bajo',
            telefono: '3200101'
        };
        this.listarProveedor(c2);
        const c3 = {
            idprov: 1,
            nombreproveedor: 'Lanatex',
            direccion: 'La Bota II',
            telefono: '2552010'
        };
        this.listarProveedor(c3);
    }

    listarProveedor(proveedor) {
        proveedor.idprov = this.idProveedor;
        this.idProveedor++;
        this.bddProveedor.push(proveedor);
        return proveedor;
    }

    registrarProveedor(nuevoProv: Proveedor): Proveedor {
        nuevoProv.idprov = this.idProveedor;
        this.idProveedor++;
        this.bddProveedor.push(nuevoProv);
        return nuevoProv;
    }

    buscarPorId(id: number):Proveedor {
        return this.bddProveedor.find(
            (proveedor) => {
                return proveedor.idprov === id;
            }
        );
    }

    buscarPorNombre(nombre: string):Proveedor[] {
        if(nombre!=='' && nombre!==null){
            return this.bddProveedor.filter(
                (proveedor) => {
                    return proveedor.nombreproveedor.toUpperCase().includes(nombre.toUpperCase());
                }
            );
        }else{
            return this.bddProveedor;
        }
    }

    actualizarProveedor(proveedorEncontrado: Proveedor, id:number):Proveedor[] {
        const indice = this.bddProveedor.findIndex(
            (proveedor) => {
                return proveedor.idprov === id
            }
        );
        proveedorEncontrado.idprov = this.bddProveedor[indice].idprov;
        this.bddProveedor[indice] = proveedorEncontrado;
        return this.bddProveedor;
    }

    eliminarPorId(id:number):Proveedor[]{
        const indice = this.bddProveedor.findIndex(
            (proveedor) => {
                return  proveedor.idprov === id
            }
        );
        console.log(indice);
        this.bddProveedor.splice(indice,1);
        return this.bddProveedor;
    }
}
