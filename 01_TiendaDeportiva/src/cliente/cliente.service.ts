import {Injectable} from "@nestjs/common";
import {Cliente} from "../../interfaces/cliente";

@Injectable()
export class ClienteService {
    bddClientes = [];
    idCliente = 1;

    constructor() {
        const c1 = {
            idcli:2,
            nombreCompleto: 'Pepito Uno',
            cedula: '1723464465',
            direccion: 'Sierra Hermosa',
            telefono: '4518606'
        };
        this.listarClientes(c1);
        const c2 = {
            idcli:1,
            nombreCompleto: 'Juanito Dos',
            cedula: '0501598411',
            direccion: 'Chillogallo',
            telefono: '4518606'
        };
        this.listarClientes(c2);
    }

    listarClientes(cliente) {
        cliente.idcli = this.idCliente;
        this.idCliente++;
        this.bddClientes.push(cliente);
        return cliente;
    }

    registrarCliente(nuevoCli: Cliente): Cliente {
        nuevoCli.idcli = this.idCliente;
        this.idCliente++;
        this.bddClientes.push(nuevoCli);
        return nuevoCli;
    }

    buscarPorId(id: number):Cliente {
        return this.bddClientes.find(
            (cliente) => {
                return cliente.idcli === id;
            }
        );
    }

    buscarPorNombre(nombre: string):Cliente[] {
        if(nombre!=='' && nombre!==null){
            return this.bddClientes.filter(
                (cliente) => {
                    return cliente.nombreCompleto.toUpperCase().includes(nombre.toUpperCase());
                }
            );
        }else{
            return this.bddClientes;
        }
    }

    actualizarCliente(clienteEncontrado: Cliente, id:number):Cliente[] {
        const indice = this.bddClientes.findIndex(
            (cliente) => {
                return cliente.idcli === id
            }
        );
        clienteEncontrado.idcli = this.bddClientes[indice].idcli;
        this.bddClientes[indice] = clienteEncontrado;
        return this.bddClientes;
    }

    eliminarPorId(id:number):Cliente[]{
        const indice = this.bddClientes.findIndex(
            (cliente) => {
                return  cliente.idcli === id
            }
        );
        console.log(indice);
        this.bddClientes.splice(indice,1);
        return this.bddClientes;
    }
}
