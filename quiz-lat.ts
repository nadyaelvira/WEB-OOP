class LatMario {
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

    superMushroom(): number {
        this.hp += 1;
        return this.hp;
    }

    fireFlower(): string {
        this.hp += 1;
        return (`Mario menjadi fire mario, HP bertambah ${this.hp} dan dapat menembakkan bola api.`);
    }
}

class superMario extends LatMario {
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

class fireMario extends LatMario {
    getAttacked(): void {
        if (this.invincible) {
            console.log("serangan tidak berpengaruh");
        } else {
            this.hp -= 1;
            this.curruntForm = "mario";
            console.log(`Mario diserang, HP berkurang ${this.hp} dan kembali ke form ${this.curruntForm}.`)
        }
    }
}



const mario2 = new superMario()
mario2.getAttacked();
