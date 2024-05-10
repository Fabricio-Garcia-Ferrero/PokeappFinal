export interface ITrainers {
    leaders:    ITrainer[];
    elite_four: ITrainer[];
    champion:   ITrainer[];
}

export interface ITrainer {
    id:         string;
    name:       string;
    range:      string;
    generation: string;
    game:       string;
    region:     string;
    location:   string;
    dependsOn?: string;
    pokemon:    PokemonTrainer[];
}

export interface PokemonTrainer {
    name:  string;
    type1: Type;
    type2: Type;
}

export enum Type {
    Bug = "Bug",
    Dark = "Dark",
    Dragon = "Dragon",
    Electric = "Electric",
    Empty = "",
    Fairy = "Fairy",
    Fighting = "Fighting",
    Fire = "Fire",
    Flying = "Flying",
    Ghost = "Ghost",
    Grass = "Grass",
    Ground = "Ground",
    Ice = "Ice",
    Normal = "Normal",
    Poison = "Poison",
    Psychic = "Psychic",
    Rock = "Rock",
    Steel = "Steel",
    Water = "Water",
}