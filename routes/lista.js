var express = require('express'); 
var router = express.Router();    

router.get('/', (req, res) => {
  const meusItens = [
    { id: 1, nome: 'Item Alfa', descricao: 'Descrição detalhada do Item Alfa.' },
    { id: 2, nome: 'Item Beta', descricao: 'O segundo item da nossa lista dinâmica.' },
    { id: 3, nome: 'Item Gama', descricao: 'Terceiro e último item exemplo.' },
    { id: 4, nome: 'Item Delta', descricao: 'Mais um item para testar.' },
    { id: 5, nome: 'Item Épsilon', descricao: 'Descrição detalhada do Item Épsilon.' },
    { id: 6, nome: 'Item Zeta', descricao: 'O segundo item da nossa lista dinâmica.' },
    { id: 7, nome: 'Item Eta', descricao: 'Terceiro e último item exemplo.' },
    { id: 8, nome: 'Item Teta', descricao: 'Mais um item para testar.' },
    { id: 9, nome: 'Item Iota', descricao: 'Descrição detalhada do Item Alfa.' },
    { id: 10, nome: 'Item Kappa', descricao: 'O segundo item da nossa lista dinâmica.' },
    { id: 11, nome: 'Item Mi', descricao: 'Terceiro e último item exemplo.' },
    { id: 12, nome: 'Item Ni', descricao: 'Mais um item para testar.' },
    { id: 13, nome: 'Item Csi', descricao: 'Descrição detalhada do Item Alfa.' },
    { id: 14, nome: 'Item Ómicron', descricao: 'O segundo item da nossa lista dinâmica.' },
    { id: 15, nome: 'Item Pi', descricao: 'Terceiro e último item exemplo.' },
    { id: 16, nome: 'Item Ró', descricao: 'Mais um item para testar.' },
    { id: 17, nome: 'Item Sigma', descricao: 'Descrição detalhada do Item Alfa.' },
    { id: 18, nome: 'Item Tau', descricao: 'O segundo item da nossa lista dinâmica.' },
    { id: 19, nome: 'Item Upsilon', descricao: 'Terceiro e último item exemplo.' },
    { id: 20, nome: 'Item Fi', descricao: 'Mais um item para testar.' },
    { id: 21, nome: 'Item Chi', descricao: 'Descrição detalhada do Item Alfa.' },
    { id: 22, nome: 'Item Psi', descricao: 'O segundo item da nossa lista dinâmica.' },
    { id: 23, nome: 'Item Ômega', descricao: 'Terceiro e último item exemplo.' }
  ];

  res.render('lista', {
    titulo: 'Minha Lista Dinâmica',
    itensParaView: meusItens
  });
});

module.exports = router;
