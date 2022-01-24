import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ConstantService{
    //baseAPIURL = "http://localhost:3000/api/"
    baseAPIURL = "https://first-demo-nodejs.herokuapp.com/api/"
    constructor(){}
}