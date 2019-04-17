import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mensaje } from './DTO/entities/mensaje.entity';
import { Repository } from 'typeorm';
import { CreateMensajeDto } from './DTO/create-mensaje-dto';

@Injectable()
export class MensajesService {
    constructor(
        @InjectRepository(Mensaje)
    private readonly mensajeRepository:Repository<Mensaje>
    ){}

    async getAll():Promise<Mensaje[]>{
        return await this.mensajeRepository.find();
    }

    async createMensaje(mensajeNuevo: CreateMensajeDto):Promise<Mensaje>{
        const nuevoM = new Mensaje();
        nuevoM.mensaje  = mensajeNuevo.mensaje;
        nuevoM.nick = mensajeNuevo.nick;
        return await this.mensajeRepository.save(nuevoM);
    }
    
    async updateMensaje(idMensaje:number, mensajeUpdate:CreateMensajeDto):Promise<Mensaje>{
        const upMensaje = await this.mensajeRepository.findOne(idMensaje);
        upMensaje.nick = mensajeUpdate.nick;
        upMensaje.mensaje = mensajeUpdate.mensaje;
        return await this.mensajeRepository.save(upMensaje);
    }

    async deleteMensaje(idMensaje:number):Promise<any>{
        return await this.mensajeRepository.delete(idMensaje);
    }
}
