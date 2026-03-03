# MyCommand

A fully functional CLI tool built with **Node.js** and **TypeScript** using **Object-Oriented Programming** principles.

## Tech Stack

- Node.js + TypeScript
- [Commander.js](https://github.com/tj/commander.js/) — CLI framework
- [Axios](https://axios-http.com/) — HTTP requests

## Setup Instructions

```bash
# Clone the repository
git clone https://github.com/Magnus1X/MyCommand.git
cd MyCommand

# Install dependencies
npm install

# Compile TypeScript
npx tsc cli.ts --outDir dist --module commonjs --target ES2019 --esModuleInterop

# Run a command
node dist/cli.js <command>
```

## Available Commands

| Command | Description |
|---|---|
| `greet <name>` | Greet a person by name |
| `add <n1> <n2>` | Add two numbers |
| `sub <n1> <n2>` | Subtract two numbers |
| `mul <n1> <n2>` | Multiply two numbers |
| `div <n1> <n2>` | Divide two numbers |
| `Pokemon` | Fetch Pikachu's info from PokéAPI |
| `wordcount <text>` | Count words, characters and sentences |
| `proper <text>` | Convert text to Proper Case |
| `quote` | Fetch a random inspirational quote |
| `joke` | Fetch a random programming joke |

## Example Usage

```bash
node dist/cli.js greet Magnus
# Hello Magnus

node dist/cli.js add 10 5
# 15

node dist/cli.js div 10 0
# n2 Can't be Zero

node dist/cli.js wordcount "hello world how are you"
# Words      : 5
# Characters : 23
# Chars (no spaces): 19
# Sentences  : 1

node dist/cli.js proper "hello world from mycli"
# Hello World From Mycli

node dist/cli.js Pokemon
# pikachu

node dist/cli.js quote
# "Your time is limited..." — Steve Jobs

node dist/cli.js joke
# Q: What do you call a developer who doesn't comment code?
# A: A developer.
```

## API Integrations

| API | Command | Endpoint |
|---|---|---|
| [PokéAPI](https://pokeapi.co/) | `Pokemon` | `https://pokeapi.co/api/v2/pokemon/pikachu` |
| [Quotable.io](https://api.quotable.io/) | `quote` | `https://api.quotable.io/random` |
| [JokeAPI](https://jokeapi.dev/) | `joke` | `https://v2.jokeapi.dev/joke/Programming` |

## OOP Concepts Used

- **Abstract Class** — `BaseCommand` defines the contract
- **Inheritance** — All command classes extend `BaseCommand`
- **Encapsulation** — `CLI` class manages program and commands privately
- **Polymorphism** — `registerAll()` calls `register()` on each command uniformly
- **Object Creation** — Every command is instantiated as an object
