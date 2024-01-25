// const { getPokemonById } = require('./js-fundation/06-promises')
import { getPokemonById } from './js-fundation/06-promises';
import { buildLogger } from './pluggins/logger.pluggin'

const logger = buildLogger('app.js');


// logger.log('Hola mundo');
// logger.error('error desde logger')

// getPokemonById(4)
//     .then( (pokemon) => console.log({pokemon}) )
//     .catch( (err) => console.log(err) )
//     .finally( () => console.log('Finalmente') )