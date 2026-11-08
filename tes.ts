class Mario1 {
    hp: number = 1;
    speed: number = 5;
    positionX: number = 0;
    positionY: number = 0;
    invincible: boolean = false;
    currentForm: "mario" | "super mario" | "fire mario" = "mario";

    //tambhan
    dead: boolean = false;
    damage: number = 10;
    jump: number = 100;

    //
    shootFireBall(): void {
        if (this.currentForm = "fire mario") {
            console.log(`dapat menembakkan fireball dengan damage ${this.damage}`)
        } else {
            console.log(`tidak dapat menembakkan fireball`)
        }
    }

    //
    isJump(): number {
        this.positionY += this.jump;
        return this.positionY;
    }


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

    //
    getAttcked(): void{
        this.hp -= 1
        this.dead = true;
        console.log(`mario diserang! HP berkurang menjadi ${this.hp} lalu mario ${this.dead}`)
    }
}

class superMario1 extends Mario {

    constructor() {
        super();
        this.currentForm = "super mario";
        this.speed = 10; //
    }

    //
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

class fireMario1 extends Mario {

    constructor() {
        super();
        this.currentForm = "fire mario";
        this.speed = 8; //
    }

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



const mario1 = new Mario();
const supermario1 = new superMario();
const firemario1 = new fireMario();

console.log(mario1.superMushroom());
console.log(mario1.fireFlower());
mario1.superStar();
supermario1.getAttacked();
firemario1.getAttacked();
console.log(mario1.moveRigth());
console.log(mario1.moveLeft());


//
mario1.getAttcked();
mario1.shootFireBall();
console.log(mario1.isJump());
console.log(supermario1.moveRigth());
console.log(supermario1.moveLeft());
console.log(firemario1.moveRigth());
console.log(firemario1.moveLeft());