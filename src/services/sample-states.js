/**
 * Game
 *  - id?: Game id when one has been assigned
 *  - recoveryKey?: key to recover this game with a new connection
 *  - players: Players[] with length 0-2
 *  - decks: hash of all decks referenced by player properties
 *  - message: string
 *  - isDisconnected: true when we are no longer able to make updates to this
 *    game.
 *
 * Player:
 *  - name: string
 *  - ban?: deck id
 *  - ban2: deck id
 *  - safe?: deck id
 *  - pick1?: deck id
 *  - pick2?: deck id
 *  - pick3?: deck id
 *  - decks: array of deck ids with length 6
 */

const EMPTY = {}

const DISCONNECTED = {
  id: '73ef23ad-5628-4942-ba47-11fc57907d43',
  recoveryKey: 'asdf',
  isDisconnected: true,
}

const BAN_SAFE_BAN = {
  id: 'a320ca771ad03ccdc696c2d331c81ebd',
  recoveryKey: 'asdf',
  players: [
    {
      name: 'jtrussell',
      decks: [
        'efbc1a12-ac39-44d2-8300-ebdf6a39889d',
        '08601fe5-0163-44fa-a9f9-7a64fd35391e',
        '79c10771-449a-491b-8463-a89c540e4249',
        '3178ecbc-71c6-4ca9-8007-803f9400a770',
        '5763813a-ad47-4d21-a83a-777250d84ba2',
        '9d1f225f-c151-491d-876f-98da5b617202',
      ],
      ban: 'ea39ab19-ede4-429f-b15b-6d4ef4307397',
      ban2: '9ad7568d-53f1-40f3-8399-dde5f514e9c5',
      safe: '79c10771-449a-491b-8463-a89c540e4249',
      pick1: '08601fe5-0163-44fa-a9f9-7a64fd35391e',
    },
    {
      name: 'botrussell',
      decks: [
        'e9093ae2-fe48-48ac-91bf-5583cba67747',
        'ea39ab19-ede4-429f-b15b-6d4ef4307397',
        'd721d6f9-aea1-4e47-b54e-0a310065eee6',
        '9ad7568d-53f1-40f3-8399-dde5f514e9c5',
        '42eabbcc-c90f-4ed9-b183-445b1b19050e',
        'e431eb79-b097-4201-8c67-696f44a43690',
      ],
      ban: 'efbc1a12-ac39-44d2-8300-ebdf6a39889d',
      ban2: '5763813a-ad47-4d21-a83a-777250d84ba2',
      safe: 'e431eb79-b097-4201-8c67-696f44a43690',
    },
  ],
  decks: {
    '08601fe5-0163-44fa-a9f9-7a64fd35391e': {
      name: 'Lynxald of the Deejay’s Town Hall',
      houses: ['brobnar', 'geistoid', 'mars'],
      id: '08601fe5-0163-44fa-a9f9-7a64fd35391e',
      expansion: 'Grim Reminders',
    },
    '79c10771-449a-491b-8463-a89c540e4249': {
      name: 'Li, the Congregant of Parwes',
      houses: ['brobnar', 'staralliance', 'unfathomable'],
      id: '79c10771-449a-491b-8463-a89c540e4249',
      expansion: 'Grim Reminders',
    },
    'efbc1a12-ac39-44d2-8300-ebdf6a39889d': {
      name: 'Vegerazer, the Bandit Survivalist',
      houses: ['ekwidon', 'staralliance', 'unfathomable'],
      id: 'efbc1a12-ac39-44d2-8300-ebdf6a39889d',
      expansion: 'Winds of Exchange',
    },
    '5763813a-ad47-4d21-a83a-777250d84ba2': {
      name: 'T. Zaiger, the Lighthouse Doc',
      houses: ['dis', 'logos', 'staralliance'],
      id: '5763813a-ad47-4d21-a83a-777250d84ba2',
      expansion: 'Mass Mutation',
    },
    '3178ecbc-71c6-4ca9-8007-803f9400a770': {
      name: 'Opieyes, the Acidic Rink Watcher',
      houses: ['dis', 'shadows', 'skyborn'],
      id: '3178ecbc-71c6-4ca9-8007-803f9400a770',
      expansion: 'Tokens of Change',
    },
    '9d1f225f-c151-491d-876f-98da5b617202': {
      name: 'Finan, Chan z Marnego Przystanku',
      houses: ['brobnar', 'sanctum', 'unfathomable'],
      id: '9d1f225f-c151-491d-876f-98da5b617202',
      expansion: 'Winds of Exchange',
    },
    'e431eb79-b097-4201-8c67-696f44a43690': {
      name: 'Russell the Inadvertently Unpopular',
      houses: ['brobnar', 'staralliance', 'untamed'],
      id: 'e431eb79-b097-4201-8c67-696f44a43690',
      expansion: 'Grim Reminders',
    },
    'ea39ab19-ede4-429f-b15b-6d4ef4307397': {
      name: 'Peralta of Shattersea Arboretum',
      houses: ['brobnar', 'dis', 'logos'],
      id: 'ea39ab19-ede4-429f-b15b-6d4ef4307397',
      expansion: 'Aember Skies',
    },
    '9ad7568d-53f1-40f3-8399-dde5f514e9c5': {
      name: 'The Scoundrel that Dominates The Knight',
      houses: ['geistoid', 'mars', 'untamed'],
      id: '9ad7568d-53f1-40f3-8399-dde5f514e9c5',
      expansion: 'Grim Reminders',
    },
    '42eabbcc-c90f-4ed9-b183-445b1b19050e': {
      name: 'Zeekhudust, the Warlock Compadre',
      houses: ['ekwidon', 'geistoid', 'mars'],
      id: '42eabbcc-c90f-4ed9-b183-445b1b19050e',
      expansion: 'Grim Reminders',
    },
    'e9093ae2-fe48-48ac-91bf-5583cba67747': {
      name: 'Sra. Simukatt Gopple',
      houses: ['ekwidon', 'geistoid', 'logos'],
      id: 'e9093ae2-fe48-48ac-91bf-5583cba67747',
      expansion: 'Aember Skies',
    },
    'd721d6f9-aea1-4e47-b54e-0a310065eee6': {
      name: 'Baronet Nguyen',
      houses: ['logos', 'shadows', 'untamed'],
      id: 'd721d6f9-aea1-4e47-b54e-0a310065eee6',
      expansion: 'Age of Ascension',
    },
  },
}

export { EMPTY, DISCONNECTED, BAN_SAFE_BAN }
