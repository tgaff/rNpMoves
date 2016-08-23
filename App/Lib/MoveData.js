var allMoves = require('./movesOutput.json');
const QUICK_MOVES = allMoves.quickMoves
const POWER_MOVES = allMoves.powerMoves


function lookupMoveInfoByName(moveName, moveSet) {
  moveName = moveName.toLowerCase()
  return moveSet[moveName]
}
export function lookupQuickMoveInfoByName(moveName) { return lookupMoveInfoByName(moveName, QUICK_MOVES)}
export function lookupPowerMoveInfoByName(moveName) { return lookupMoveInfoByName(moveName, POWER_MOVES)}
