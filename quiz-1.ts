class Mario {
    hp: number = 1;
    speed: number = 5;
    positionX: number = 0;
    positionY: number = 0;
    invincible: boolean = false;
    currentForm: "mario" | "super mario" | "fire mario" = "mario";


    moveRigth(): number {
        this.positionX += this.speed;
        return this.positionX;
    }

    moveLeft(): number {
        this.positionX -= this.speed;
        return this.positionX;
    }

    superStar(): void {
        this.invincible = true;
        console.log (`Mario kebal terhadap serangan.`);
    }

    superMushroom(): string {
        this.hp += 1;
        this.currentForm = "super mario";
        return (`Mario menjadi ${this.currentForm}, HP bertambah ${this.hp}`);
    }

    fireFlower(): string {
        this.hp += 1;
        this.currentForm = "fire mario"
        return (`Mario menjadi ${this.currentForm}, HP bertambah ${this.hp} dan dapat menembakkan bola api.`);
    }
}

class superMario extends Mario {

    constructor() {
        super();
        this.currentForm = "super mario";
    }

    superStar(): void {
        this.invincible = true;
        console.log (`Mario kebal terhadap serangan.`);
    }

    getAttacked(): void {
        if (this.invincible == true) {
            console.log ("serangan tidak berpengaruh");
        } else {
            this.hp -= 1;
            this.currentForm = "mario";
            console.log (`Mario diserang, HP berkurang ${this.hp} dan kembali ke form ${this.currentForm}.`)
        }
    }
}

class fireMario extends Mario {

    constructor() {
        super();
        this.currentForm = "fire mario";
    }

    superStar(): void {
        this.invincible = true;
        console.log (`Mario kebal terhadap serangan.`);
    }

    getAttacked(): void {
        if (this.invincible == true) {
            console.log("serangan tidak berpengaruh");
        } else {
            this.hp -= 1;
            this.currentForm = "mario";
            console.log(`Mario diserang, HP berkurang ${this.hp} dan kembali ke form ${this.currentForm}.`)
        }
    }
}



const mario = new Mario();
const supermario = new superMario();
const firemario = new fireMario();

console.log(mario.superMushroom());
console.log(mario.fireFlower());
mario.superStar();
supermario.getAttacked();
firemario.getAttacked();
console.log(mario.moveRigth());
console.log(mario.moveLeft());