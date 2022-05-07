const prompt = require('prompt-sync')();
// status - dias e horas com método de incremento, resultado, bio e passa-tempo.
let cansaco = 0;
let vital = 10;
let peso = 80;
let personagem = {
    cansaco: cansaco,
    vital: vital,
    peso: peso,
        
    horas: 6,
    dia: 1,

    comer: function(){
        this.peso++;
    },

    cansado: function(){
        this.cansaco++;
    },

    energia: function(){
        this.vital--;
    },

    dormir: function(){
        this.vital++;
    },

    resultado: function(){
        if(this.cansaco >= 20){
            console.log('VOCÊ FOI ATÉ O FIM DE SUAS FORÇAS - GAME-OVER');
            console.log();
            let volta = prompt('DESEJA JOGAR NOVAMENTE? DIGITE s PARA SIM E n PARA NÃO:  ');
            if(volta == 's'){
               this.resetStatus();
                iniciar();
            }else{
                console.log('--FIM--');
                return true;
            }
           
        }else if(this.vital <= 0){
            console.log('SUA ENERGIA VITAL ACABOU - GAME-OVER');
            console.log();
            let volta = prompt('DESEJA JOGAR NOVAMENTE? DIGITE s PARA SIM E n PARA NÃO:  ');
            if(volta == 's'){
               this.resetStatus();
                iniciar();
            }else{
                console.log('--FIM--');
                return true;
            }
        
        }else if(this.peso >= 100 ){
            console.log('VOCÊ ESTÁ UMA BOLHA DE GORDO JIMI - GAME-OVER');
            console.log();
            let volta = prompt('DESEJA JOGAR NOVAMENTE? DIGITE s PARA SIM E n PARA NÃO:  ');
            if(volta == 's'){
                this.resetStatus();
                iniciar();
            }else{
                console.log('--FIM--');
                return true;
            }
        }
    },
    // reset status
    resetStatus: function(){
        this.cansaco = 0;
        this.vital = 10;
        this.peso = 80;
    },

    //status apresentado com condição manha, tarde e noite.
    bio: function(){
        if (this.horas >= 19){
            console.log(`
            Está de noite.
            `)
        } else if(this.horas >= 12){
            console.log(`
            Está de tarde.
            `)
        } else if(this.horas >= 6){
            console.log(`
            Está de manhã.
            `)
        } else {
            console.log(`
            Está de madrugada.`)
        }
        console.log(`
        São ${this.horas} horas do dia ${this.dia}.
        Você está:
        Vitalidade: ${this.vital}
        Cansaço: ${this.cansaco}
        Peso: ${this.peso} kg.
        `)
    },
// função passa tempo
    passaTempo: function(horas){
        this.horas += horas
        if (this.horas >= 24){
            this.horas -= 24;
            this.dia++
        }
    }
   
}


    

// lista de escolhas trabalho para game-over

let lista = [];

// escolhas
iniciar();
function iniciar(){
while(true){ 
    
    let escolha = prompt('QUAL SERÁ A SUA ESCOLHA? - trabalhar - comer - ensaio - dormir - sair :   ');
    while(escolha != 'trabalhar' && escolha != 'comer' && escolha != 'ensaio' && escolha != 'dormir' && escolha != 'sair'){
        console.log();
        console.log(' \x1b[31m ERRO - DIGITE AS OPÇÕES: trabalhar - comer - ensaio - dormir - sair : \x1b[0m');
        escolha = prompt('QUAL SERÁ A SUA ESCOLHA? - trabalhar - comer - ensaio - dormir -  sair :   ');
    }
    console.log();
    if (escolha == 'trabalhar'){
        personagem.passaTempo(8)
        trabalhar();
        
        let fimDeJogo = personagem.resultado();
        if(fimDeJogo == true){
            break;
        }
        lista.push(escolha);

    } else if (escolha == 'comer'){
        personagem.passaTempo(1)
        comer();
        
        let fimDeJogo = personagem.resultado();
        if(fimDeJogo == true){
            break;
        }

    } else if (escolha == 'ensaio'){
        personagem.passaTempo(3)
        ensaio();
        let fimDeJogo = personagem.resultado();
        if(fimDeJogo == true){
            break;
        }
        
    } else if (escolha == 'dormir'){
        personagem.passaTempo(8)
        dormir();
        let fimDeJogo = personagem.resultado();
        if(fimDeJogo == true){
            break;
        }
    } else if (escolha == 'sair'){
        break;
    } 

// loop c tiver 3 trabalhar kebra
let resposta = 0 
for(let i=0; i<lista.length; i++){
    if(lista[i] == 'trabalhar'){
        resposta++;
 }
} 
if(resposta == 5){
    console.log('GAME-OVER - TRABALHOU POR 3 TURNOS SEM PARAR -MORREU DE TANTO TRABALHAR');
    console.log();
    volta = prompt('DESEJA JOGAR NOVAMENTE? DIGITE s PARA SIM E n PARA NÃO:  ');
            if(volta == 's'){
                iniciar();
            }else{
                console.log('--FIM--');
                return true;
            }
    break;
    
}
     
}
}

// funções das escolhas
function dormir(){
    
    console.log('HORA DE DESCANÇAR JIMI');
    personagem.dormir();
    console.log();
    console.log(personagem.bio());
    console.log();
    
}

function ensaio(){
    console.log();
    console.log('---RESPONDA S PARA SIM E N PARA NÃO---');
    console.log();
    let esquenta = prompt('VAMOS AQUECER OS MOTORES JIMI?  ');
    while(esquenta !== 's' && esquenta !== 'n'){
        console.log();
        console.log(' \x1b[31m ---ERRO - RESPONDA S PARA SIM E N PARA NÃO--- \x1b[0m');
        console.log();
        esquenta = prompt('VAMOS AQUECER OS MOTORES JIMI?  ' );
    }
    console.log();
    
        if(esquenta == 's'){
            console.log('AI SIM, AGORA O BIXO VAI PEGAR...');
            console.log('PEGA LOGO ESSE GORÓ E DESCE UM GOLÃO ARREGADO JIMI...');
            console.log('---ENSAIO---'); 
            personagem.energia();
            personagem.cansado();
            
        }else if(esquenta == 'n'){
            console.log('JIMI VOCÊ NÃO É MAIS O MESMO HEIM...')
        }
    console.log();
    let som = prompt('ACHA QUE JIMI VAI CONSEGUIR ENSAIAR TODO O REPERTÓRIO?  ');
    while(som !== 's' && som !== 'n'){
        console.log();
        console.log(' \x1b[31m ---ERRO - RESPONDA S PARA SIM E N PARA NÃO--- \x1b[0m');
        console.log();
        som = prompt('ACHA QUE JIMI VAI CONSEGUIR ENSAIAR TODO O REPERTÓRIO?  ' );
    }
        if(som == 's'){
            console.log('AGORA VAI CANSAR JIMI...');
            personagem.cansado();
            personagem.energia();
        }else if(som =='n'){
            console.log('MORAL TA BAIXA EM JIMI, NEM TOCAR TA DANDO MAIS CONTA...')
            personagem.energia();
        }
    console.log();
    console.log('---fim do ensaio---');
    console.log();
    let saideira = prompt('VAI UM DRINK SAIDEIRA JIMI?  ');
    while(saideira !== 's' && saideira !== 'n'){
        console.log();
        console.log(' \x1b[31m ---ERRO - RESPONDA S PARA SIM E N PARA NÃO--- \x1b[0m');
        console.log();
        saideira = prompt('VAI UM DRINK SAIDEIRA JIMI?  ' );
    }
        if(saideira == 's'){
            console.log('BORA ENCHER A CARA VOCÊ MERECE...');
            personagem.energia();
        }else if(saideira == 'n'){
            console.log('ORRA, QUE CHORADEIRA JIMI...');
            personagem.cansado();
        }
    console.log();
    console.log(personagem.bio());
    console.log();
    

}

function trabalhar(){    
    console.log();
    console.log('---RESPONDA S PARA SIM E N PARA NÃO---');
    console.log();
    
    let levantar = prompt('JIMI ESTÁ COM TEMPO AGORA DE MANHÃ?  ' );
    while(levantar !== 's' && levantar !== 'n'){
        console.log(' \x1b[31m ---ERRO - RESPONDA S PARA SIM E N PARA NÃO--- \x1b[0m');
        console.log();
        levantar = prompt('JIMI ESTÁ COM TEMPO AGORA DE MANHÃ?  ');
    }
    
    console.log();
           
    if(levantar == 's'){
       
        console.log(`          Ok - HOJE ACORDOU MAIS CEDO JIMI, PARABÉNS...`);
        personagem.energia();
        jokenpo();
    
    
        }else if(levantar == 'n') {
            console.log('CORRE JIMI, VAI SER DESPEDIDO.... PEGUE O CARRO E RUN JIMI.... ');
            personagem.cansado();
        }
    
    console.log();
    console.log('JIMI ESTÁ COM TDS SEUS PROJETOS ATRASADOS...');
    console.log();
    
    let ajuda = prompt('VAMOS AJUDAR JIMI A TERMINAR SUAS ATIVIDADES DO DIA?  ');
    while(ajuda !== 's' && ajuda !== 'n'){
        console.log();
        console.log(' \x1b[31m ---ERRO - RESPONDA S PARA SIM E N PARA NÃO--- \x1b[0m');
        console.log();
        ajuda = prompt('VAMOS AJUDAR JIMI A TERMINAR SUAS ATIVIDADES DO DIA?  ' );
    }
    
        if(ajuda == 's'){
            console.log('AI SIM, JIMI VAI TERMINAR MAIS RÁPIDO SUAS ATIVIDADES.');
            
            
        }else if(ajuda == 'n'){
            console.log('HOJE JIMI ESTÁ FERRADO MESMO...');
            personagem.cansado();
        }
        
    console.log();
    
    let cafezinho = prompt('VOCÊ ACHA QUE JIMI MERECE UMAS PAUSA PARA O CAFÉZINHO.?  ');
    while(cafezinho !== 's' && cafezinho !== 'n'){
        console.log();
        console.log(' \x1b[31m ---ERRO - RESPONDA S PARA SIM E N PARA NÃO--- \x1b[0m');
        console.log();
        cafezinho = prompt('VOCÊ ACHA QUE JIMI MERECE UMAS PAUSA PARA CAFÉINHO.?  ');
    }
    
        if(cafezinho == 's'){
            console.log('AI SIM JIMI, 10 MIN PARA TOMAR UM CAFÉ E VOLTAR AO TRABALHO.  ');
            personagem.comer();
            
    
        }else if(cafezinho == 'n'){
            console.log('EITA VIDA DE OPERÁRIO PADRÃO, NÃO TEM NEM 1 MIN DE DESCANÇO...');
            personagem.cansado();
        }
        
    console.log();
    console.log('---HORA DE COMER---');
    console.log();
    let comidinha = prompt('ACHA QUE JIMI MERECE COMER?  ');
    while(comidinha !== 's' && comidinha !== 'n'){
        console.log();
        console.log(' \x1b[31m ---ERRO - RESPONDA S PARA SIM E N PARA NÃO--- \x1b[0m');
        console.log();
        cafezinho = prompt('ACHA QUE JIMI MERECE COMER?  ' );
    }
    console.log();
    if(comidinha == 's'){
        console.log('BORA COMER JIMI, SACO VAZIO NÃO PARA DE PÉ...');
        console.log(); 
        let almoço = prompt('HORA DE COMER JIMI, O QUE PREFERE: rodizio ou japones?  ');
        while(almoço !== 'rodizio' && almoço !== 'japones'){
            console.log(' \x1b[31m ---ERRO - DIGITE rodizio ou japones--- \x1b[0m');
            almoço = prompt('HORA DE COMER JIMI, O QUE PREFERE: rodizio ou japones?  ');
            }
            if(almoço == 'rodizio'){
                console.log('AI SIM JIMI, CHEGOU A HORA DE COMER BASTANTE E DAR PREJUÍZO...');
                personagem.comer();
            }else if(almoço == 'japones'){
                console.log('TÁ CHIQUE EM MENINO.... ROLANDO ATÉ UM JAPINHA NO ALMOÇO...');
                personagem.comer();
            }
            }else if(comidinha == 'n'){
                console.log('CUIDADO PARA NÃO FICAR FRACO JIMI...');
                personagem.cansado();
            }
        console.log();
        console.log('---FALTA POUCO PARA ACABAR O HORARIO DE TRABAHO---');
        console.log();
    
    let fimDia = prompt('VOCÊ ACHA QUE JIMI ESTÁ MUITO FOLGADO E DEVE FAZER HORA EXTRA?  ');
    while(fimDia !== 's' && fimDia !== 'n'){
        console.log();
        console.log(' \x1b[31m ---ERRO - RESPONDA S PARA SIM E N PARA NÃO--- \x1b[0m');
        console.log();
        fimDia = prompt('VOCÊ ACHA QUE JIMI ESTÁ MUITO FOLGADO E DEVE FAZER HORA EXTRA?  ' );
    }
    console.log();
    
        if(fimDia == 's'){
            console.log('kkkkk TA FERRADO MESMO...');
            personagem.cansado();
            personagem.energia();
            
        }else if(fimDia == 'n'){
            console.log('HORA DE IR PARA CASA DESCANÇAR MEU AMIGO...');
            
        }
        
    console.log(personagem.bio());
    console.log();
    
    
}

function comer(){
    console.log();
    console.log('---ESCOLHA SUA OPÇÃO---')
    console.log();
    
    let lanche = prompt(' TEMOS TRÊS OPÇÕES: chazinho - burguer - tapas.');
    while(lanche !== 'chazinho' && lanche !== 'burguer' && lanche !== 'tapas'){
        console.log();
        console.log(' \x1b[31m ---ERRO DIGITE - chazinho - burguer - tapas--- \x1b[0m');
        lanche = prompt('PARA O LANCHE DA TARDE TEMOS TRÊS OPÇÕES: chazinho - burguer - tapas.');
        console.log();
    }
    
    if(lanche == 'chazinho'){
        chazinho();
    }else if(lanche == 'burguer'){
        burguer();
    }else if(lanche == 'tapas'){
        tapas();
    }
    
    console.log();
    console.log(personagem.bio());
    console.log();
    
}
    
function chazinho(){
        
        console.log();
        console.log('---DIGITE S PARA SIM E N PARA NÃO---')
        console.log();
    
        let polvilho = prompt('QUE TAL UMAS BOLACHINAS DE POLVILHO...   ');
        while(polvilho !== 's' && polvilho !== 'n'){
            console.log(' \x1b[31m ---ERRO - RESPONDA S PARA SIM E N PARA NÃO--- \x1b[0m');
            polvilho = prompt('QUE TAL UMAS BOLACHINAS DE POLVILHO...' );
            }
            
            if(polvilho == 's'){
                console.log('QUE APETITE JIMI...');
                console.log();
                personagem.comer();
                personagem.energia();
            }else if( polvilho == 'n'){
                console.log('OPA COMEÇOU O REGIME ENTÃO...KKK');
            }
}
    
function burguer(){
    console.log();
        console.log('DELÍCIA  DE HAMBURGÃO JIMI');
        console.log();
        console.log('---DIGITE S PARA SIM E N PARA NÃO---')
        console.log();
    
        let vegetariano = prompt('VAMOS DE BURGUER VEGETARIANO JIMI PARA FICAR MAIS SAUDÁVEL  ');
        while(vegetariano !== 's' && vegetariano !== 'n'){
            console.log(' \x1b[31m ---ERRO - RESPONDA S PARA SIM E N PARA NÃO--- \x1b[0m');
            vegetariano = prompt('VAMOS DE BURGUER VEGETARIANO JIMI PARA FICAR MAIS SAUDÁVEL' );
        }
    
    console.log();
        
            if(vegetariano == 's'){
                console.log('SEMPRE BOM VARIAR PARA FICAR MAIS SAUDÁVEL');
                personagem.comer();
            }else if(vegetariano == 'n'){
                console.log('DA-LHE UMA GORDURINHA JIMI');
                personagem.energia();
                personagem.comer();
            }
}
        
function tapas(){
        console.log();
        console.log(' ...VIVA O MÉXICO...');
        console.log();
        console.log('---DIGITE S PARA SIM E N PARA NÃO---')
        console.log();
    
        let tapitas = prompt('PODE SER A OPÇÃO VEGANA DE TAPAS JIMI.  ');
        while(tapitas !== 's' && tapitas !== 'n'){
            console.log();
            console.log(' \x1b[31m ---ERRO - RESPONDA S PARA SIM E N PARA NÃO--- \x1b[0m');
            tapitas = prompt('PODE SER A OPÇÃO VEGANA DE TAPAS JIMI.');
            console.log();
        }
            if(tapitas == 's'){
                console.log('BOA ESCOLHA, MUITO MAIS SAUDÁVEL...');
                personagem.comer();
                
            }else if(tapitas == 'n'){
                console.log('CHILLI, CHEDAR, GUACAMOLE, SOURCREAM E TORTILHA. VOCÊ VAI EXPLODIR JIMI, CUIDADO... ');
                personagem.comer();
                personagem.energia();
            }
}

function jokenpo(){    
        console.log('                    ---BÔNUS - JOKENPÔ---');
        console.log('             ...JÁ QUE ESTAMOS COM TEMPO JIMI...');
        console.log('          ...VAMOS JOGAR UMA PARTIDA DE JOKEMPÔ ...');
        console.log('              ...APERTE O ENTER PARA COMEÇAR...');
        prompt();
    
    //lista de opções
    
    let jokenpo = ['pedra','papel','tesoura'];
    
    //variáveis contagem dos pontos
    
        let pontosUsuario = 0;
        let pontosComputador = 0;
    
    //escolha do usuario
    let continuar;
    do{
        console.log();
        console.log('DIGITE SEU PALPITE: pedra, papel ou tesoura');
        console.log();
        let respostaUsuario = prompt('DIGITE SEU PALPITE: ');
        while(respostaUsuario !== 'pedra' && respostaUsuario !== 'papel' && respostaUsuario !== 'tesoura'){
            console.log(' \x1b[31m ---ERRO - ERRO - DIGITE SEU PALPITE: pedra, papel ou tesoura--- \x1b[0m');
            console.log();
            respostaUsuario = prompt('DIGITE SEU PALPITE:  ');
        }
    
    console.log();
    
    //escolha do computador
    
        let respostaComputador = jokenpo[Math.floor(Math.random() * jokenpo.length)]; //sorteio
    
            console.log(`SUA ESCOLHA FOI: ${respostaUsuario}`);
            console.log(`A ESCOLHA DO COMPUTADOR FOI: ${respostaComputador}`);
            console.log();
    
    //codições
    
        if((respostaUsuario == 'pedra' && respostaComputador == 'papel') || (respostaUsuario == 'papel'  && respostaComputador == 'tesoura' ) || (respostaUsuario == 'tesoura'  && respostaComputador == 'pedra' )){
            pontosComputador++;
            console.log(' \x1b[31m ---COMPUTADOR VENCEU--- \x1b[0m');
        
        } else if((respostaUsuario == 'pedra' && respostaComputador == 'tesoura') || (respostaUsuario == 'tesoura'  && respostaComputador == 'papel' ) || (respostaUsuario == 'papel'  && respostaComputador == 'pedra' )){
           pontosUsuario++;
           console.log(' \x1b[31m ---VOCÊ VENCEU - PARABÉNS--- \x1b[0m');
    
        }else if((respostaUsuario == 'pedra' && respostaComputador == 'pedra') || (respostaUsuario == 'papel' && respostaComputador == 'papel') || (respostaUsuario == 'tesoura' && respostaComputador == 'tesoura')){
        console.log(' \x1b[31m ---EMPATE--- \x1b[0m');
    }   
    
    console.log();
    
    //resultado
    
        if(pontosUsuario > pontosComputador){
          
        }
    
    //condição 
    continuar = prompt('DESEJA CONTINUAR CO O JOKENPÔ? DIGITE S PARA SIM E N PARA NAO.');
    }while(continuar == "s" ){
        console.log(' --- FIM --- ');
    }
}

