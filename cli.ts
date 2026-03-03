#!/usr/bin/env node

import { Command } from 'commander';
import axios from 'axios';

abstract class BaseCommand {
    abstract name: string;
    abstract description: string;
    abstract register(program: Command): void;
}

class GreetCommand extends BaseCommand {
    name = 'greet';
    description = 'Greet a person by name';

    register(program: Command): void {
        program
            .command('greet <name>')
            .description(this.description)
            .action((name: string) => {
                console.log(`Hello ${name}`);
            });
    }
}

class AddCommand extends BaseCommand {
    name = 'add';
    description = 'Adding two Numbers';

    register(program: Command): void {
        program
            .command('add <n1> <n2>')
            .description(this.description)
            .action((n1: string, n2: string) => {
                console.log(Number(n1) + Number(n2));
            });
    }
}

class SubCommand extends BaseCommand {
    name = 'sub';
    description = 'Subtract two Numbers';

    register(program: Command): void {
        program
            .command('sub <n1> <n2>')
            .description(this.description)
            .action((n1: string, n2: string) => {
                console.log(Number(n1) - Number(n2));
            });
    }
}

class MulCommand extends BaseCommand {
    name = 'mul';
    description = 'Multiply Two Numbers';

    register(program: Command): void {
        program
            .command('mul <n1> <n2>')
            .description(this.description)
            .action((n1: string, n2: string) => {
                console.log(Number(n1) * Number(n2));
            });
    }
}

class DivCommand extends BaseCommand {
    name = 'div';
    description = 'Divide two Numbers';

    register(program: Command): void {
        program
            .command('div <n1> <n2>')
            .description(this.description)
            .action((n1: string, n2: string) => {
                if (Number(n2) === 0) {
                    console.log("n2 Can't be Zero");
                } else {
                    console.log(Number(n1) / Number(n2));
                }
            });
    }
}

class PokemonCommand extends BaseCommand {
    name = 'Pokemon';
    description = 'Pokemon Character';

    register(program: Command): void {
        program
            .command('Pokemon')
            .description(this.description)
            .action(async () => {
                try {
                    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu');
                    console.log(res.data.name);
                } catch (err) {
                    console.log(err);
                }
            });
    }
}

class WordCountCommand extends BaseCommand {
    name = 'wordcount';
    description = 'Count words, characters and sentences in a text';

    register(program: Command): void {
        program
            .command('wordcount <text>')
            .description(this.description)
            .action((text: string) => {
                const words = text.trim().split(/\s+/).filter(w => w.length > 0);
                const chars = text.length;
                const charsNoSpace = text.replace(/\s/g, '').length;
                const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
                console.log(`Words      : ${words.length}`);
                console.log(`Characters : ${chars}`);
                console.log(`Chars (no spaces): ${charsNoSpace}`);
                console.log(`Sentences  : ${sentences.length}`);
            });
    }
}

class ProperCommand extends BaseCommand {
    name = 'proper';
    description = 'Convert text to Proper Case (capitalize each word)';

    register(program: Command): void {
        program
            .command('proper <text>')
            .description(this.description)
            .action((text: string) => {
                const result = text
                    .toLowerCase()
                    .split(' ')
                    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
                console.log(result);
            });
    }
}

class QuoteCommand extends BaseCommand {
    name = 'quote';
    description = 'Fetch a random inspirational quote';

    register(program: Command): void {
        program
            .command('quote')
            .description(this.description)
            .action(async () => {
                try {
                    const res = await axios.get('https://api.quotable.io/random');
                    console.log(`"${res.data.content}"`);
                    console.log(`  — ${res.data.author}`);
                } catch (err) {
                    console.log('Could not fetch quote. Check internet connection.');
                }
            });
    }
}

class JokeCommand extends BaseCommand {
    name = 'joke';
    description = 'Fetch a random programming joke';

    register(program: Command): void {
        program
            .command('joke')
            .description(this.description)
            .action(async () => {
                try {
                    const res = await axios.get('https://v2.jokeapi.dev/joke/Programming?type=twopart');
                    console.log(`Q: ${res.data.setup}`);
                    console.log(`A: ${res.data.delivery}`);
                } catch (err) {
                    console.log('Could not fetch joke. Check internet connection.');
                }
            });
    }
}

class CLI {
    private program: Command;
    private commands: BaseCommand[];

    constructor() {
        this.program = new Command();
        this.commands = [
            new GreetCommand(),
            new AddCommand(),
            new SubCommand(),
            new MulCommand(),
            new DivCommand(),
            new PokemonCommand(),
            new WordCountCommand(),
            new ProperCommand(),
            new QuoteCommand(),
            new JokeCommand(),
        ];
    }

    private registerAll(): void {
        for (const cmd of this.commands) {
            cmd.register(this.program);
        }
    }

    run(): void {
        this.registerAll();
        this.program.parse();
    }
}

const app = new CLI();
app.run();