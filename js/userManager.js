const fs = require("fs");

class UserManager {
    #path = "./Usuarios.json";

    async crearUsuario(nombre,apellido,edad,curso){
        const newUser = {
            nombre,
            apellido,
            edad,
            curso,
        };

        const users = await this.consultarUsuarios();

        const updatedUsers = [...users, newUser];
        
        await fs.promises.writeFile(this.#path,JSON.stringify(updatedUsers));
    }

    async consultarUsuarios() {
        try{
            const users = await fs.promises.readFile(this.#path,"utf-8");

            return JSON.parse(users);
        }   catch (error) {
            return [];
        } 
    }
}

async function main () {
    const manager = new UserManager();

    console.log(await manager.consultarUsuarios())

    await manager.crearUsuario(
        "Mario",
        "Party",
        "64",
        "Video Juegos",
    );

    console.log(await manager.consultarUsuarios());
}

main();