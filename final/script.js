const bookies = [
  {
    name: '1XBet',
    logo: '1xbet.svg',
    tennisRule: 'set',
    tennisRuleDescription: 'Si un partido se interrumpe debido a la retirada o descalificación de un jugador en el primer set, todas las apuestas se saldarán a cuota 1.'
  },
  {
    name: '888Sport',
    logo: '888sport.svg',
    tennisRule: 'set',
    tennisRuleDescription: 'Tu apuesta se aceptará siempre y cuando se juegue el set o encuentro correspondiente en el torneo aplicable.'
  },
  {
    name: 'AdmiralBet',
    logo: 'admiralbet.png',
    tennisRule: 'partido',
    tennisRuleDescription: 'Si un partido finaliza por la retirada de un jugador o por descalificación, se cancelarán todas las apuestas abiertas a todo el partido.'
  },
  {
    name: 'Apuestas Valor',
    logo: 'apuestas-valor.png',
    tennisRule: 'set',
    tennisRuleDescription: 'Para que las modalidades de apuestas de tenis sean consideradas válidas será requisito imprescindible que se dispute de forma íntegra el 1er Set del partido, en caso contrario todos los pronósticos sobre dicha modalidad serán anulados.'
  },
  {
    name: 'AUPABET',
    logo: 'aupabet.png',
    tennisRule: 'set',
    tennisRuleDescription: 'Para que las modalidades de apuestas de tenis sean consideradas válidas será requisito imprescindible que se dispute de forma íntegra el 1er Set del partido, en caso contrario todos los pronósticos sobre dicha modalidad serán anulados.'
  },
  {
    name: 'bet365',
    logo: 'bet365.svg',
    tennisRule: 'partido',
    tennisRuleDescription: 'Se anularán todas las apuestas en el caso de que un encuentro comience pero no se complete.'
  },
  {
    name: 'Bet777',
    logo: 'bet777.png',
    tennisRule: 'partido',
    tennisRuleDescription: 'En caso de que un partido comience pero no sea completado, todas las apuestas se anularán.'
  },
  {
    name: 'Betfair Exchange',
    logo: 'betfair.svg',
    tennisRule: 'set',
    tennisRuleDescription: 'Como norma general, la política de Betfair es anular los partidos en los que no se finaliza al menos un set.'
  },
  {
    name: 'Betfair Sportsbook',
    logo: 'betfair.svg',
    tennisRule: 'set',
    tennisRuleDescription: 'Como norma general, la política de Betfair es anular los partidos en los que no se finaliza al menos un set.'
  },
  {
    name: 'Betsson',
    logo: 'betsson.svg',
    tennisRule: 'partido',
    tennisRuleDescription: 'Cuando el jugador es retirado o descalificado por cualquier motivo, entonces las apuestas ya sorteadas y realizadas siguen siendo válidas. Todas las otras apuestas deben ser devueltas, incluso si los resultados son evidentes.'
  },
  {
    name: 'Betway',
    logo: 'betway.svg',
    tennisRule: 'partido',
    tennisRuleDescription: 'Si un partido comienza pero no es completado, todas las cuotas serán anuladas.'
  },
  {
    name: 'bwin',
    logo: 'bwin.svg',
    tennisRule: 'set',
    tennisRuleDescription: 'Si un jugador abandona (se retira) o es descalificado después de que se complete el primer set, el jugador que avanza a la próxima ronda o que sea declarado como ganador por el juez de silla será considerado como el ganador. Si no se completa el primer set, se anularán todas las apuestas de partido.'
  },
  {
    name: 'Casino Barcelona',
    logo: 'casino-barcelona.svg',
    tennisRule: 'partido',
    tennisRuleDescription: 'En el caso de abandono de un jugador, se declararán nulas todas las apuestas relativas al resultado final del partido, o sobre todo suceso (ganador de un set/juego/punto…) cuyo resultado no se haya alcanzado.'
  },
  {
    name: 'Casumo',
    logo: 'casumo.svg',
    tennisRule: 'set',
    tennisRuleDescription: 'Todos los tipos de ofertas que no estén especificados anteriormente exigen que finalice al menos un set para que las apuestas sean válidas.'
  },
  {
    name: 'Codere',
    logo: 'codere.svg',
    tennisRule: 'punto',
    tennisRuleDescription: 'Si un jugador se retira una vez empezado el partido, y la organización le declara perdedor del partido, la apuesta será válida.'
  },
  {
    name: 'Dafabet',
    logo: 'dafabet.svg',
    tennisRule: 'partido',
    tennisRuleDescription: 'Si un jugador (o pareja) se retira o es descalificado durante un partido, todas las apuestas que no hayan sido determinadas serán canceladas.'
  },
  {
    name: 'DAZN Bet',
    logo: 'dazn-bet.svg',
    tennisRule: 'partido',
    tennisRuleDescription: 'En caso de incumplimiento, retirada o abandono de algún jugador, todas las apuestas no resueltas se considerarán nulas.'
  },
  {
    name: 'eBingo',
    logo: 'ebingo.svg',
    tennisRule: 'partido',
    tennisRuleDescription: 'Cuando el jugador es retirado o descalificado por cualquier motivo, entonces las apuestas ya sorteadas y realizadas siguen siendo válidas. Todas las otras apuestas deben ser devueltas, incluso si los resultados son evidentes.'
  },
  {
    name: 'efbet',
    logo: 'efbet.svg',
    tennisRule: 'partido',
    tennisRuleDescription: 'En caso de que un jugador se retire o sea descalificado durante el partido, se liquidarán todos los tipos de apuestas para los que haya un resultado antes del retiro o la descalificación del jugador, a menos que se indique lo contrario en las reglas de la apuesta correspondiente. Todas las demás apuestas para las que no se haya determinado un resultado final serán liquidadas con una cuota "1", o sea se anulan.'
  },
  {
    name: 'enracha',
    logo: 'enracha.png',
    tennisRule: 'set',
    tennisRuleDescription: 'Todos los tipos de ofertas que no estén especificados anteriormente exigen que finalice al menos un set para que las apuestas sean válidas.'
  },
  {
    name: 'Golden Bull',
    logo: 'golden-bull.png',
    tennisRule: 'set',
    tennisRuleDescription: 'Todos los tipos de ofertas que no estén especificados anteriormente exigen que finalice al menos un set para que las apuestas sean válidas.'
  },
  {
    name: 'GoldenPark',
    logo: 'goldenpark.svg',
    tenis: 'partido',
    tennisRuleDescription: 'En el caso de abandono de un jugador, se declararán nulas todas las apuestas relativas al resultado final del partido.'
  },
  {
    name: 'Gran Madrid | Casino Online',
    logo: 'gran-madrid-casino-online.svg',
    tennisRule: 'partido',
    tennisRuleDescription: '...en caso de retirada de algún jugador, o incumplimiento (lesión, enfermedad o circunstancia personal), descalificación o abandono, todos los mercados que hayan sido resueltos en el juego serán liquidados y todos los que no se hayan resuelto se cancelarán.'
  },
  {
    name: 'Interwetten',
    logo: 'interwetten.svg',
    tennisRule: 'partido',
    tennisRuleDescription: 'Si el resultado de un partido de tenis, voleibol, voleibol playa, dardos, bádminton, snooker, bolos o tenis de mesa se basa en una no presentación, retirada/rendición de un jugador, o si el partido no se juega hasta el final del tiempo reglamentario de juego por cualquier otro motivo, se reintegrarán las apuestas.'
  },
  {
    name: 'JOKERBET',
    logo: 'jokerbet.svg',
    tennisRule: 'partido',
    tennisRuleDescription: '...en caso de un retiro de algún jugador, todos los mercados que hayan sido decididos en el juego serán liquidados respectivamente y todos los demás se cancelarán.'
  },
  {
    name: 'Juegging',
    logo: 'juegging.svg',
    tennisRule: 'set',
    tennisRuleDescription: 'Para que las modalidades de apuestas de tenis sean consideradas válidas será requisito imprescindible que se dispute de forma íntegra el 1er Set del partido, en caso contrario todos los pronósticos sobre dicha modalidad serán anulados.'
  },
  {
    name: 'KIROLBET',
    logo: 'kirolbet.svg',
    tennisRule: 'set',
    tennisRuleDescription: 'Para que las modalidades de apuestas de tenis sean consideradas válidas será requisito imprescindible que se dispute de forma íntegra el 1er Set del partido, en caso contrario todos los pronósticos sobre dicha modalidad serán anulados.'
  },
  {
    name: 'LeoVegas',
    logo: 'leovegas.svg',
    tennisRule: 'set',
    tennisRuleDescription: 'Todos los tipos de ofertas que no estén especificados anteriormente exigen que finalice al menos un set para que las apuestas sean válidas.'
  },
  {
    name: 'Luckia',
    logo: 'luckia.svg',
    tennisRule: 'partido',
    tennisRuleDescription: 'Si el número reglamentario de sets en cada caso no ha sido completado, todas las apuestas serán consideradas nulas.'
  },
  {
    name: 'Marathonbet',
    logo: 'marathonbet.svg',
    tennisRule: 'set',
    tennisRuleDescription: 'Si un jugador se retira o es descalificado, las apuestas al resultado del partido serán válidas siempre y cuando se haya completado un set; en caso contrario, se anularán.',
    tennisRuleLink: 'https://www.marathonbet.es/es/help/sports_rules/rules_sport_by_sport/tennis/'
  },
  {
    name: 'MARCAapuestas',
    logo: 'marcaapuestas.svg',
    tennisRule: 'partido',
    tennisRuleDescription: 'Si un partido no se completa en su totalidad, las apuestas serán nulas, a excepción de las apuestas realizadas en mercados que ya se puedan determinar en el momento del abandono. Por ejemplo, si un jugador se retira durante el trascurso del segundo set, las apuestas a ganador del partido se declararán nulas, mientras que aquellas a ganador del primer set se resolverán de acuerdo con el resultado del primer set.',
    tennisRuleLink: 'https://www.marcaapuestas.es/reglas'
  },
  {
    name: 'OlyBet',
    logo: 'olybet.svg',
    tennisRule: 'partido',
    tennisRuleDescription: 'En el caso de abandono de un jugador por lesión, retiro u otra causa, se declararán nulas todas las apuestas relativas al resultado final del partido, o aquellos mercados cuyo resultado no se haya podido determinar, por ejemplo, ganador del set, totales de juegos, handicaps, etc. Las apuestas cuyos resultados hayan sido determinados antes del retiro del jugador, el resultado prevalecerá independientemente del retiro.',
    tennisRuleLink: 'https://apuestas.olybet.es/es/reglas-de-apuestas-deportivas'
  },
  {
    name: 'Paf',
    logo: 'paf.svg',
    tennisRule: 'set',
    tennisRuleDescription: 'Todos los tipos de ofertas que no estén especificados anteriormente exigen que finalice al menos un set para que las apuestas sean válidas.'
  },
  {
    name: 'Pastón',
    logo: 'paston.svg',
    tennisRule: 'partido',
    tennisRuleDescription: 'Cuando el jugador es retirado o descalificado por cualquier motivo, entonces las apuestas ya sorteadas y realizadas siguen siendo válidas.',
    tennisRuleLink: 'https://www.paston.es/img/ayuda/Documento-Reglas-DEF-Paston.pdf'
  },
  {
    name: 'PokerStars',
    logo: 'pokerstars.svg',
    tennisRule: 'set',
    tennisRuleDescription: '...si la retirada o descalificación se producen antes de la conclusión del primer set, todas las apuestas a ganador del partido se anularán. Si la retirada o la descalificación se producen tras la conclusión del primer set, el jugador o la pareja que pasan a la siguiente ronda (o que gana el torneo, en caso de ser la final) se considerarán ganadores a efectos de cualquier apuesta a ganador del partido, y las apuestas a ganador del partido realizadas al jugador o pareja retirados o descalificados se anularán.',
    tennisRuleLink: 'https://www.pokerstars.es/sports/games/rules/tennis/'
  },
  {
    name: 'RETAbet',
    logo: 'retabet.svg',
    tennisRule: 'partido',
    tennisRuleDescription: 'En torneos, si durante la celebración de un partido este finaliza antes de tiempo por la lesión o descalificación de uno de los participantes, se anularán todos los pronósticos relativos al mercado “ganador partido”, independientemente del resultado del partido en ese momento.',
    tennisRuleLink: 'https://www.retabet.es/files/es/pdf/normativa_RETA_Estatal.pdf'
  },
  {
    name: 'SpeedyBet',
    logo: 'speedybet.svg',
    tennisRule: 'set',
    tennisRuleDescription: 'Todos los tipos de ofertas que no estén especificados anteriormente exigen que finalice al menos un set para que las apuestas sean válidas.'
  },
  {
    name: 'Sportium',
    logo: 'sportium.svg',
    tennisRule: 'set',
    tennisRuleDescription: 'Si un jugador se retira o es descalificado una vez se ha completado totalmente el primer set, su rival será considerado ganador, saldándose las apuestas de emparejamientos de acuerdo con dicho resultado, el resto de los mercados se saldarán nulos a no ser que el resultado ya se pueda determinar. Si el retiro se produce antes o durante el primer set, las apuestas se saldarán como nulas.',
    tennisRuleLink: 'https://www.sportium.es/ayuda'
  },
  {
    name: 'TonyBet',
    logo: 'tonybet.svg',
    tennisRule: 'partido',
    tennisRuleDescription: 'Resultado del partido: predecir el resultado del partido. Se anula si el partido no se completa.',
    tennisRuleLink: 'https://tonybet.es/help/betting-rules'
  },
  {
    name: 'Versus',
    logo: 'versus.svg',
    tennisRule: 'partido',
    tennisRuleDescription: 'Si un partido no se completa en su totalidad, las apuestas serán nulas, a excepción de las apuestas realizadas en mercados que ya se puedan determinar en el momento del abandono.',
    tennisRuleLink: 'https://www.versus.es/reglas-de-tenis'
  },
  {
    name: 'William Hill',
    logo: 'william-hill.svg',
    tennisRule: 'partido',
    tennisRuleDescription: 'Si un jugador es descalificado o se retira del partido, las apuestas realizadas a este mercado se anularán, ya que el partido no se ha jugado en su totalidad.',
    tennisRuleLink: 'https://williamhill-es.custhelp.com/app/answers/detail/a_id/14846'
  },
  {
    name: 'Winamax',
    logo: 'winamax.svg',
    tennisRule: 'partido',
    tennisRuleDescription: 'Salvo mención en contra, todas las apuestas relativas a una fase de juego en curso en el momento de la retirada o descalificación (fundamentalmente el ganador del partido, el marcador del partido en sets...) se anulan.',
    tennisRuleLink: 'https://www.winamax.es/terminos-y-condiciones-apuestas-deportivas#tenis'
  },
  {
    name: 'Yaass Casino',
    logo: 'yaass-casino.svg',
    tennisRule: 'set',
    tennisRuleDescription: 'Si un jugador se retira o es descalificado antes de la finalización del 1er set todos los pronósticos serán anulados salvo aquellos pronósticos de modalidades de apuestas del 1er set que se hayan resuelto...',
    tennisRuleLink: 'https://www.yaasscasino.es/reglas/reglas-apuestas'
  },
  {
    name: 'YoSports',
    logo: 'yosports.svg',
    tennisRule: 'set',
    tennisRuleDescription: 'Todos los tipos de ofertas que no estén especificados anteriormente exigen que finalice al menos un set para que las apuestas sean válidas.'
  },
  {
    name: 'ZEbet',
    logo: 'zebet.svg',
    tennisRule: 'partido',
    tennisRuleDescription: 'Una apuesta sobre un resultado final de un partido de tenis es válida una vez que se ha jugado el último punto del último set del partido.',
    tennisRuleLink: 'https://www.zebet.es/es/personal-data/regulation'
  }
]

// Cargar casas en el select

function selectLoader() {
  const selectElement = document.getElementById('tennisRule')
  
  if (selectElement) {
    bookies.forEach(bookie => {
      const option = document.createElement('option')
      option.value = bookie.name
      option.textContent = bookie.name
      selectElement.appendChild(option)
    })
  }
}

document.addEventListener('DOMContentLoaded', selectLoader)

// Devolver la comparativa de casas

function bookieCompare() {
  const bookieSelected = document.getElementById('tennisRule').value
  let bookieSelectedLogo = ''
  let bookieSelectedRule = ''
  let bookieSelectedRuleDescription = ''

  bookies.forEach(bookie => {
    if (bookie.name === bookieSelected) {
      bookieSelectedLogo = bookie.logo
      bookieSelectedRule = bookie.tennisRule
      bookieSelectedRuleDescription = bookie.tennisRuleDescription

    }
  });

  const tennisRuleResult = document.getElementById('tennisRuleResult')
  const tennisRuleResultP = document.getElementById('tennisRuleResult-p')
  const tennisRuleResultCite = document.getElementById('tennisRuleResult-cite')

  tennisRuleResultP.innerHTML = `<span class="font-bold">${bookieSelected}</span> aplica las reglas de <span class="font-bold">${bookieSelectedRule}</span>. En su reglamento de apuestas, establecen lo siguiente:`

  tennisRuleResultCite.innerHTML = `"${bookieSelectedRuleDescription}"`

  const matchingBookies = bookies.filter(bookie => bookie.tennisRule === bookieSelectedRule);

  let tennisRuleResultLogos = document.getElementById('tennisRuleResult-2-logos')
  let tennisRuleResultP2 = document.getElementById('tennisRuleResult-p2')

  tennisRuleResultLogos.innerHTML = ''

  if(bookieSelected != 'Codere') {
    matchingBookies.forEach(matchingBookie => {
      if (matchingBookie.name != bookieSelected) {
        tennisRuleResultP2.innerHTML = 'Listado de casas con las mismas reglas para cubrir sin riesgo:'
        tennisRuleResultLogos.innerHTML += `<img class="inline w-25" src="img/${matchingBookie.logo}">`
      }
    })
  }
  else {
    tennisRuleResultP2.innerHTML = '<span class="font-bold">⚠️ Atención:</span>'
    tennisRuleResultLogos.innerHTML = '<p>Codere es actualmente la única casa de apuestas que aplica las reglas de punto en tenis. Esto significa que no hay otras casas con las mismas normas para realizar coberturas sin riesgo. Si decides cubrir una apuesta, deberás hacerlo bajo tu propia responsabilidad, considerando el riesgo que esto implica.</p>'
  }
  
  
  const hiddenDiv1 = document.getElementById('tennisRuleResult')
  const hiddenDiv2 = document.getElementById('tennisRuleResult-2')
  
  if (bookieSelected === 'Elige una casa') {
    hiddenDiv1.classList.add('hidden')
    hiddenDiv2.classList.add('hidden')
  }
  else{
    hiddenDiv1.classList.remove('hidden')
    hiddenDiv2.classList.remove('hidden')
  }
    
}

document.getElementById('tennisRule').addEventListener('change', bookieCompare)

function toogleDarkMode() {
  const svgDark = document.getElementById('dark-svg')  
  const svgWhite = document.getElementById('white-svg')
  
  if (svgWhite.classList.contains('hidden')) {
    svgWhite.classList.remove('hidden')
    svgDark.classList.add('hidden')
    document.documentElement.classList.remove('dark')
  }
  else if (svgDark.classList.contains('hidden')) {
    svgDark.classList.remove('hidden')
    svgWhite.classList.add('hidden')
    document.documentElement.classList.add('dark')
  }
}

document.getElementById('darkMode').addEventListener('click',toogleDarkMode)