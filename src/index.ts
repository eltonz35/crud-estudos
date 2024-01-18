import "reflect-metadata";
import { appDataSouce } from "./database/data-source";

const main =async () => {
    try {
        await appDataSouce.initialize();
        console.log("Banco de dados conectado com sucesso!");
        
    } catch (error) {
        console.log(error);
        
    }
};

main();
