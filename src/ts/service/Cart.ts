import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    getSum(): number {
        let sum = 0;
        for (let item of this._items) {
            sum += item.price;
        }
        return sum;
    }

    getSumWithDiscount(discount: number): number {
        const sum = this.getSum();
        const sumWithDiscount = sum - (sum * discount / 100);
        return sumWithDiscount;
    }

    deleteItem(id: number): void {
        const itemId: number = this._items.findIndex(item => item.id === id);
        if (itemId === -1) {
            throw new Error('product with this id not found');
        } else {
            this._items.splice(itemId, 1);
        }

    }
}