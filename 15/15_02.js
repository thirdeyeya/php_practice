class Item {
    
    constructor(id, name, stock) {
        
        this.id = id;
        this.name = name;
        this.stock = stock;
    }
    
    getId() {
        return this.id;
    }
    
    getName() {
        return this.name;
    }
    
    getStock() {
        return this.stock;
    }
    
    addStock(num) {
        this.stock += num;
    }
    
    sale(num) {
        if (this.stock < num) {
            throw new Error('在庫が足りません')
        } else {
            this.stock -= num;
        }
    }
}

class Chair extends Item {
    constructor(id, name, stock, used) {
        //　引数の値を使ってプロパティの初期化を行う
        super(id, name, stock);
        this.used = used;           //　中古ならtrue新品ならfalse
    }

    getUsed() {
        return this.used;
    }
}

let item1 = new Item('0001', 'ダイニングチェア', 100, true);
let item2 = new Item('0002', 'キャスター付き椅子', 100, false);
let item3 = new Item('0003', 'スツール', 50, false);

console.log(item1.getId(), item1.getName(), item1.getStock());
console.log(item2.getId(), item2.getName(), item2.getStock());
console.log(item3.getId(), item3.getName(), item3.getStock());