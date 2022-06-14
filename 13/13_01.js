   let cate1 = [
      '---',
      '家具',
      'ベッド・マットレス',
      '収納家具・収納グッズ',
      '子ども家具'
      '調理器具'
   ];
   
   
   let cate2 = [
       
       ['---'],
       
       ['ベッド','ソファ','棚・ラック','テーブル・椅子'],
       
       ['ベッド','寝具','マットレス'],
       
       ['家具・ラック','収納システム'],
       
       ['子供部屋家具','ベビー家具・ベビーグッズ']
       
       ['調理器具']
       
    ];
    
    var itemList = [
        { id: '0001', name: 'ソファベッド', tags: ['ベッド', 'ソファ', '寝具'], price: 30000 },
        { id: '0002', name: 'シングルベッド', tags: ['ベッド', 'ソファ', '寝具'], price: 40000 },
        { id: '0003', name: '子ども用ベッド', tags: ['ベッド','ソファ', '寝具', '子ども部屋家具'], price: 20000 },
        { id: '0004', name: 'ソファ', tags: ['ソファ'], price: 20000 },
        { id: '0005', name: 'キューブボックス', tags: ['家具・ラック', '収納システム'], price: 3000 },
        { id: '0006', name: 'オープンラック', tags: ['家具・ラック', '収納システム'], price: 2000 },
        { id: '0007', name: 'コンピュータデスク', tags: ['テーブル・椅子'], price: 2000 },
        { id: '0008', name: 'サイドテーブル', tags:['テーブル・椅子'], price: 1500 },
        { id: '0009', name: 'ダイニングテーブル', tags: ['テーブル・椅子'], price: 25000 },
        { id: '0010', name: '子ども部屋用収納', tags: ['収納システム', '子ども部屋家具'],price: 1000 },
        { id: '0011', name: '包丁', tags: ['調理器具'], price: 5000 },
        { id: '0012', name: 'まな板', tags: ['調理器具'], price: 1000 },
        { id: '0013', name: 'ボウル', tags: ['調理器具'], price: 200 },
        { id: '0014', name: '菜箸', tags: ['調理器具'], price: 100 },
        ];
        
   let cate1Element = document.getElementById('mainMenu');
   
   let cate2Element = document.getElementById('subMenu');
   
   var itemListElement = document.getElementById('itemList');
   
   function setMainMenu() {
   
       cate1Element.innerHTML = '';
       
       for (let i = 0; i < cate1.length; i++)
       
           let option = document.createElement('option');
           option.value = cate1[i];
           
           option.text = cate[i];
           
           cate1Element.appendChild(option);
           
        }
   }
   
   
    function setSubMenu(idx) {
        
        cate2Element.innerHTML = '';
        
        for (let i = 0, i < cate2[1].length; i++) {
            
            let option = document.createElement('option');
            option.value = cate2[idx][i];
            
            option.text = cate2[idx][i];
            
            cate2Element.appendChild(option);
        }
    }
    
    function viewItemList(tag) {
            itemListElement.innerHTML = '';
            for (let i = 0; i < itemList.length; i++) {
                if (itemList[i].tags.some(t => t === tag)) {
                    
                    let li = document.createElement('li');
                    
                    let text = document.createTextNode(itemList[i].id + ':' + itemList[i].name);
                    
                    li.appendChild(text);
                    itemListElement.appendChild(li);
                }
            }
    }
        
    cate1Element.addEventListner('change', function(){
            
            var idx = cate1Element.selectedIndex;
            
            setSubMenu(idx);
            
            viewItemList(cate2[idx][0]);
    });
    
   
    cate2Element.addEventListener('change', function(){
            
        var val = cate2Element.value;
        viewItemList(val);
    });
        
        
    setMainMenu();
    
    
    
        