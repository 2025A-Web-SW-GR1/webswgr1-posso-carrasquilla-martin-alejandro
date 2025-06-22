import { Controller, Get, HttpCode, Query, NotFoundException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }



  /*  Realizar servicio REST con la siguiente configuración:
  - Obtener uno
  Método: GET
  URL: /casa
  Codigo Respuesta: 200
  Return : [{ id:1, nombre:"Casa 1"}, { id:2, nombre:"Casa 2"}]
  */
  @Get('/casa')
  @HttpCode(200)
  getCasa(
    @Query('idCasa') idCasa,
  ): string {
    const casas: Object[] = [{ id: 1, nombre: "Casa 1" }, { id: 2, nombre: "Casa 2" }];
    if (idCasa == 1 || idCasa == 2) {
      return JSON.stringify(casas[idCasa - 1]);
    } else {
      throw new NotFoundException('No encontrado');
    }
  }
}
