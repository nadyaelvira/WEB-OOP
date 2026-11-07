class Npc {    
    //atribut
    health: number;
    speed: number;
    defense: number;
    attack: number;
    npcType: "walk" | "fly"

    constructor(health: number, speed: number, defense: number, attack: number, npcType: "walk" | "fly") {
        this.health = health;
        this.speed = speed;
        this.defense = defense;
        this.attack = attack;
        this.npcType = npcType;
}

    walking() : number{
        this.speed =+ 2;
        return this.speed;
    }

    attacking() : number{
        this.attack =+ 2;
        return this.attack;
    }

    sprint() : number{
        this.speed += 4;
        return this.speed;
    }

    ultimateskill() : number{
        this.speed =+ 10;
        return this.attack;
    }

    isFlying() : string {
        if (this.npcType === "fly") 
        {
            this.speed =+ 10
            this.attack =+ 5;
            return `NPC itu terbang`
        }
        return `Bukan NPC terbang`
    }

}

const harpy = new Npc (100, 10, 15, 20, "walk");
const goblin = new Npc (150, 15, 20, 25, "fly");


console.log(harpy.sprint());
