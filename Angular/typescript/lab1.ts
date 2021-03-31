function printStuff (a : number, b: string) : void {
    let final : string = "";
    for (let i = 0; i < a; i++) {
        final += b;        
    }
    console.log(final);
}

printStuff(9, "jack");

