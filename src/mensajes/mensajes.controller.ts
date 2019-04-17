import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import {CreateMensajeDto} from './DTO/create-mensaje-dto';
import { MensajesService } from './mensajes.service';
@Controller('mensajes')
export class MensajesController {
    constructor(private mensajesServices: MensajesService){

    }
    @Post()
    create(@Body() createMensajeDTO:CreateMensajeDto, @Res() response){
        this.mensajesServices.createMensaje(createMensajeDTO).then(mensaje =>{
            response.status(HttpStatus.OK).json(mensaje);
        }).catch(() =>{ response.status(HttpStatus.FORBIDDEN).json({mensaje:'Error en los servicios'})});
    }

    @Get()
    getAll(@Res() response){
        this.mensajesServices.getAll().then(mensajeList =>{
            response.status(HttpStatus.OK).json(mensajeList);
        }).catch(() =>{ response.status(HttpStatus.FORBIDDEN).json({mensaje:'Error en los servicios'})});
    }

    @Put(':id')
    update(@Body() updateMensajeDTO:CreateMensajeDto, @Res() response, @Param('id') idMensaje){
       this.mensajesServices.updateMensaje(idMensaje,updateMensajeDTO).then(mensaje =>{
            response.status(HttpStatus.OK).json(mensaje);
       }).catch(() =>{ response.status(HttpStatus.FORBIDDEN).json({mensaje:'Error en los servicios'})})
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') idMensaje){
        this.mensajesServices.deleteMensaje(idMensaje).then(mensaje=>{
            response.status(HttpStatus.OK).json(mensaje);
        }).catch(() =>{ response.status(HttpStatus.FORBIDDEN).json({mensaje:'Error en los servicios'})});
    }
}
