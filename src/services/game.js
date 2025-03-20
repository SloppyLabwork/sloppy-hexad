const getPlayerDecks = (game, ixPlayer) => {
  if (!game?.players) {
    return []
  }

  const player = game.players[ixPlayer]
  if (!player) {
    return []
  }
  const opponent = game.players[1 - ixPlayer]

  const playerDecks = [...player.decks]
  playerDecks.sort((a, b) => {
    if (player.pick1 === a) {
      return -1
    }
    if (player.pick1 === b) {
      return 1
    }
    if (player.pick2 === a) {
      return -1
    }
    if (player.pick2 === b) {
      return 1
    }
    if (player.pick3 === a) {
      return -1
    }
    if (player.pick3 === b) {
      return 1
    }
    if (opponent?.ban === a) {
      return 1
    }
    if (opponent?.ban === b) {
      return -1
    }
    if (opponent?.ban2 === a) {
      return 1
    }
    if (opponent?.ban2 === b) {
      return -1
    }
    return 0
  })

  const selectFor =
    (ixPlayer === 1 && !opponent?.ban && 'ban') ||
    (ixPlayer === 0 && opponent?.ban && !player.safe && 'safe') ||
    (ixPlayer === 1 && player.safe && !opponent?.ban2 && 'ban2') ||
    (ixPlayer === 0 && opponent?.ban2 && !player.pick1 && 'pick1') ||
    (ixPlayer === 0 && opponent?.pick1 && !player.pick2 && 'pick2') ||
    (ixPlayer === 0 && opponent?.pick2 && !player.pick3 && 'pick3')

  return playerDecks.map((deckId) => {
    const isSelectionToConfirm = deckId === game.selectionToConfirm
    const isBanned = opponent?.ban === deckId || opponent?.ban2 === deckId
    const isSafe = player.safe === deckId
    const isDeck1 = player.pick1 === deckId
    const isDeck2 = player.pick2 === deckId
    const isDeck3 = player.pick3 === deckId

    let isSelectable = false

    if (
      ixPlayer === 0 &&
      !isBanned &&
      ['safe', 'pick1', 'pick2', 'pick3'].includes(selectFor) &&
      ![player.pick1, player.pick2, player.pick3].includes(deckId)
    ) {
      isSelectable = true
    }

    if (
      ixPlayer === 1 &&
      !isBanned &&
      !isSafe &&
      ['ban', 'ban2'].includes(selectFor)
    ) {
      isSelectable = true
    }
    return {
      ...game.decks[deckId],
      selectFor,
      isSelectable,
      isSelectionToConfirm,
      isBanned,
      isSafe,
      isDeck1,
      isDeck2,
      isDeck3,
    }
  })
}

export { getPlayerDecks }
