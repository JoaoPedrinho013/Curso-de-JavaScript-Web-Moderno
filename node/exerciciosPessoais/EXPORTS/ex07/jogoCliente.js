const { Jogador, Inimigo, Jogo } = require('./jogo')
const _ = require('lodash')

const numeroJogador = _.random(1,20)
const numeroInimigo = _.random(1,20)

const jogador = new Jogador('Aziien', numeroJogador)
const inimigo = new Inimigo('Buzzz', numeroInimigo)

const jogo = new Jogo()
jogo.verificarNumeros(jogador, inimigo)