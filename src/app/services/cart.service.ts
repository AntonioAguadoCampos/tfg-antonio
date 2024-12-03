import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CartService {

    items = new BehaviorSubject<any[]>([])

    addItem(item: any) {
        const newItems = [...this.items.getValue(), item]
        this.items.next(newItems)
    }

    removeItem(item: any) {
        
    }
}