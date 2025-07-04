import {
    Body,
    Controller, Get,
    Post,
    Query
} from '@nestjs/common';
import { CasaService } from './casa.service';
import { FindManyOptions, Like } from 'typeorm';
import { BuscarDto } from './dto/buscar.dto';
import { Casa } from './casa.entity';
import { CrearEditarBaseDto } from './dto/crear-editar.base';

@Controller('api/casa')
export class CasaController {
    constructor(
        private readonly casaService: CasaService
    ) {

    }
    @Get()
    obtener(
        @Query() parametrosConsulta:BuscarDto,
    ) {
        const objetoBuqueda: FindManyOptions<Casa> = {};
        if (parametrosConsulta.nombre) {
            objetoBuqueda.where= {
                nombre: Like("%" + parametrosConsulta.nombre + "%"),
            }
        }
        return this.casaService.obtenerTodos(objetoBuqueda);
    }

    @Post()
    crearUno(
        @Body() parametrosCuerpo: CrearEditarBaseDto
    ){

        return this.casaService.crearUno(
            parametrosCuerpo.nombre, 
            parametrosCuerpo.valor, 
            parametrosCuerpo.imagenUrl
        );

    }

}