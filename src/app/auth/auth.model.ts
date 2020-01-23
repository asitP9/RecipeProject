export class User{
    constructor(public email:string, public localId:string, private tokenId:string, public tokenExpiryDate:Date){}

    get token(){
        if(!this.tokenId || new Date()>this.tokenExpiryDate)
            return null;
        else
            return this.tokenId;
    }



}
