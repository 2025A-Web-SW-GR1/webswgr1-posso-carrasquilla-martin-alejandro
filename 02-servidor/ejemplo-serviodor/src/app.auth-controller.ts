import { Controller, Get, Session, Post, Body, Req, Res, Query } from '@nestjs/common';
import { CasaService } from './casa/casa.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly casaService: CasaService) { }

    @Get('login-vista')
    loginVista(@Res() res: any, @Query() query: { mensaje?: string }) {
        res.render('login', { mensaje: query.mensaje ?? '' });
    }

    @Post('login')
    async login(
        @Body() login: { username: string; password: string; rest?: boolean },
        @Session() session: Record<string, any>,
        @Res() res: any
    ) {
        try {
            const usuario = await this.casaService.buscarUnoPorUsername(login.username);
            if (usuario.password === login.password) {
                session.user = usuario;
                return res.redirect('/auth/casas');
            }
            return res.redirect('/auth/login-vista?mensaje=Usuario y password no coinciden');
        } catch {
            return res.redirect('/auth/login-vista?mensaje=Usuario no encontrado');
        }
    }

    @Get('logout')
    logout(@Req() req: any, @Res() res: any) {
        req.session.destroy(() => { });
        res.redirect('/auth/login-vista');
    }

    @Get('casas')
    async listarCasas(@Res() res: any, @Session() session: Record<string, any>) {
        if (!session.user) {
            return res.redirect('/auth/login-vista?mensaje=Debe iniciar sesión');
        }
        const casas = await this.casaService.obtenerTodos();
        res.render('casas', { casas });
    }
}