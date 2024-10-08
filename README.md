# React Router

## 🦊 Agenda
- Installation ➡️ https://reactrouter.com ✅
- Open Tutorial in Documentation ✅
- Nested routes ✅
- Configure React Router JSX vs Array of Object
  - Outlet ✅
- Navigation
  - Link ✅
  - NavLink ✅
  - Programmatic Navigation ➡️ useNavigate   ✅
- Reading URL params ➡️ useParams ✅
- Protected routes

**DEMO**
https://pokemon-indev.vercel.app


User JSON Server. Here is the data.json
```json
{
  "pokemons": [
    {
      "id": "001",
      "name": "Bulbasaur",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
      "types": [
        "Grass",
        "Poison"
      ],
      "resistant": [
        "Water",
        "Electric",
        "Grass",
        "Fighting",
        "Fairy"
      ],
      "weaknesses": [
        "Fire",
        "Ice",
        "Flying",
        "Psychic"
      ],
      "evolutions": [
        {
          "id": "001",
          "name": "Bulbasaur",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
        },
        {
          "id": "002",
          "name": "Ivysaur",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
        },
        {
          "id": "003",
          "name": "Venusaur",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
        }
      ]
    },
    {
      "id": "002",
      "name": "Ivysaur",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
      "description": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
      "types": [
        "Grass",
        "Poison"
      ],
      "resistant": [
        "Water",
        "Electric",
        "Grass",
        "Fighting",
        "Fairy"
      ],
      "weaknesses": [
        "Fire",
        "Ice",
        "Flying",
        "Psychic"
      ],
      "evolutions": [
        {
          "id": "002",
          "name": "Ivysaur",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png"
        },
        {
          "id": "003",
          "name": "Venusaur",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
        }
      ]
    },
    {
      "id": "003",
      "name": "Venusaur",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
      "description": "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
      "types": [
        "Grass",
        "Poison"
      ],
      "resistant": [
        "Water",
        "Electric",
        "Grass",
        "Fighting",
        "Fairy"
      ],
      "weaknesses": [
        "Fire",
        "Ice",
        "Flying",
        "Psychic"
      ],
      "evolutions": [
        {
          "id": "003",
          "name": "Venusaur",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
        }
      ]
    },
    {
      "id": "004",
      "name": "Charmander",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
      "description": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
      "types": [
        "Fire"
      ],
      "resistant": [
        "Fire",
        "Grass",
        "Ice",
        "Bug",
        "Steel",
        "Fairy"
      ],
      "weaknesses": [
        "Water",
        "Ground",
        "Rock"
      ],
      "evolutions": [
        {
          "id": "004",
          "name": "Charmander",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
        },
        {
          "id": "005",
          "name": "Charmeleon",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
        },
        {
          "id": "006",
          "name": "Charizard",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
        }
      ]
    },
    {
      "id": "005",
      "name": "Charmeleon",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
      "description": "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
      "types": [
        "Fire"
      ],
      "resistant": [
        "Fire",
        "Grass",
        "Ice",
        "Bug",
        "Steel",
        "Fairy"
      ],
      "weaknesses": [
        "Water",
        "Ground",
        "Rock"
      ],
      "evolutions": [
        {
          "id": "005",
          "name": "Charmeleon",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png"
        },
        {
          "id": "006",
          "name": "Charizard",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
        }
      ]
    },
    {
      "id": "006",
      "name": "Charizard",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
      "description": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
      "types": [
        "Fire",
        "Flying"
      ],
      "resistant": [
        "Fire",
        "Grass",
        "Fighting",
        "Bug",
        "Steel",
        "Fairy"
      ],
      "weaknesses": [
        "Water",
        "Electric",
        "Rock"
      ],
      "evolutions": [
        {
          "id": "006",
          "name": "Charizard",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
        }
      ]
    },
    {
      "id": "007",
      "name": "Squirtle",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
      "description": "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
      "types": [
        "Water"
      ],
      "resistant": [
        "Fire",
        "Water",
        "Ice",
        "Steel"
      ],
      "weaknesses": [
        "Electric",
        "Grass"
      ],
      "evolutions": [
        {
          "id": "007",
          "name": "Squirtle",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
        },
        {
          "id": "008",
          "name": "Wartortle",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"
        },
        {
          "id": "009",
          "name": "Blastoise",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
        }
      ]
    },
    {
      "id": "008",
      "name": "Wartortle",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
      "description": "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler.",
      "types": [
        "Water"
      ],
      "resistant": [
        "Fire",
        "Water",
        "Ice",
        "Steel"
      ],
      "weaknesses": [
        "Electric",
        "Grass"
      ],
      "evolutions": [
        {
          "id": "008",
          "name": "Wartortle",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"
        },
        {
          "id": "009",
          "name": "Blastoise",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
        }
      ]
    },
    {
      "id": "009",
      "name": "Blastoise",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
      "description": "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
      "types": [
        "Water"
      ],
      "resistant": [
        "Fire",
        "Water",
        "Ice",
        "Steel"
      ],
      "weaknesses": [
        "Electric",
        "Grass"
      ],
      "evolutions": [
        {
          "id": "009",
          "name": "Blastoise",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
        }
      ]
    },
    {
      "id": "010",
      "name": "Caterpie",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
      "description": "Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.",
      "types": [
        "Bug"
      ],
      "resistant": [
        "Grass",
        "Fighting",
        "Ground"
      ],
      "weaknesses": [
        "Fire",
        "Flying",
        "Rock"
      ],
      "evolutions": [
        {
          "id": "010",
          "name": "Caterpie",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png"
        },
        {
          "id": "011",
          "name": "Metapod",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png"
        },
        {
          "id": "012",
          "name": "Butterfree",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"
        }
      ]
    },
    {
      "id": "011",
      "name": "Metapod",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
      "description": "The shell covering this Pokémon’s body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",
      "types": [
        "Bug"
      ],
      "resistant": [
        "Grass",
        "Fighting",
        "Ground"
      ],
      "weaknesses": [
        "Fire",
        "Flying",
        "Rock"
      ],
      "evolutions": [
        {
          "id": "011",
          "name": "Metapod",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png"
        },
        {
          "id": "012",
          "name": "Butterfree",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"
        }
      ]
    },
    {
      "id": "012",
      "name": "Butterfree",
      "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
      "description": "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.",
      "types": [
        "Bug",
        "Flying"
      ],
      "resistant": [
        "Grass",
        "Fighting",
        "Ground",
        "Bug"
      ],
      "weaknesses": [
        "Fire",
        "Electric",
        "Ice",
        "Flying",
        "Rock"
      ],
      "evolutions": [
        {
          "id": "012",
          "name": "Butterfree",
          "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png"
        }
      ]
    }
  ]
}
```
