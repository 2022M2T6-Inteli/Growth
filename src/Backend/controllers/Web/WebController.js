const AuthService = require("../../services/AuthService");

class WebController {
    static renderWithPage = (req, res, params = {}) => {
        let logado = true;
        try {
            AuthService.verifyToken(req.cookies.AuthToken)
        } catch (err) {
            logado = false;
        }

        const conteudo = params.conteudo ? (__dirname + '/../../../Frontend/Main/' + params.conteudo) : undefined
        delete params.conteudo;

        return res.render('Main/Componentes/page', {
            logado: logado,
            conteudo: conteudo,
            ...params,
        });
    }
}

module.exports = WebController;