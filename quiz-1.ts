class Mario {
    hp: number = 1;
    speed: number = 5;
    positionX: number = 0;
    positionY: number = 0;
    invincible: boolean = false;
    curruntForm: "mario" | "super mario" | "fire mario" = "mario";

    moveRigth(): number {
        this.positionX += this.speed;
        return this.positionX;
    }

    moveLeft(): number {
        this.positionX -= this.speed;
        return this.positionX;
    }

    superStar(): string {
        this.invincible = true;
        return (`Mario kebal terhadap serangan.`);
    }

    superMushroom(): string {
        this.hp += 1;
        this.curruntForm = "super mario";
        return (`Mario menjadi ${this.curruntForm}, HP bertambah ${this.hp}`);
    }

    fireFlower(): string {
        this.hp += 1;
        this.curruntForm = "fire mario"
        return (`Mario menjadi ${this.curruntForm}, HP bertambah ${this.hp} dan dapat menembakkan bola api.`);
    }
}

class superMario extends Mario {
    superStar(): string {
        this.invincible = true;
        return (`Mario kebal terhadap serangan.`);
    }

    getAttacked(): void {
        if (this.invincible == true) {
            console.log ("serangan tidak berpengaruh");
        } else {
            this.hp -= 1;
            this.curruntForm = "mario";
            console.log (`Mario diserang, HP berkurang ${this.hp} dan kembali ke form ${this.curruntForm}.`)
        }
    }
}

class fireMario extends Mario {
    superStar(): string {
        this.invincible = true;
        return (`Mario kebal terhadap serangan.`);
    }

    getAttacked(): void {
        if (this.invincible == true) {
            console.log("serangan tidak berpengaruh");
        } else {
            this.hp -= 1;
            this.curruntForm = "mario";
            console.log(`Mario diserang, HP berkurang ${this.hp} dan kembali ke form ${this.curruntForm}.`)
        }
    }
}



const mario2 = new Mario()
console.log(mario2.superStar());
