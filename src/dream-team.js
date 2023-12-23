const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const arrTeam = [];
  if (Array.isArray(members)) {
      members.forEach(el => {
    // el.trim();
    if (typeof (el) === 'string') {
      arrTeam.push(el.trim()[0].toUpperCase());
    }
  });
  return arrTeam.sort().join('');
  } else {
   return false;
  }
}

module.exports = {
  createDreamTeam
};
