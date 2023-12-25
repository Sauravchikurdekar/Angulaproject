import{ Injectable} from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Fakestoreproductcontract } from '../contracts/Fakestoreproductcontract';
import { Observable } from 'rxjs';
@Injectable({
    providedIn:"root"
})
export class fakestoreService{

    constructor(private http:HttpClient){

    }
    public GetProducts(): Observable<Fakestoreproductcontract[]>
{
    return this.http.get<Fakestoreproductcontract[]>("http://fakestoreapi.com/products");
}
public GetCategories():Observable<String[]>{
    return this.http.get<string[]>("http:fakestoreapi.com/products/categories")
}
}