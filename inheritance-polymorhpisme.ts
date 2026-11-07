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

    areaEffect(): void {
        this.attack;
    }

    basicAttack(): number {
        return this.attack = 50;
    }
}

class Turtle extends PublicEnemy {
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

const lord1 = new Lord()
console.log(lord1.areaEffect());