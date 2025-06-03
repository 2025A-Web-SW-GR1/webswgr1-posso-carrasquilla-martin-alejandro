import { Controller, Get, Param, Query, Headers, Post, Body, HttpCode, NotFoundException} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/ejemplo/:id')
  @HttpCode(200)
  ejemplo(
    @Param('id') id, //Parametro de ruta llamado 'id'
    @Query('hola') hola, //Parametro de consulta llamado 'hola'
    @Headers('escuela') escuela, // Cabecera con nombre 'escuela'
    @Body('monto') monto, // Cuerpo con nombre 'monto'

  ): string {
    return id + hola + ' Funcionando ' + escuela + monto;
  }


  @Get('/casa')
  @HttpCode(200)
  ejercicio(
    @Query('idCasa') idCasa,

  ): string{
    const casas:Object[] = [{id:1, nombre:"Casa 1"}, {id:2, nombre:"Casa 2"}];
    if(idCasa == 1 || idCasa == 2){
      return JSON.stringify(casas[idCasa-1]);
    }else{
      throw new NotFoundException('No econtrado');
    }
  }

}
