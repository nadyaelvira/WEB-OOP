class PublicEnemy {
    hp: number;
    attack: number;
    defense: number;
    speed: number;

    constructor (hp: number, attack: number, defense: number, speed: number) {
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
    }

    basicAttack(): number {
        return this.attack;
    }
}

class Lord extends PublicEnemy {
    constructor() {
        super(16000, 100, 100, 100);
    }

    healing(): string {
        this.hp += 50
        return (` HP bertambah ${this.hp}`)
    }

    areaEffect(): void {
        this.attack;
    }

    basicAttack(): number {
        return this.attack = 50;
    }
}

class Turtle extends PublicEnemy {
    type: string;

    constructor () {
        super(1600, 10 ,10, 30);
        this.type = "renang";
    }

    isSwim(): string {
        return (`kura kuranya bergerak dengan cara ${this.type}`)
    }

    basicAttack(): number {
        return this.attack = 20;
    }
}

class BlueWolf extends PublicEnemy {}

class RedDragon extends PublicEnemy {
    basicAttack(): number {
        return this.attack = 5;
    }
}

const kura = new Turtle ();
console.log(kura.isSwim());


