import { NegociacaoController } from './controllers/NegociacaoController';

const controller = new NegociacaoController();

// Comentário Blaus => 
//Nao deverá ser gerado no JS por causa da configuração no tsconfig.json
$('.form').submit(controller.adiciona.bind(controller))
$('#botao-importa').click(controller.importaDados.bind(controller))