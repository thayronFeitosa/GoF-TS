import DbProductFactory from "../factory/DbProductFactory";
import Db from "../model/Db";

export default class Payment {

    pay(productID: string): void {
        const db = Db.MONGODB
        const dbProduct = DbProductFactory.create(db);
        const product = dbProduct.getProductById(productID);
        console.log(product);
    }

}
