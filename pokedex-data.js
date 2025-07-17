// pokedex-data.js
// This file contains the data for the 151 original Pokémon.
// It is exported as a module to be imported into other JavaScript files.

export const allPokemonData = [
    {
        "id": 1,
        "name": "Bulbasaur",
        "type": ["Grass", "Poison"],
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtH7-sBV9eSKQAD7XBwHJAlXu1jJHNx5x6NiNGPF1fxYubKLhK-4hzYAC9TaTeqtUKkw4br5gm9LmuZ-cnYbKNtbe4cuRHqxEoE-m91kphvH5Gh4K5_dW09S1jdW57gPlSJRdwuO2gU6HYsO4lYosPbQXbFF6FJZX6CXSc7YNZRqDTrx8-0YLUHj7LUXE/s320-rw/0001%20-%20Bulbasaur.gif",
        "description": "Bulbasaur pode ser visto dormindo sob a luz do sol. Há uma semente em suas costas. Ao absorver a luz do sol, a semente cresce progressivamente maior.",
        "evolution_chain": [
            { "name": "Ivysaur", "level": 16, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" },
            { "name": "Venusaur", "level": 32, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" }
        ],
        "weaknesses": ["Fire", "Psychic", "Flying", "Ice"],
        "strengths": ["Water", "Ground", "Rock", "Fairy"]
    },
    {
        "id": 2,
        "name": "Ivysaur",
        "type": ["Grass", "Poison"],
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiopSyW4TwqLGOar3Y9NACBhEKx9xhv_5eDY-agSPR142CuAS4xHlmnxhqFYDFcy0hQCMi26v2za6sp7u4j39y_NE_aZVwids-WWyqr9Nph9fhj_R0V7WbNIPbWFIbULBoMXR6ZG_LfCFSxA1M4qHBy-wcoLMhjWnYlRZfxvty_8JGbQCJ7kd9HwFvZgi8/s320-rw/0002%20-%20Ivysaur.gif",
        "description": "Há um botão em suas costas. Para sustentar o botão, Ivysaur precisa absorver muita luz solar. Quanto mais luz solar ele absorve, maior o botão e mais pesada a flor.",
        "evolution_chain": [
            { "name": "Venusaur", "level": 32, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" }
        ],
        "weaknesses": ["Fire", "Psychic", "Flying", "Ice"],
        "strengths": ["Water", "Ground", "Rock", "Fairy"]
    },
    {
        "id": 3,
        "name": "Venusaur",
        "type": ["Grass", "Poison"],
        "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHnqyAe0gN8KGo7hqExGxojAUOrd5QvJ19xBIZ89-VpK9CINx2LuVMRDGtU5u6IRnv3pLPzcMWShJG4OqNK2Wsi8NjsrC-m-UBweyO95nwzwwr4IXTCvZBaKP1IC8reheuJKO98OZgwTiyIKA3aDCh93pHqo6r6pZ8PQO784vxK3aLcC3TpOg_yaGGN_I/s320-rw/0003%20-%20Venusaur%20(Female).gif",
        "description": "A flor nas costas de Venusaur dizem que ganha cores vivas se receber muita nutrição e luz solar. O aroma da flor acalma as emoções das pessoas.",
        "evolution_chain": [],
        "weaknesses": ["Fire", "Psychic", "Flying", "Ice"],
        "strengths": ["Water", "Ground", "Rock", "Fairy"]
    },
    {
        "id": 4,
        "name": "Charmander",
        "type": ["Fire"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        "description": "A chama na ponta de sua cauda é uma indicação da saúde de Charmander. Se estiver saudável, a chama queima vigorosamente.",
        "evolution_chain": [
            { "name": "Charmeleon", "level": 16, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" },
            { "name": "Charizard", "level": 36, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" }
        ],
        "weaknesses": ["Water", "Ground", "Rock"],
        "strengths": ["Grass", "Ice", "Bug", "Steel"]
    },
    {
        "id": 5,
        "name": "Charmeleon",
        "type": ["Fire"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        "description": "Charmeleon impiedosamente destrói seus seus inimigos com suas garras afiadas. Se ele encontrar um inimigo forte, ele se torna agressivo. Neste estado excitado, a chama na ponta de sua cauda queima com uma cor branca azulada.",
        "evolution_chain": [
            { "name": "Charizard", "level": 36, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" }
        ],
        "weaknesses": ["Water", "Ground", "Rock"],
        "strengths": ["Grass", "Ice", "Bug", "Steel"]
    },
    {
        "id": 6,
        "name": "Charizard",
        "type": ["Fire", "Flying"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        "description": "Charizard voa pelo céu em busca de oponentes fortes. Ele cospe fogo tão quente que derrete qualquer coisa. No entanto, ele nunca vira sua chama em um oponente mais fraco.",
        "evolution_chain": [],
        "weaknesses": ["Water", "Electric", "Rock"],
        "strengths": ["Grass", "Fighting", "Bug", "Steel", "Fire", "Fairy"]
    },
    {
        "id": 7,
        "name": "Squirtle",
        "type": ["Water"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        "description": "Quando retrai seu longo pescoço para dentro de sua concha, ele esguicha água com força vigorosa.",
        "evolution_chain": [
            { "name": "Wartortle", "level": 16, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" },
            { "name": "Blastoise", "level": 36, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" }
        ],
        "weaknesses": ["Electric", "Grass"],
        "strengths": ["Fire", "Ground", "Rock"]
    },
    {
        "id": 8,
        "name": "Wartortle",
        "type": ["Water"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
        "description": "Sua cauda é grande e coberta por uma rica pele. A cauda se torna progressivamente mais escura com a idade de Wartortle. Os arranhões em sua concha são evidências da dureza de suas batalhas.",
        "evolution_chain": [
            { "name": "Blastoise", "level": 36, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" }
        ],
        "weaknesses": ["Electric", "Grass"],
        "strengths": ["Fire", "Ground", "Rock"]
    },
    {
        "id": 9,
        "name": "Blastoise",
        "type": ["Water"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
        "description": "Blastoise tem canhões de água que se projetam de sua concha. Os canhões de água são muito precisos. Eles podem atirar balas de água com precisão suficiente para atingir uma lata a 50 metros de distância.",
        "evolution_chain": [],
        "weaknesses": ["Electric", "Grass"],
        "strengths": ["Fire", "Ground", "Rock"]
    },
    {
        "id": 10,
        "name": "Caterpie",
        "type": ["Bug"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
        "description": "Caterpie tem um apetite voraz. Ele pode devorar folhas maiores que seu corpo bem diante dos seus olhos. De seu corpo, ele expele um fedor terrivelmente potente.",
        "evolution_chain": [
            { "name": "Metapod", "level": 7, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png" },
            { "name": "Butterfree", "level": 10, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" }
        ],
        "weaknesses": ["Fire", "Flying", "Rock"],
        "strengths": ["Grass", "Psychic", "Dark"]
    },
    {
        "id": 11,
        "name": "Metapod",
        "type": ["Bug"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
        "description": "A casca que cobre este Pokémon é tão dura quanto ferro. Metapod não se move muito. Ele permanece imóvel para permitir que seu corpo macio dentro da casca se desenvolva.",
        "evolution_chain": [
            { "name": "Butterfree", "level": 10, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" }
        ],
        "weaknesses": ["Fire", "Flying", "Rock"],
        "strengths": ["Grass", "Psychic", "Dark"]
    },
    {
        "id": 12,
        "name": "Butterfree",
        "type": ["Bug", "Flying"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        "description": "Butterfree tem uma habilidade superior para procurar mel de flores. Ele pode até mesmo procurar, extrair e transportar mel de flores que florescem a mais de 10 km de sua colmeia.",
        "evolution_chain": [],
        "weaknesses": ["Fire", "Flying", "Rock", "Electric", "Ice"],
        "strengths": ["Grass", "Fighting", "Poison", "Bug", "Fairy"]
    },
    {
        "id": 13,
        "name": "Weedle",
        "type": ["Bug", "Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
        "description": "Weedle tem um olfato extremamente aguçado. Ele pode identificar seus tipos favoritos de folhas e aqueles que ele não gosta apenas cheirando-os com seu nariz grande e vermelho.",
        "evolution_chain": [
            { "name": "Kakuna", "level": 7, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png" },
            { "name": "Beedrill", "level": 10, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png" }
        ],
        "weaknesses": ["Fire", "Flying", "Psychic", "Rock"],
        "strengths": ["Grass", "Fighting", "Poison", "Bug", "Fairy"]
    },
    {
        "id": 14,
        "name": "Kakuna",
        "type": ["Bug", "Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
        "description": "Kakuna permanece quase imóvel enquanto se agarra a uma árvore. No entanto, em seu interior, ele está ocupado se preparando para sua próxima evolução. Evidências de que ele está vivo podem ser vistas pela temperatura quente de sua casca.",
        "evolution_chain": [
            { "name": "Beedrill", "level": 10, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png" }
        ],
        "weaknesses": ["Fire", "Flying", "Psychic", "Rock"],
        "strengths": ["Grass", "Fighting", "Poison", "Bug", "Fairy"]
    },
    {
        "id": 15,
        "name": "Beedrill",
        "type": ["Bug", "Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
        "description": "Beedrill é extremamente territorial. Ninguém deve se aproximar de seu ninho. Se irritado, eles atacarão em um enxame furioso.",
        "evolution_chain": [],
        "weaknesses": ["Fire", "Flying", "Psychic", "Rock"],
        "strengths": ["Grass", "Fighting", "Poison", "Bug", "Fairy"]
    },
    {
        "id": 16,
        "name": "Pidgey",
        "type": ["Normal", "Flying"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
        "description": "Pidgey tem um senso de direção extremamente aguçado. Ele é capaz de retornar ao seu ninho sem falhas, não importa o quão longe esteja de territórios familiares.",
        "evolution_chain": [
            { "name": "Pidgeotto", "level": 21, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png" },
            { "name": "Pidgeot", "level": 36, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png" }
        ],
        "weaknesses": ["Electric", "Rock", "Ice"],
        "strengths": ["Grass", "Fighting", "Bug"]
    },
    {
        "id": 17,
        "name": "Pidgeotto",
        "type": ["Normal", "Flying"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
        "description": "Pidgeotto reivindica uma grande área como seu território. Este Pokémon voa em torno de seu território em patrulha. Qualquer intruso é punido sem piedade por suas garras afiadas.",
        "evolution_chain": [
            { "name": "Pidgeot", "level": 36, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png" }
        ],
        "weaknesses": ["Electric", "Rock", "Ice"],
        "strengths": ["Grass", "Fighting", "Bug"]
    },
    {
        "id": 18,
        "name": "Pidgeot",
        "type": ["Normal", "Flying"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
        "description": "Este Pokémon tem uma plumagem magnífica com um brilho lindo. Muitos treinadores são cativados pela beleza das penas em sua cabeça e o escolhem como seu Pokémon.",
        "evolution_chain": [],
        "weaknesses": ["Electric", "Rock", "Ice"],
        "strengths": ["Grass", "Fighting", "Bug"]
    },
    {
        "id": 19,
        "name": "Rattata",
        "type": ["Normal"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
        "description": "Rattata é cauteloso ao extremo. Mesmo quando está dormindo, ele move suas orelhas para ouvir. De sua toca, ele observa seus arredores por um longo tempo. Seus dentes afiados podem roer qualquer coisa.",
        "evolution_chain": [
            { "name": "Raticate", "level": 20, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png" }
        ],
        "weaknesses": ["Fighting"],
        "strengths": []
    },
    {
        "id": 20,
        "name": "Raticate",
        "type": ["Normal"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
        "description": "Os dentes traseiros de Raticate são incrivelmente duros e fortes. Eles são mais fortes que as presas de um elefante. Ele pode roer até mesmo um edifício de concreto em pouco tempo.",
        "evolution_chain": [],
        "weaknesses": ["Fighting"],
        "strengths": []
    },
    {
        "id": 21,
        "name": "Spearow",
        "type": ["Normal", "Flying"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
        "description": "Spearow tem um corpo muito pequeno e asas curtas. No entanto, ele é capaz de voar muito rápido para compensar. Ele voa em torno de seu território, chilreando alto para alertar os intrusos.",
        "evolution_chain": [
            { "name": "Fearow", "level": 20, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png" }
        ],
        "weaknesses": ["Electric", "Rock", "Ice"],
        "strengths": ["Grass", "Fighting", "Bug"]
    },
    {
        "id": 22,
        "name": "Fearow",
        "type": ["Normal", "Flying"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
        "description": "Fearow tem uma longa e fina bico e pescoço. Eles são ideais para pegar presas na água ou no chão. Este Pokémon também é conhecido por sua incrível velocidade de voo.",
        "evolution_chain": [],
        "weaknesses": ["Electric", "Rock", "Ice"],
        "strengths": ["Grass", "Fighting", "Bug"]
    },
    {
        "id": 23,
        "name": "Ekans",
        "type": ["Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
        "description": "Ekans se move silenciosamente rastejando no chão. Ele prefere se esconder na grama alta e atacar presas desavisadas. Ele pode desarticular sua mandíbula para engolir presas grandes.",
        "evolution_chain": [
            { "name": "Arbok", "level": 22, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png" }
        ],
        "weaknesses": ["Ground", "Psychic"],
        "strengths": ["Grass", "Fighting", "Poison", "Bug", "Fairy"]
    },
    {
        "id": 24,
        "name": "Arbok",
        "type": ["Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
        "description": "Este Pokémon tem mais de 20 variações de padrões em seu corpo. Esses padrões são usados para intimidar os inimigos. Arbok pode esmagar seus inimigos com seu corpo poderoso.",
        "evolution_chain": [],
        "weaknesses": ["Ground", "Psychic"],
        "strengths": ["Grass", "Fighting", "Poison", "Bug", "Fairy"]
    },
    {
        "id": 25,
        "name": "Pikachu",
        "type": ["Electric"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        "description": "Sempre que Pikachu encontra algo novo, ele o eletrocuta com uma explosão de eletricidade. Se você encontrar uma baga queimada, é a prova de que um Pikachu a eletrocutou.",
        "evolution_chain": [
            { "name": "Raichu", "item": "Thunder Stone", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png" }
        ],
        "weaknesses": ["Ground"],
        "strengths": ["Water", "Flying"]
    },
    {
        "id": 26,
        "name": "Raichu",
        "type": ["Electric"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
        "description": "Se as bolsas elétricas de Raichu ficarem sobrecarregadas, ele descarrega o excesso de eletricidade através de sua cauda. Este Pokémon é capaz de descarregar até 100.000 volts de eletricidade.",
        "evolution_chain": [],
        "weaknesses": ["Ground"],
        "strengths": ["Water", "Flying"]
    },
    {
        "id": 27,
        "name": "Sandshrew",
        "type": ["Ground"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
        "description": "Sandshrew tem a capacidade de enrolar seu corpo em uma bola. Se um inimigo o atacar, ele rola em uma bola e se protege. Ele pode sobreviver por um longo tempo em áreas secas.",
        "evolution_chain": [
            { "name": "Sandslash", "level": 22, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png" }
        ],
        "weaknesses": ["Water", "Grass", "Ice"],
        "strengths": ["Fire", "Electric", "Poison", "Rock", "Steel"]
    },
    {
        "id": 28,
        "name": "Sandslash",
        "type": ["Ground"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
        "description": "As garras de Sandslash são usadas para cavar. Se ele encontrar um inimigo, ele ataca com as garras. Suas garras são tão afiadas que podem rasgar um diamante.",
        "evolution_chain": [],
        "weaknesses": ["Water", "Grass", "Ice"],
        "strengths": ["Fire", "Electric", "Poison", "Rock", "Steel"]
    },
    {
        "id": 29,
        "name": "Nidoran♀",
        "type": ["Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
        "description": "Nidoran♀ é um Pokémon muito pequeno. É muito sensível ao cheiro. Ele levanta suas orelhas para ouvir os sons mais fracos. Quando sente perigo, ele se esconde em um buraco.",
        "evolution_chain": [
            { "name": "Nidorina", "level": 16, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png" },
            { "name": "Nidoqueen", "item": "Moon Stone", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png" }
        ],
        "weaknesses": ["Ground", "Psychic"],
        "strengths": ["Grass", "Fighting", "Poison", "Bug", "Fairy"]
    },
    {
        "id": 30,
        "name": "Nidorina",
        "type": ["Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
        "description": "Quando Nidorina está com seus amigos, ela mantém seus espinhos retráteis para dentro. Isso é para evitar ferir seus amigos. Ela se torna agressiva se separada de seu grupo.",
        "evolution_chain": [
            { "name": "Nidoqueen", "item": "Moon Stone", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png" }
        ],
        "weaknesses": ["Ground", "Psychic"],
        "strengths": ["Grass", "Fighting", "Poison", "Bug", "Fairy"]
    },
    {
        "id": 31,
        "name": "Nidoqueen",
        "type": ["Poison", "Ground"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
        "description": "Nidoqueen tem um corpo escamoso e duro. Ela pode proteger seus filhos de qualquer ataque. É um Pokémon muito protetor e não hesitará em usar a força para proteger seu ninho.",
        "evolution_chain": [],
        "weaknesses": ["Water", "Ground", "Psychic", "Ice"],
        "strengths": ["Grass", "Fighting", "Poison", "Bug", "Rock", "Fairy"]
    },
    {
        "id": 32,
        "name": "Nidoran♂",
        "type": ["Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
        "description": "Os chifres de Nidoran♂ são venenosos. Ele usa seus chifres para atacar inimigos. Ele também pode usar seus chifres para cavar buracos no chão.",
        "evolution_chain": [
            { "name": "Nidorino", "level": 16, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png" },
            { "name": "Nidoking", "item": "Moon Stone", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png" }
        ],
        "weaknesses": ["Ground", "Psychic"],
        "strengths": ["Grass", "Fighting", "Poison", "Bug", "Fairy"]
    },
    {
        "id": 33,
        "name": "Nidorino",
        "type": ["Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
        "description": "Nidorino tem um chifre mais duro que o de Nidoran♂. Ele usa seu chifre para perfurar seus inimigos. Ele também pode usar seu chifre para cavar buracos no chão.",
        "evolution_chain": [
            { "name": "Nidoking", "item": "Moon Stone", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png" }
        ],
        "weaknesses": ["Ground", "Psychic"],
        "strengths": ["Grass", "Fighting", "Poison", "Bug", "Fairy"]
    },
    {
        "id": 34,
        "name": "Nidoking",
        "type": ["Poison", "Ground"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
        "description": "Nidoking é um Pokémon muito poderoso. Ele usa sua cauda para esmagar seus inimigos. Ele também pode usar seu chifre para perfurar seus inimigos. Ele é um Pokémon muito agressivo.",
        "evolution_chain": [],
        "weaknesses": ["Water", "Ground", "Psychic", "Ice"],
        "strengths": ["Grass", "Fighting", "Poison", "Bug", "Rock", "Fairy"]
    },
    {
        "id": 35,
        "name": "Clefairy",
        "type": ["Fairy"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
        "description": "Em noites de lua cheia, grupos de Clefairy saem para brincar. Quando o sol nasce, eles retornam às suas montanhas para dormir. É dito que eles dançam em círculos e absorvem a luz da lua.",
        "evolution_chain": [
            { "name": "Clefable", "item": "Moon Stone", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png" }
        ],
        "weaknesses": ["Poison", "Steel"],
        "strengths": ["Fighting", "Dragon", "Dark"]
    },
    {
        "id": 36,
        "name": "Clefable",
        "type": ["Fairy"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
        "description": "Clefable é um Pokémon muito raro. Ele é dito que vive em montanhas tranquilas. Ele é muito tímido e se esconde quando sente a presença de humanos. Ele pode voar usando suas asas.",
        "evolution_chain": [],
        "weaknesses": ["Poison", "Steel"],
        "strengths": ["Fighting", "Dragon", "Dark"]
    },
    {
        "id": 37,
        "name": "Vulpix",
        "type": ["Fire"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
        "description": "Vulpix nasce com uma cauda branca. À medida que cresce, sua cauda se divide em seis caudas. Ele pode controlar o fogo e cuspir chamas de sua boca.",
        "evolution_chain": [
            { "name": "Ninetales", "item": "Fire Stone", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png" }
        ],
        "weaknesses": ["Water", "Ground", "Rock"],
        "strengths": ["Grass", "Ice", "Bug", "Steel"]
    },
    {
        "id": 38,
        "name": "Ninetales",
        "type": ["Fire"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
        "description": "Ninetales tem nove caudas. É dito que cada cauda tem um poder místico. É um Pokémon muito inteligente e pode entender a fala humana.",
        "evolution_chain": [],
        "weaknesses": ["Water", "Ground", "Rock"],
        "strengths": ["Grass", "Ice", "Bug", "Steel"]
    },
    {
        "id": 39,
        "name": "Jigglypuff",
        "type": ["Normal", "Fairy"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
        "description": "Jigglypuff tem uma voz muito agradável. Ele pode cantar uma canção de ninar que faz qualquer um que a ouça dormir. Ele usa isso para capturar presas.",
        "evolution_chain": [
            { "name": "Wigglytuff", "item": "Moon Stone", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png" }
        ],
        "weaknesses": ["Poison", "Steel"],
        "strengths": ["Fighting", "Dragon", "Ghost", "Bug", "Dark"]
    },
    {
        "id": 40,
        "name": "Wigglytuff",
        "type": ["Normal", "Fairy"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
        "description": "Wigglytuff tem uma pele muito macia. É tão macia que é impossível machucá-lo. Ele pode inflar seu corpo para flutuar no ar.",
        "evolution_chain": [],
        "weaknesses": ["Poison", "Steel"],
        "strengths": ["Fighting", "Dragon", "Ghost", "Bug", "Dark"]
    },
    {
        "id": 41,
        "name": "Zubat",
        "type": ["Poison", "Flying"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
        "description": "Zubat não tem olhos. Ele usa ondas sonoras para navegar. Ele vive em cavernas escuras e sai à noite para caçar insetos.",
        "evolution_chain": [
            { "name": "Golbat", "level": 22, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png" },
            { "name": "Crobat", "item": "Friendship", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png" }
        ],
        "weaknesses": ["Electric", "Ice", "Psychic", "Rock"],
        "strengths": ["Grass", "Fighting", "Poison", "Bug", "Fairy"]
    },
    {
        "id": 42,
        "name": "Golbat",
        "type": ["Poison", "Flying"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
        "description": "Golbat tem uma boca muito grande. Ele usa sua boca para sugar o sangue de suas presas. Ele pode voar muito rápido e é difícil de detectar.",
        "evolution_chain": [
            { "name": "Crobat", "item": "Friendship", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png" }
        ],
        "weaknesses": ["Electric", "Ice", "Psychic", "Rock"],
        "strengths": ["Grass", "Fighting", "Poison", "Bug", "Fairy"]
    },
    {
        "id": 43,
        "name": "Oddish",
        "type": ["Grass", "Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
        "description": "Durante o dia, Oddish enterra seu corpo no chão para absorver nutrientes. Ele só sai à noite para se banhar na luz da lua.",
        "evolution_chain": [
            { "name": "Gloom", "level": 21, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png" },
            { "name": "Vileplume", "item": "Leaf Stone", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png" },
            { "name": "Bellossom", "item": "Sun Stone", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png" }
        ],
        "weaknesses": ["Fire", "Flying", "Psychic", "Ice"],
        "strengths": ["Water", "Ground", "Rock", "Fairy"]
    },
    {
        "id": 44,
        "name": "Gloom",
        "type": ["Grass", "Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
        "description": "Gloom expele um líquido pegajoso de sua boca que cheira terrivelmente. O cheiro é tão forte que pode fazer as pessoas desmaiarem. Ele é atraído por coisas doces.",
        "evolution_chain": [
            { "name": "Vileplume", "item": "Leaf Stone", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png" },
            { "name": "Bellossom", "item": "Sun Stone", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png" }
        ],
        "weaknesses": ["Fire", "Flying", "Psychic", "Ice"],
        "strengths": ["Water", "Ground", "Rock", "Fairy"]
    },
    {
        "id": 45,
        "name": "Vileplume",
        "type": ["Grass", "Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
        "description": "Vileplume tem a maior pétala do mundo. Ele balança suas pétalas para liberar pólen tóxico. O pólen é tão tóxico que pode causar paralisia.",
        "evolution_chain": [],
        "weaknesses": ["Fire", "Flying", "Psychic", "Ice"],
        "strengths": ["Water", "Ground", "Rock", "Fairy"]
    },
    {
        "id": 46,
        "name": "Paras",
        "type": ["Bug", "Grass"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
        "description": "Paras tem dois cogumelos parasitas em suas costas. Os cogumelos absorvem nutrientes do corpo de Paras. Eles crescem à medida que Paras cresce.",
        "evolution_chain": [
            { "name": "Parasect", "level": 24, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png" }
        ],
        "weaknesses": ["Fire", "Flying", "Ice", "Poison", "Bug", "Rock"],
        "strengths": ["Grass", "Fighting", "Ground"]
    },
    {
        "id": 47,
        "name": "Parasect",
        "type": ["Bug", "Grass"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
        "description": "Parasect é controlado por um cogumelo parasita que cresceu em suas costas. O cogumelo drena a energia de Parasect. Ele pode liberar esporos venenosos.",
        "evolution_chain": [],
        "weaknesses": ["Fire", "Flying", "Ice", "Poison", "Bug", "Rock"],
        "strengths": ["Grass", "Fighting", "Ground"]
    },
    {
        "id": 48,
        "name": "Venonat",
        "type": ["Bug", "Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
        "description": "Venonat tem olhos grandes que podem ver tudo. Ele usa seus olhos para procurar insetos à noite. Ele pode voar usando suas asas.",
        "evolution_chain": [
            { "name": "Venomoth", "level": 31, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png" }
        ],
        "weaknesses": ["Fire", "Flying", "Psychic", "Rock"],
        "strengths": ["Grass", "Fighting", "Poison", "Bug", "Fairy"]
    },
    {
        "id": 49,
        "name": "Venomoth",
        "type": ["Bug", "Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
        "description": "Venomoth é um Pokémon noturno. Ele voa em torno de luzes brilhantes à noite. Ele pode liberar pólen tóxico de suas asas para atacar inimigos.",
        "evolution_chain": [],
        "weaknesses": ["Fire", "Flying", "Psychic", "Rock"],
        "strengths": ["Grass", "Fighting", "Poison", "Bug", "Fairy"]
    },
    {
        "id": 50,
        "name": "Diglett",
        "type": ["Ground"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
        "description": "Diglett vive no subsolo. Ele cava túneis sob o solo. Ele só sai de seu buraco para comer raízes de plantas.",
        "evolution_chain": [
            { "name": "Dugtrio", "level": 26, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png" }
        ],
        "weaknesses": ["Water", "Grass", "Ice"],
        "strengths": ["Fire", "Electric", "Poison", "Rock", "Steel"]
    },
    {
        "id": 51,
        "name": "Dugtrio",
        "type": ["Ground"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
        "description": "Dugtrio é uma evolução de três Diglett. Eles trabalham juntos para cavar túneis. Eles podem cavar muito rápido e são difíceis de capturar.",
        "evolution_chain": [],
        "weaknesses": ["Water", "Grass", "Ice"],
        "strengths": ["Fire", "Electric", "Poison", "Rock", "Steel"]
    },
    {
        "id": 52,
        "name": "Meowth",
        "type": ["Normal"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
        "description": "Meowth é um Pokémon noturno. Ele adora coisas brilhantes. Ele coleta moedas e outros objetos brilhantes. Ele pode usar suas garras afiadas para atacar.",
        "evolution_chain": [
            { "name": "Persian", "level": 28, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png" }
        ],
        "weaknesses": ["Fighting"],
        "strengths": []
    },
    {
        "id": 53,
        "name": "Persian",
        "type": ["Normal"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
        "description": "Persian é um Pokémon muito elegante. Ele tem um corpo esbelto e uma cauda longa. Ele é muito rápido e pode atacar seus inimigos com suas garras afiadas.",
        "evolution_chain": [],
        "weaknesses": ["Fighting"],
        "strengths": []
    },
    {
        "id": 54,
        "name": "Psyduck",
        "type": ["Water"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
        "description": "Psyduck sempre tem uma dor de cabeça. Quando sua dor de cabeça piora, ele libera poderes psíquicos. Ele não se lembra de usar seus poderes.",
        "evolution_chain": [
            { "name": "Golduck", "level": 33, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png" }
        ],
        "weaknesses": ["Electric", "Grass"],
        "strengths": ["Fire", "Ground", "Rock"]
    },
    {
        "id": 55,
        "name": "Golduck",
        "type": ["Water"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
        "description": "Golduck é um excelente nadador. Ele pode nadar muito rápido e é capaz de mergulhar em grandes profundidades. Ele usa seus poderes psíquicos para atacar inimigos.",
        "evolution_chain": [],
        "weaknesses": ["Electric", "Grass"],
        "strengths": ["Fire", "Ground", "Rock"]
    },
    {
        "id": 56,
        "name": "Mankey",
        "type": ["Fighting"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
        "description": "Mankey é um Pokémon muito irritado. Ele fica com raiva facilmente e ataca qualquer um que o irrite. Ele pode usar seus punhos para atacar.",
        "evolution_chain": [
            { "name": "Primeape", "level": 28, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png" }
        ],
        "weaknesses": ["Flying", "Psychic", "Fairy"],
        "strengths": ["Normal", "Ice", "Rock", "Dark", "Steel"]
    },
    {
        "id": 57,
        "name": "Primeape",
        "type": ["Fighting"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
        "description": "Primeape é um Pokémon muito agressivo. Ele fica com raiva facilmente e ataca qualquer um que o irrite. Ele pode usar seus punhos para atacar e é muito forte.",
        "evolution_chain": [],
        "weaknesses": ["Flying", "Psychic", "Fairy"],
        "strengths": ["Normal", "Ice", "Rock", "Dark", "Steel"]
    },
    {
        "id": 58,
        "name": "Growlithe",
        "type": ["Fire"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
        "description": "Growlithe é um Pokémon muito leal. Ele é conhecido por sua coragem e por nunca desistir. Ele pode usar fogo para atacar inimigos.",
        "evolution_chain": [
            { "name": "Arcanine", "item": "Fire Stone", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png" }
        ],
        "weaknesses": ["Water", "Ground", "Rock"],
        "strengths": ["Grass", "Ice", "Bug", "Steel"]
    },
    {
        "id": 59,
        "name": "Arcanine",
        "type": ["Fire"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
        "description": "Arcanine é um Pokémon muito rápido. Ele pode correr muito rápido e é capaz de correr por longas distâncias. Ele é um Pokémon lendário na China antiga.",
        "evolution_chain": [],
        "weaknesses": ["Water", "Ground", "Rock"],
        "strengths": ["Grass", "Ice", "Bug", "Steel"]
    },
    {
        "id": 60,
        "name": "Poliwag",
        "type": ["Water"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
        "description": "Poliwag tem uma pele muito fina. Ele pode ver seus órgãos internos através de sua pele. Ele usa sua cauda para nadar.",
        "evolution_chain": [
            { "name": "Poliwhirl", "level": 25, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png" },
            { "name": "Poliwrath", "item": "Water Stone", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png" },
            { "name": "Politoed", "item": "King's Rock", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png" }
        ],
        "weaknesses": ["Electric", "Grass"],
        "strengths": ["Fire", "Ground", "Rock"]
    },
    {
        "id": 61,
        "name": "Poliwhirl",
        "type": ["Water"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
        "description": "Poliwhirl tem uma pele muito lisa. Ele pode se mover muito rápido na água. Ele usa sua cauda para nadar e atacar inimigos.",
        "evolution_chain": [
            { "name": "Poliwrath", "item": "Water Stone", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png" },
            { "name": "Politoed", "item": "King's Rock", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png" }
        ],
        "weaknesses": ["Electric", "Grass"],
        "strengths": ["Fire", "Ground", "Rock"]
    },
    {
        "id": 62,
        "name": "Poliwrath",
        "type": ["Water", "Fighting"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
        "description": "Poliwrath é um excelente nadador. Ele pode nadar muito rápido e é capaz de mergulhar em grandes profundidades. Ele usa seus punhos para atacar inimigos.",
        "evolution_chain": [],
        "weaknesses": ["Electric", "Grass", "Flying", "Psychic", "Fairy"],
        "strengths": ["Fire", "Ground", "Rock", "Normal", "Ice", "Dark", "Steel"]
    },
    {
        "id": 63,
        "name": "Abra",
        "type": ["Psychic"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
        "description": "Abra dorme 18 horas por dia. Se ele for acordado, ele se teletransporta para um lugar seguro. Ele pode usar seus poderes psíquicos para atacar inimigos.",
        "evolution_chain": [
            { "name": "Kadabra", "level": 16, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png" },
            { "name": "Alakazam", "item": "Trade", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png" }
        ],
        "weaknesses": ["Bug", "Ghost", "Dark"],
        "strengths": ["Fighting", "Poison"]
    },
    {
        "id": 64,
        "name": "Kadabra",
        "type": ["Psychic"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
        "description": "Kadabra tem uma colher em sua mão. Ele usa a colher para amplificar seus poderes psíquicos. Ele pode criar ilusões para enganar seus inimigos.",
        "evolution_chain": [
            { "name": "Alakazam", "item": "Trade", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png" }
        ],
        "weaknesses": ["Bug", "Ghost", "Dark"],
        "strengths": ["Fighting", "Poison"]
    },
    {
        "id": 65,
        "name": "Alakazam",
        "type": ["Psychic"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
        "description": "Alakazam tem um cérebro muito grande. Ele pode se lembrar de tudo o que aprendeu. Ele pode usar seus poderes psíquicos para atacar inimigos e é muito inteligente.",
        "evolution_chain": [],
        "weaknesses": ["Bug", "Ghost", "Dark"],
        "strengths": ["Fighting", "Poison"]
    },
    {
        "id": 66,
        "name": "Machop",
        "type": ["Fighting"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
        "description": "Machop tem um corpo muito forte. Ele pode levantar coisas pesadas. Ele treina todos os dias para se tornar mais forte.",
        "evolution_chain": [
            { "name": "Machoke", "level": 28, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png" },
            { "name": "Machamp", "item": "Trade", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png" }
        ],
        "weaknesses": ["Flying", "Psychic", "Fairy"],
        "strengths": ["Normal", "Ice", "Rock", "Dark", "Steel"]
    },
    {
        "id": 67,
        "name": "Machoke",
        "type": ["Fighting"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
        "description": "Machoke tem um corpo muito musculoso. Ele pode levantar coisas muito pesadas. Ele usa um cinto para controlar sua força.",
        "evolution_chain": [
            { "name": "Machamp", "item": "Trade", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png" }
        ],
        "weaknesses": ["Flying", "Psychic", "Fairy"],
        "strengths": ["Normal", "Ice", "Rock", "Dark", "Steel"]
    },
    {
        "id": 68,
        "name": "Machamp",
        "type": ["Fighting"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
        "description": "Machamp tem quatro braços. Ele pode atacar com todos os quatro braços ao mesmo tempo. Ele é um Pokémon muito forte e pode derrubar qualquer inimigo.",
        "evolution_chain": [],
        "weaknesses": ["Flying", "Psychic", "Fairy"],
        "strengths": ["Normal", "Ice", "Rock", "Dark", "Steel"]
    },
    {
        "id": 69,
        "name": "Bellsprout",
        "type": ["Grass", "Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
        "description": "Bellsprout tem um corpo fino e flexível. Ele pode se mover muito rápido para evitar ataques. Ele usa seus chicotes de videira para atacar inimigos.",
        "evolution_chain": [
            { "name": "Weepinbell", "level": 21, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png" },
            { "name": "Victreebel", "item": "Leaf Stone", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png" }
        ],
        "weaknesses": ["Fire", "Flying", "Psychic", "Ice"],
        "strengths": ["Water", "Ground", "Rock", "Fairy"]
    },
    {
        "id": 70,
        "name": "Weepinbell",
        "type": ["Grass", "Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
        "description": "Weepinbell tem uma boca grande que pode engolir qualquer coisa. Ele usa um líquido pegajoso para capturar presas. Ele pode liberar pólen tóxico.",
        "evolution_chain": [
            { "name": "Victreebel", "item": "Leaf Stone", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png" }
        ],
        "weaknesses": ["Fire", "Flying", "Psychic", "Ice"],
        "strengths": ["Water", "Ground", "Rock", "Fairy"]
    },
    {
        "id": 71,
        "name": "Victreebel",
        "type": ["Grass", "Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
        "description": "Victreebel tem uma boca grande que pode engolir qualquer coisa. Ele usa um líquido pegajoso para capturar presas. Ele pode liberar pólen tóxico e é muito perigoso.",
        "evolution_chain": [],
        "weaknesses": ["Fire", "Flying", "Psychic", "Ice"],
        "strengths": ["Water", "Ground", "Rock", "Fairy"]
    },
    {
        "id": 72,
        "name": "Tentacool",
        "type": ["Water", "Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
        "description": "Tentacool tem um corpo gelatinoso. Ele pode se mover muito rápido na água. Ele usa seus tentáculos para atacar inimigos e injetar veneno.",
        "evolution_chain": [
            { "name": "Tentacruel", "level": 30, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png" }
        ],
        "weaknesses": ["Electric", "Ground", "Psychic"],
        "strengths": ["Fire", "Water", "Ice", "Fighting", "Poison", "Bug", "Steel", "Fairy"]
    },
    {
        "id": 73,
        "name": "Tentacruel",
        "type": ["Water", "Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
        "description": "Tentacruel tem 80 tentáculos. Ele pode usar seus tentáculos para atacar inimigos e injetar veneno. Ele é um Pokémon muito perigoso e pode se mover muito rápido na água.",
        "evolution_chain": [],
        "weaknesses": ["Electric", "Ground", "Psychic"],
        "strengths": ["Fire", "Water", "Ice", "Fighting", "Poison", "Bug", "Steel", "Fairy"]
    },
    {
        "id": 74,
        "name": "Geodude",
        "type": ["Rock", "Ground"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
        "description": "Geodude é um Pokémon que vive em montanhas. Ele pode rolar montanha abaixo para se mover. Ele é muito forte e pode esmagar pedras.",
        "evolution_chain": [
            { "name": "Graveler", "level": 25, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png" },
            { "name": "Golem", "item": "Trade", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png" }
        ],
        "weaknesses": ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
        "strengths": ["Fire", "Electric", "Poison", "Flying", "Rock", "Bug"]
    },
    {
        "id": 75,
        "name": "Graveler",
        "type": ["Rock", "Ground"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
        "description": "Graveler é um Pokémon que vive em montanhas. Ele pode rolar montanha abaixo para se mover. Ele é muito forte e pode esmagar pedras e é muito resistente.",
        "evolution_chain": [
            { "name": "Golem", "item": "Trade", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png" }
        ],
        "weaknesses": ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
        "strengths": ["Fire", "Electric", "Poison", "Flying", "Rock", "Bug"]
    },
    {
        "id": 76,
        "name": "Golem",
        "type": ["Rock", "Ground"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
        "description": "Golem é um Pokémon que vive em montanhas. Ele pode rolar montanha abaixo para se mover. Ele é muito forte e pode esmagar pedras e é muito resistente e perigoso.",
        "evolution_chain": [],
        "weaknesses": ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
        "strengths": ["Fire", "Electric", "Poison", "Flying", "Rock", "Bug"]
    },
    {
        "id": 77,
        "name": "Ponyta",
        "type": ["Fire"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
        "description": "Ponyta tem um corpo muito leve. Ele pode correr muito rápido. Ele pode saltar sobre montanhas e rios. Ele tem uma chama em sua juba e cauda.",
        "evolution_chain": [
            { "name": "Rapidash", "level": 40, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png" }
        ],
        "weaknesses": ["Water", "Ground", "Rock"],
        "strengths": ["Grass", "Ice", "Bug", "Steel"]
    },
    {
        "id": 78,
        "name": "Rapidash",
        "type": ["Fire"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
        "description": "Rapidash é um Pokémon muito rápido. Ele pode correr muito rápido e é capaz de correr por longas distâncias. Ele tem uma chama em sua juba e cauda e é muito elegante.",
        "evolution_chain": [],
        "weaknesses": ["Water", "Ground", "Rock"],
        "strengths": ["Grass", "Ice", "Bug", "Steel"]
    },
    {
        "id": 79,
        "name": "Slowpoke",
        "type": ["Water", "Psychic"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
        "description": "Slowpoke é um Pokémon muito lento. Ele leva muito tempo para reagir. Ele pode usar sua cauda para pescar. Ele é muito preguiçoso.",
        "evolution_chain": [
            { "name": "Slowbro", "level": 37, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png" },
            { "name": "Slowking", "item": "King's Rock", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png" }
        ],
        "weaknesses": ["Bug", "Ghost", "Grass", "Electric", "Dark"],
        "strengths": ["Fire", "Water", "Ice", "Fighting", "Poison", "Rock", "Steel"]
    },
    {
        "id": 80,
        "name": "Slowbro",
        "type": ["Water", "Psychic"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
        "description": "Slowbro tem uma concha em sua cauda. A concha é um Shellder. O Shellder se agarrou à cauda de Slowpoke e o fez evoluir. Ele pode usar seus poderes psíquicos.",
        "evolution_chain": [],
        "weaknesses": ["Bug", "Ghost", "Grass", "Electric", "Dark"],
        "strengths": ["Fire", "Water", "Ice", "Fighting", "Poison", "Rock", "Steel"]
    },
    {
        "id": 81,
        "name": "Magnemite",
        "type": ["Electric", "Steel"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
        "description": "Magnemite tem um corpo magnético. Ele pode flutuar no ar usando magnetismo. Ele pode gerar eletricidade e atacar inimigos.",
        "evolution_chain": [
            { "name": "Magneton", "level": 30, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png" },
            { "name": "Magnezone", "item": "Thunder Stone (in specific areas)", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png" }
        ],
        "weaknesses": ["Fire", "Fighting", "Ground"],
        "strengths": ["Normal", "Flying", "Rock", "Bug", "Grass", "Electric", "Psychic", "Ice", "Dragon", "Fairy", "Steel"]
    },
    {
        "id": 82,
        "name": "Magneton",
        "type": ["Electric", "Steel"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
        "description": "Magneton é uma evolução de três Magnemite. Eles se unem para formar um Pokémon mais forte. Eles podem gerar eletricidade poderosa e atacar inimigos.",
        "evolution_chain": [
            { "name": "Magnezone", "item": "Thunder Stone (in specific areas)", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png" }
        ],
        "weaknesses": ["Fire", "Fighting", "Ground"],
        "strengths": ["Normal", "Flying", "Rock", "Bug", "Grass", "Electric", "Psychic", "Ice", "Dragon", "Fairy", "Steel"]
    },
    {
        "id": 83,
        "name": "Farfetch'd",
        "type": ["Normal", "Flying"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
        "description": "Farfetch'd sempre carrega um talo de planta. Ele usa o talo como uma arma. Ele é muito habilidoso com o talo e pode usá-lo para lutar.",
        "evolution_chain": [],
        "weaknesses": ["Electric", "Rock", "Ice"],
        "strengths": ["Grass", "Fighting", "Bug"]
    },
    {
        "id": 84,
        "name": "Doduo",
        "type": ["Normal", "Flying"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
        "description": "Doduo tem duas cabeças. Cada cabeça tem seu próprio cérebro. Eles podem pensar independentemente. Eles são muito rápidos e podem correr muito rápido.",
        "evolution_chain": [
            { "name": "Dodrio", "level": 31, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png" }
        ],
        "weaknesses": ["Electric", "Rock", "Ice"],
        "strengths": ["Grass", "Fighting", "Bug"]
    },
    {
        "id": 85,
        "name": "Dodrio",
        "type": ["Normal", "Flying"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
        "description": "Dodrio tem três cabeças. Cada cabeça tem seu próprio cérebro. Eles podem pensar independentemente. Eles são muito rápidos e podem correr muito rápido e são muito perigosos.",
        "evolution_chain": [],
        "weaknesses": ["Electric", "Rock", "Ice"],
        "strengths": ["Grass", "Fighting", "Bug"]
    },
    {
        "id": 86,
        "name": "Seel",
        "type": ["Water"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
        "description": "Seel vive em águas frias. Ele tem uma pele grossa que o protege do frio. Ele pode nadar muito rápido e é capaz de mergulhar em grandes profundidades.",
        "evolution_chain": [
            { "name": "Dewgong", "level": 34, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png" }
        ],
        "weaknesses": ["Electric", "Grass"],
        "strengths": ["Fire", "Ground", "Rock"]
    },
    {
        "id": 87,
        "name": "Dewgong",
        "type": ["Water", "Ice"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
        "description": "Dewgong vive em águas frias. Ele tem uma pele grossa que o protege do frio. Ele pode nadar muito rápido e é capaz de mergulhar em grandes profundidades e é muito elegante.",
        "evolution_chain": [],
        "weaknesses": ["Electric", "Grass", "Fighting", "Rock"],
        "strengths": ["Fire", "Water", "Ice"]
    },
    {
        "id": 88,
        "name": "Grimer",
        "type": ["Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
        "description": "Grimer é um Pokémon que nasceu de lixo. Ele vive em lugares sujos. Ele pode liberar um cheiro terrível e é muito perigoso.",
        "evolution_chain": [
            { "name": "Muk", "level": 38, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png" }
        ],
        "weaknesses": ["Ground", "Psychic"],
        "strengths": ["Grass", "Fighting", "Poison", "Bug", "Fairy"]
    },
    {
        "id": 89,
        "name": "Muk",
        "type": ["Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
        "description": "Muk é um Pokémon que nasceu de lixo. Ele vive em lugares sujos. Ele pode liberar um cheiro terrível e é muito perigoso e tóxico.",
        "evolution_chain": [],
        "weaknesses": ["Ground", "Psychic"],
        "strengths": ["Grass", "Fighting", "Poison", "Bug", "Fairy"]
    },
    {
        "id": 90,
        "name": "Shellder",
        "type": ["Water"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
        "description": "Shellder tem uma concha dura. Ele pode fechar sua concha para se proteger. Ele pode atirar água de sua boca.",
        "evolution_chain": [
            { "name": "Cloyster", "item": "Water Stone", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png" }
        ],
        "weaknesses": ["Electric", "Grass"],
        "strengths": ["Fire", "Ground", "Rock"]
    },
    {
        "id": 91,
        "name": "Cloyster",
        "type": ["Water", "Ice"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
        "description": "Cloyster tem uma concha muito dura. Ele pode fechar sua concha para se proteger. Ele pode atirar água de sua boca e é muito resistente.",
        "evolution_chain": [],
        "weaknesses": ["Electric", "Grass", "Fighting", "Rock"],
        "strengths": ["Fire", "Water", "Ice"]
    },
    {
        "id": 92,
        "name": "Gastly",
        "type": ["Ghost", "Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
        "description": "Gastly é feito de gás. Ele pode flutuar no ar. Ele pode causar alucinações e é muito perigoso.",
        "evolution_chain": [
            { "name": "Haunter", "level": 25, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png" },
            { "name": "Gengar", "item": "Trade", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png" }
        ],
        "weaknesses": ["Ground", "Psychic", "Ghost", "Dark"],
        "strengths": ["Normal", "Fighting", "Poison", "Bug", "Grass", "Fairy"]
    },
    {
        "id": 93,
        "name": "Haunter",
        "type": ["Ghost", "Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
        "description": "Haunter é um Pokémon que vive nas sombras. Ele pode passar por paredes. Ele pode lamber seus inimigos e roubar sua força vital.",
        "evolution_chain": [
            { "name": "Gengar", "item": "Trade", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png" }
        ],
        "weaknesses": ["Ground", "Psychic", "Ghost", "Dark"],
        "strengths": ["Normal", "Fighting", "Poison", "Bug", "Grass", "Fairy"]
    },
    {
        "id": 94,
        "name": "Gengar",
        "type": ["Ghost", "Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
        "description": "Gengar é um Pokémon que vive nas sombras. Ele pode se esconder nas sombras e atacar inimigos. Ele pode roubar a força vital de seus inimigos e é muito perigoso.",
        "evolution_chain": [],
        "weaknesses": ["Ground", "Psychic", "Ghost", "Dark"],
        "strengths": ["Normal", "Fighting", "Poison", "Bug", "Grass", "Fairy"]
    },
    {
        "id": 95,
        "name": "Onix",
        "type": ["Rock", "Ground"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
        "description": "Onix é um Pokémon que vive no subsolo. Ele tem um corpo muito longo e forte. Ele pode se mover muito rápido no subsolo e é muito resistente.",
        "evolution_chain": [
            { "name": "Steelix", "item": "Metal Coat (Trade)", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png" }
        ],
        "weaknesses": ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
        "strengths": ["Fire", "Electric", "Poison", "Flying", "Rock", "Bug"]
    },
    {
        "id": 96,
        "name": "Drowzee",
        "type": ["Psychic"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
        "description": "Drowzee pode comer sonhos. Ele usa seu nariz para encontrar pessoas que estão dormindo. Ele pode causar pesadelos e é muito perigoso.",
        "evolution_chain": [
            { "name": "Hypno", "level": 26, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png" }
        ],
        "weaknesses": ["Bug", "Ghost", "Dark"],
        "strengths": ["Fighting", "Poison"]
    },
    {
        "id": 97,
        "name": "Hypno",
        "type": ["Psychic"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
        "description": "Hypno usa um pêndulo para hipnotizar seus inimigos. Ele pode comer sonhos e é muito perigoso. Ele pode causar pesadelos e é muito forte.",
        "evolution_chain": [],
        "weaknesses": ["Bug", "Ghost", "Dark"],
        "strengths": ["Fighting", "Poison"]
    },
    {
        "id": 98,
        "name": "Krabby",
        "type": ["Water"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
        "description": "Krabby tem garras muito fortes. Ele pode esmagar pedras com suas garras. Ele vive na praia e cava buracos na areia.",
        "evolution_chain": [
            { "name": "Kingler", "level": 28, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png" }
        ],
        "weaknesses": ["Electric", "Grass"],
        "strengths": ["Fire", "Ground", "Rock"]
    },
    {
        "id": 99,
        "name": "Kingler",
        "type": ["Water"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
        "description": "Kingler tem uma garra muito grande e forte. Ele pode esmagar pedras com sua garra. Ele vive na praia e cava buracos na areia e é muito forte.",
        "evolution_chain": [],
        "weaknesses": ["Electric", "Grass"],
        "strengths": ["Fire", "Ground", "Rock"]
    },
    {
        "id": 100,
        "name": "Voltorb",
        "type": ["Electric"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
        "description": "Voltorb se parece com uma Poké Bola. Ele é muito perigoso porque pode explodir a qualquer momento. Ele vive em usinas de energia.",
        "evolution_chain": [
            { "name": "Electrode", "level": 30, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png" }
        ],
        "weaknesses": ["Ground"],
        "strengths": ["Water", "Flying"]
    },
    {
        "id": 101,
        "name": "Electrode",
        "type": ["Electric"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
        "description": "Electrode é um Pokémon muito rápido. Ele pode se mover muito rápido. Ele é muito perigoso porque pode explodir a qualquer momento e é muito forte.",
        "evolution_chain": [],
        "weaknesses": ["Ground"],
        "strengths": ["Water", "Flying"]
    },
    {
        "id": 102,
        "name": "Exeggcute",
        "type": ["Grass", "Psychic"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
        "description": "Exeggcute é um grupo de seis ovos. Eles se comunicam por telepatia. Se um ovo for separado do grupo, ele se junta a outro grupo.",
        "evolution_chain": [
            { "name": "Exeggutor", "item": "Leaf Stone", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png" }
        ],
        "weaknesses": ["Fire", "Ice", "Poison", "Flying", "Bug", "Ghost", "Dark"],
        "strengths": ["Water", "Ground", "Rock", "Fighting", "Grass", "Electric", "Psychic"]
    },
    {
        "id": 103,
        "name": "Exeggutor",
        "type": ["Grass", "Psychic"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
        "description": "Exeggutor tem três cabeças. Cada cabeça tem seu próprio cérebro. Eles podem pensar independentemente. Ele pode usar seus poderes psíquicos e é muito forte.",
        "evolution_chain": [],
        "weaknesses": ["Fire", "Ice", "Poison", "Flying", "Bug", "Ghost", "Dark"],
        "strengths": ["Water", "Ground", "Rock", "Fighting", "Grass", "Electric", "Psychic"]
    },
    {
        "id": 104,
        "name": "Cubone",
        "type": ["Ground"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
        "description": "Cubone sempre usa o crânio de sua mãe morta como capacete. Ele chora à noite pela mãe. As lágrimas formam marcas no crânio.",
        "evolution_chain": [
            { "name": "Marowak", "level": 28, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png" }
        ],
        "weaknesses": ["Water", "Grass", "Ice"],
        "strengths": ["Fire", "Electric", "Poison", "Rock", "Steel"]
    },
    {
        "id": 105,
        "name": "Marowak",
        "type": ["Ground"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
        "description": "Marowak é um Pokémon que usa um osso como arma. Ele é muito habilidoso com o osso e pode usá-lo para lutar. Ele é muito forte e pode derrubar qualquer inimigo.",
        "evolution_chain": [],
        "weaknesses": ["Water", "Grass", "Ice"],
        "strengths": ["Fire", "Electric", "Poison", "Rock", "Steel"]
    },
    {
        "id": 106,
        "name": "Hitmonlee",
        "type": ["Fighting"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
        "description": "Hitmonlee tem pernas que podem se estender. Ele pode chutar seus inimigos com suas pernas. Ele é muito rápido e pode chutar muito forte.",
        "evolution_chain": [],
        "weaknesses": ["Flying", "Psychic", "Fairy"],
        "strengths": ["Normal", "Ice", "Rock", "Dark", "Steel"]
    },
    {
        "id": 107,
        "name": "Hitmonchan",
        "type": ["Fighting"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
        "description": "Hitmonchan tem punhos que podem girar. Ele pode socar seus inimigos com seus punhos. Ele é muito rápido e pode socar muito forte.",
        "evolution_chain": [],
        "weaknesses": ["Flying", "Psychic", "Fairy"],
        "strengths": ["Normal", "Ice", "Rock", "Dark", "Steel"]
    },
    {
        "id": 108,
        "name": "Lickitung",
        "type": ["Normal"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
        "description": "Lickitung tem uma língua muito longa. Ele pode usar sua língua para lamber qualquer coisa. Ele é muito pegajoso e pode prender seus inimigos.",
        "evolution_chain": [
            { "name": "Lickilicky", "item": "Rollout (move)", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png" }
        ],
        "weaknesses": ["Fighting"],
        "strengths": []
    },
    {
        "id": 109,
        "name": "Koffing",
        "type": ["Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
        "description": "Koffing é feito de gases tóxicos. Ele pode flutuar no ar. Ele pode liberar gases tóxicos e é muito perigoso.",
        "evolution_chain": [
            { "name": "Weezing", "level": 35, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png" }
        ],
        "weaknesses": ["Ground", "Psychic"],
        "strengths": ["Grass", "Fighting", "Poison", "Bug", "Fairy"]
    },
    {
        "id": 110,
        "name": "Weezing",
        "type": ["Poison"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
        "description": "Weezing é uma evolução de dois Koffing. Eles se unem para formar um Pokémon mais forte. Eles podem liberar gases tóxicos poderosos e são muito perigosos.",
        "evolution_chain": [],
        "weaknesses": ["Ground", "Psychic"],
        "strengths": ["Grass", "Fighting", "Poison", "Bug", "Fairy"]
    },
    {
        "id": 111,
        "name": "Rhyhorn",
        "type": ["Ground", "Rock"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
        "description": "Rhyhorn tem um corpo muito forte. Ele pode esmagar qualquer coisa com seu chifre. Ele é muito resistente e pode suportar ataques fortes.",
        "evolution_chain": [
            { "name": "Rhydon", "level": 42, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png" },
            { "name": "Rhyperior", "item": "Protector (Trade)", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png" }
        ],
        "weaknesses": ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
        "strengths": ["Fire", "Electric", "Poison", "Flying", "Rock", "Bug"]
    },
    {
        "id": 112,
        "name": "Rhydon",
        "type": ["Ground", "Rock"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
        "description": "Rhydon tem um corpo muito forte. Ele pode esmagar qualquer coisa com seu chifre. Ele é muito resistente e pode suportar ataques fortes e é muito perigoso.",
        "evolution_chain": [
            { "name": "Rhyperior", "item": "Protector (Trade)", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png" }
        ],
        "weaknesses": ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"],
        "strengths": ["Fire", "Electric", "Poison", "Flying", "Rock", "Bug"]
    },
    {
        "id": 113,
        "name": "Chansey",
        "type": ["Normal"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
        "description": "Chansey carrega um ovo nutritivo em sua bolsa. Ele compartilha o ovo com pessoas feridas. Ele é um Pokémon muito gentil.",
        "evolution_chain": [
            { "name": "Blissey", "item": "Friendship", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png" }
        ],
        "weaknesses": ["Fighting"],
        "strengths": []
    },
    {
        "id": 114,
        "name": "Tangela",
        "type": ["Grass"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
        "description": "Tangela é coberto por videiras. Ele pode usar suas videiras para prender seus inimigos. Ele é muito pegajoso e pode se esconder na grama.",
        "evolution_chain": [
            { "name": "Tangrowth", "item": "Ancient Power (move)", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png" }
        ],
        "weaknesses": ["Fire", "Ice", "Poison", "Flying", "Bug"],
        "strengths": ["Water", "Ground", "Rock", "Electric"]
    },
    {
        "id": 115,
        "name": "Kangaskhan",
        "type": ["Normal"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
        "description": "Kangaskhan carrega seu filho em sua bolsa. Ele é muito protetor com seu filho. Ele é muito forte e pode atacar inimigos com seus punhos.",
        "evolution_chain": [],
        "weaknesses": ["Fighting"],
        "strengths": []
    },
    {
        "id": 116,
        "name": "Horsea",
        "type": ["Water"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
        "description": "Horsea vive no oceano. Ele pode atirar tinta de sua boca para escapar de inimigos. Ele é muito rápido na água.",
        "evolution_chain": [
            { "name": "Seadra", "level": 32, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png" },
            { "name": "Kingdra", "item": "Dragon Scale (Trade)", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png" }
        ],
        "weaknesses": ["Electric", "Grass"],
        "strengths": ["Fire", "Ground", "Rock"]
    },
    {
        "id": 117,
        "name": "Seadra",
        "type": ["Water"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
        "description": "Seadra vive no oceano. Ele pode atirar tinta de sua boca para escapar de inimigos. Ele é muito rápido na água e é muito perigoso.",
        "evolution_chain": [
            { "name": "Kingdra", "item": "Dragon Scale (Trade)", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png" }
        ],
        "weaknesses": ["Electric", "Grass"],
        "strengths": ["Fire", "Ground", "Rock"]
    },
    {
        "id": 118,
        "name": "Goldeen",
        "type": ["Water"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
        "description": "Goldeen tem um chifre afiado. Ele pode usar seu chifre para atacar inimigos. Ele é muito rápido na água.",
        "evolution_chain": [
            { "name": "Seaking", "level": 33, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png" }
        ],
        "weaknesses": ["Electric", "Grass"],
        "strengths": ["Fire", "Ground", "Rock"]
    },
    {
        "id": 119,
        "name": "Seaking",
        "type": ["Water"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
        "description": "Seaking tem um chifre afiado. Ele pode usar seu chifre para atacar inimigos. Ele é muito rápido na água e é muito perigoso.",
        "evolution_chain": [],
        "weaknesses": ["Electric", "Grass"],
        "strengths": ["Fire", "Ground", "Rock"]
    },
    {
        "id": 120,
        "name": "Staryu",
        "type": ["Water"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
        "description": "Staryu tem um corpo em forma de estrela. Ele pode girar seu corpo para atacar inimigos. Ele vive no oceano e é muito rápido.",
        "evolution_chain": [
            { "name": "Starmie", "item": "Water Stone", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png" }
        ],
        "weaknesses": ["Electric", "Grass"],
        "strengths": ["Fire", "Ground", "Rock"]
    },
    {
        "id": 121,
        "name": "Starmie",
        "type": ["Water", "Psychic"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
        "description": "Starmie tem um corpo em forma de estrela. Ele pode girar seu corpo para atacar inimigos. Ele vive no oceano e é muito rápido e poderoso.",
        "evolution_chain": [],
        "weaknesses": ["Bug", "Ghost", "Grass", "Electric", "Dark"],
        "strengths": ["Fire", "Water", "Ice", "Fighting", "Poison", "Rock", "Steel"]
    },
    {
        "id": 122,
        "name": "Mr. Mime",
        "type": ["Psychic", "Fairy"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
        "description": "Mr. Mime é um mímico. Ele pode criar paredes invisíveis. Ele é muito habilidoso em mímica e pode enganar seus inimigos.",
        "evolution_chain": [],
        "weaknesses": ["Poison", "Ghost", "Steel"],
        "strengths": ["Fighting", "Psychic", "Dragon"]
    },
    {
        "id": 123,
        "name": "Scyther",
        "type": ["Bug", "Flying"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
        "description": "Scyther tem lâminas afiadas em seus braços. Ele pode cortar qualquer coisa com suas lâminas. Ele é muito rápido e pode atacar inimigos rapidamente.",
        "evolution_chain": [
            { "name": "Scizor", "item": "Metal Coat (Trade)", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png" }
        ],
        "weaknesses": ["Fire", "Flying", "Rock", "Electric", "Ice"],
        "strengths": ["Grass", "Fighting", "Poison", "Bug", "Fairy"]
    },
    {
        "id": 124,
        "name": "Jynx",
        "type": ["Ice", "Psychic"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
        "description": "Jynx pode controlar o gelo. Ele pode usar seus lábios para beijar seus inimigos e congelá-los. Ele é muito perigoso e pode causar paralisia.",
        "evolution_chain": [],
        "weaknesses": ["Fire", "Bug", "Rock", "Ghost", "Dark", "Steel"],
        "strengths": ["Ice", "Psychic"]
    },
    {
        "id": 125,
        "name": "Electabuzz",
        "type": ["Electric"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
        "description": "Electabuzz vive perto de usinas de energia. Ele pode gerar eletricidade e atacar inimigos. Ele é muito forte e pode derrubar qualquer inimigo.",
        "evolution_chain": [
            { "name": "Electivire", "item": "Electirizer (Trade)", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png" }
        ],
        "weaknesses": ["Ground"],
        "strengths": ["Water", "Flying"]
    },
    {
        "id": 126,
        "name": "Magmar",
        "type": ["Fire"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
        "description": "Magmar vive em vulcões. Ele pode cuspir fogo de sua boca. Ele é muito forte e pode derreter qualquer coisa.",
        "evolution_chain": [
            { "name": "Magmortar", "item": "Magmarizer (Trade)", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png" }
        ],
        "weaknesses": ["Water", "Ground", "Rock"],
        "strengths": ["Grass", "Ice", "Bug", "Steel"]
    },
    {
        "id": 127,
        "name": "Pinsir",
        "type": ["Bug"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
        "description": "Pinsir tem chifres fortes. Ele pode esmagar qualquer coisa com seus chifres. Ele é muito forte e pode derrubar qualquer inimigo.",
        "evolution_chain": [],
        "weaknesses": ["Fire", "Flying", "Rock"],
        "strengths": ["Grass", "Psychic", "Dark"]
    },
    {
        "id": 128,
        "name": "Tauros",
        "type": ["Normal"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
        "description": "Tauros é um Pokémon muito agressivo. Ele ataca qualquer um que o irrite. Ele pode carregar seus inimigos com seus chifres.",
        "evolution_chain": [],
        "weaknesses": ["Fighting"],
        "strengths": []
    },
    {
        "id": 129,
        "name": "Magikarp",
        "type": ["Water"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
        "description": "Magikarp é um Pokémon muito fraco. Ele só pode pular. Ele é muito inútil em batalha.",
        "evolution_chain": [
            { "name": "Gyarados", "level": 20, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png" }
        ],
        "weaknesses": ["Electric", "Grass"],
        "strengths": ["Fire", "Ground", "Rock"]
    },
    {
        "id": 130,
        "name": "Gyarados",
        "type": ["Water", "Flying"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
        "description": "Gyarados é um Pokémon muito poderoso. Ele pode destruir qualquer coisa com seu corpo. Ele é muito perigoso e pode causar tsunamis.",
        "evolution_chain": [],
        "weaknesses": ["Electric", "Rock"],
        "strengths": ["Fire", "Water", "Fighting", "Bug", "Steel"]
    },
    {
        "id": 131,
        "name": "Lapras",
        "type": ["Water", "Ice"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
        "description": "Lapras é um Pokémon muito gentil. Ele pode levar pessoas em suas costas para atravessar o oceano. Ele é muito inteligente e pode entender a fala humana.",
        "evolution_chain": [],
        "weaknesses": ["Electric", "Grass", "Fighting", "Rock"],
        "strengths": ["Fire", "Water", "Ice"]
    },
    {
        "id": 132,
        "name": "Ditto",
        "type": ["Normal"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        "description": "Ditto pode se transformar em qualquer Pokémon. Ele pode copiar a aparência e as habilidades de qualquer Pokémon. Ele é muito raro e difícil de encontrar.",
        "evolution_chain": [],
        "weaknesses": ["Fighting"],
        "strengths": []
    },
    {
        "id": 133,
        "name": "Eevee",
        "type": ["Normal"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
        "description": "Eevee tem a capacidade de alterar a composição de seu corpo para se adequar ao seu ambiente circundante.",
        "evolution_chain": [
            { "name": "Vaporeon", "item": "Water Stone", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png" },
            { "name": "Jolteon", "item": "Thunder Stone", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png" },
            { "name": "Flareon", "item": "Fire Stone", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png" },
            { "name": "Espeon", "item": "Friendship (Day)", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png" },
            { "name": "Umbreon", "item": "Friendship (Night)", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png" },
            { "name": "Leafeon", "item": "Moss Rock (Level Up)", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png" },
            { "name": "Glaceon", "item": "Ice Rock (Level Up)", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png" },
            { "name": "Sylveon", "item": "Affection (2 Hearts) + Fairy Move", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png" }
        ],
        "weaknesses": ["Fighting"],
        "strengths": []
    },
    {
        "id": 134,
        "name": "Vaporeon",
        "type": ["Water"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
        "description": "Vaporeon tem a capacidade de derreter em água. Ele pode se esconder na água e atacar inimigos. Ele é muito rápido na água e é muito elegante.",
        "evolution_chain": [],
        "weaknesses": ["Electric", "Grass"],
        "strengths": ["Fire", "Ground", "Rock"]
    },
    {
        "id": 135,
        "name": "Jolteon",
        "type": ["Electric"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
        "description": "Jolteon tem a capacidade de gerar eletricidade. Ele pode atacar inimigos com eletricidade. Ele é muito rápido e pode se mover muito rápido.",
        "evolution_chain": [],
        "weaknesses": ["Ground"],
        "strengths": ["Water", "Flying"]
    },
    {
        "id": 136,
        "name": "Flareon",
        "type": ["Fire"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
        "description": "Flareon tem a capacidade de cuspir fogo. Ele pode atacar inimigos com fogo. Ele é muito forte e pode derreter qualquer coisa.",
        "evolution_chain": [],
        "weaknesses": ["Water", "Ground", "Rock"],
        "strengths": ["Grass", "Ice", "Bug", "Steel"]
    },
    {
        "id": 137,
        "name": "Porygon",
        "type": ["Normal"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
        "description": "Porygon é um Pokémon artificial. Ele pode se mover livremente no ciberespaço. Ele é muito inteligente e pode aprender rapidamente.",
        "evolution_chain": [
            { "name": "Porygon2", "item": "Up-Grade (Trade)", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png" },
            { "name": "Porygon-Z", "item": "Dubious Disc (Trade)", "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png" }
        ],
        "weaknesses": ["Fighting"],
        "strengths": []
    },
    {
        "id": 138,
        "name": "Omanyte",
        "type": ["Rock", "Water"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
        "description": "Omanyte é um Pokémon fóssil. Ele viveu há milhões de anos. Ele pode nadar muito rápido e é muito resistente.",
        "evolution_chain": [
            { "name": "Omastar", "level": 40, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png" }
        ],
        "weaknesses": ["Grass", "Electric", "Fighting", "Ground"],
        "strengths": ["Fire", "Ice", "Flying", "Bug", "Rock"]
    },
    {
        "id": 139,
        "name": "Omastar",
        "type": ["Rock", "Water"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
        "description": "Omastar é um Pokémon fóssil. Ele viveu há milhões de anos. Ele pode nadar muito rápido e é muito resistente e perigoso.",
        "evolution_chain": [],
        "weaknesses": ["Grass", "Electric", "Fighting", "Ground"],
        "strengths": ["Fire", "Ice", "Flying", "Bug", "Rock"]
    },
    {
        "id": 140,
        "name": "Kabuto",
        "type": ["Rock", "Water"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
        "description": "Kabuto é um Pokémon fóssil. Ele viveu há milhões de anos. Ele pode nadar muito rápido e é muito resistente.",
        "evolution_chain": [
            { "name": "Kabutops", "level": 40, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png" }
        ],
        "weaknesses": ["Grass", "Electric", "Fighting", "Ground"],
        "strengths": ["Fire", "Ice", "Flying", "Bug", "Rock"]
    },
    {
        "id": 141,
        "name": "Kabutops",
        "type": ["Rock", "Water"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
        "description": "Kabutops é um Pokémon fóssil. Ele viveu há milhões de anos. Ele pode nadar muito rápido e é muito resistente e perigoso.",
        "evolution_chain": [],
        "weaknesses": ["Grass", "Electric", "Fighting", "Ground"],
        "strengths": ["Fire", "Ice", "Flying", "Bug", "Rock"]
    },
    {
        "id": 142,
        "name": "Aerodactyl",
        "type": ["Rock", "Flying"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
        "description": "Aerodactyl é um Pokémon fóssil. Ele viveu há milhões de anos. Ele pode voar muito rápido e é muito perigoso.",
        "evolution_chain": [],
        "weaknesses": ["Water", "Electric", "Ice", "Rock", "Steel"],
        "strengths": ["Normal", "Fire", "Flying", "Poison", "Bug"]
    },
    {
        "id": 143,
        "name": "Snorlax",
        "type": ["Normal"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
        "description": "Snorlax só come e dorme. Ele come 400 kg de comida por dia. Ele é muito grande e pesado e pode bloquear estradas.",
        "evolution_chain": [],
        "weaknesses": ["Fighting"],
        "strengths": []
    },
    {
        "id": 144,
        "name": "Articuno",
        "type": ["Ice", "Flying"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
        "description": "Articuno é um Pokémon lendário. Ele pode controlar o gelo. Ele pode criar nevascas e é muito elegante.",
        "evolution_chain": [],
        "weaknesses": ["Fire", "Electric", "Rock", "Steel"],
        "strengths": ["Grass", "Fighting", "Bug", "Dragon"]
    },
    {
        "id": 145,
        "name": "Zapdos",
        "type": ["Electric", "Flying"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
        "description": "Zapdos é um Pokémon lendário. Ele pode controlar a eletricidade. Ele pode criar tempestades e é muito poderoso.",
        "evolution_chain": [],
        "weaknesses": ["Ice", "Rock"],
        "strengths": ["Fighting", "Flying", "Steel", "Electric", "Grass", "Bug"]
    },
    {
        "id": 146,
        "name": "Moltres",
        "type": ["Fire", "Flying"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
        "description": "Moltres é um Pokémon lendário. Ele pode controlar o fogo. Ele pode criar incêndios e é muito poderoso.",
        "evolution_chain": [],
        "weaknesses": ["Water", "Electric", "Rock"],
        "strengths": ["Grass", "Fighting", "Bug", "Steel", "Ice", "Fairy"]
    },
    {
        "id": 147,
        "name": "Dratini",
        "type": ["Dragon"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
        "description": "Dratini é um Pokémon muito raro. Ele vive em águas profundas. Ele é muito pequeno e pode se mover muito rápido.",
        "evolution_chain": [
            { "name": "Dragonair", "level": 30, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png" },
            { "name": "Dragonite", "level": 55, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png" }
        ],
        "weaknesses": ["Ice", "Dragon", "Fairy"],
        "strengths": ["Fire", "Water", "Electric", "Grass"]
    },
    {
        "id": 148,
        "name": "Dragonair",
        "type": ["Dragon"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
        "description": "Dragonair é um Pokémon muito raro. Ele vive em águas profundas. Ele é muito elegante e pode voar usando suas asas.",
        "evolution_chain": [
            { "name": "Dragonite", "level": 55, "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png" }
        ],
        "weaknesses": ["Ice", "Dragon", "Fairy"],
        "strengths": ["Fire", "Water", "Electric", "Grass"]
    },
    {
        "id": 149,
        "name": "Dragonite",
        "type": ["Dragon", "Flying"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
        "description": "Dragonite é um Pokémon muito poderoso. Ele pode voar ao redor do mundo em 16 horas. Ele é muito gentil e pode ajudar pessoas em perigo.",
        "evolution_chain": [],
        "weaknesses": ["Ice", "Rock", "Dragon", "Fairy"],
        "strengths": ["Fire", "Water", "Electric", "Grass", "Fighting", "Bug"]
    },
    {
        "id": 150,
        "name": "Mewtwo",
        "type": ["Psychic"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
        "description": "Mewtwo é um Pokémon criado por engenharia genética. Embora o seu poder científico tenha criado este Pokémon, ele deu a Mewtwo um coração selvagem e um desejo de destruir.",
        "evolution_chain": [],
        "weaknesses": ["Bug", "Ghost", "Dark"],
        "strengths": ["Fighting", "Poison"]
    },
    {
        "id": 151,
        "name": "Mew",
        "type": ["Psychic"],
        "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
        "description": "Mew é dito ter o DNA de todos os Pokémon. Pode tornar-se invisível à vontade, por isso escapa completamente à detecção, mesmo quando se aproxima de pessoas.",
        "evolution_chain": [],
        "weaknesses": ["Bug", "Ghost", "Dark"],
        "strengths": ["Fighting", "Poison"]
    }
];
