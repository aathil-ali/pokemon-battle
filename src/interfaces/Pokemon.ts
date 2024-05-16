export interface Pokemon {
    name: string;
    front_sprite: string;
    moves: any;
    base_stats?:string;
    back_sprite?:string;
    primary_type?:string
}
export interface Move {
    name: string;
    power: number;
    priority: string;
}