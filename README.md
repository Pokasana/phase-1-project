# Phase 1 Project -  Memory Game
- here are 10 pares of cards placed face down individually on the page
- The player opens 2 cards in one try to memorize where each cards are placed and match two cards
- Once the player finds all the pairs of cards, a message will pop up
- Player can reset the game(generate new pairs of cards) *Fisher–Yates shuffle

# How it works
- When the start button is clicked, cards appear on the screen
- When the player clicks a card, the card will turn over and the character image will be displayed
- When the second card is clicked, the computer will assess whether the two cards are equal or not
- If they are matching, these two cards will be hidden, if they are not matching, they will turn back over
- Once all the cards are gone, the end of the game message will be shown

## API
no-authorization API
https://rickandmortyapi.com/api/character/

## Main challenge
Refleshing my memory for asynchronous intaractions
Personally I expect writing HTML and CSS to be another chalenge

## How to meet requirements
- returning at least 5 objects w/3 attributes
 => using caracter pictures as a card, and each caracter data has more than 3 attributes.

- It's going to be on a single page

- 3 event listeners
 => 'DOMContentLoaded'
    'click' to start the game/reset the game
    'mouseover' to highlight the card that's selected
