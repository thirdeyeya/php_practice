   let cate1 = [
      '---',
      '家具',
      'ベッド・マットレス',
      '収納家具・収納グッズ',
      '子ども家具'
   ];
   
   let cate1Element = document.getElementById('mainMenu');
   
   function setMainMenu() {
   
       cate1Element.innerHTML = '';
       
       for (let i = 0; i < cate1.length; i++)
       
           let option = document.createElement('option');
           option.value = cate1[i];
           
           option.text = cate[i];
           
           cate1Element.appendChild(option);
           
        }
   }
   
   
   
   let cate2 = [
       
       ['---'],
       
       ['ベッド','ソファ','棚・ラック','テーブル・椅子'],
       
       ['ベッド','寝具','マットレス'],
       
       ['家具・ラック','収納システム'],
       
       ['子供部屋家具','ベビー家具・ベビーグッズ']
       
    ];
    
    let cate2Element = document.getElementById('subMenu');
    
    function setSubMenu() {
        
        cate2Element.innerHTML = '';
        
        for (let i = 0, i < cate2[1].length; i++) {
            
            let option = document.createElement('option');
            option.value = cate2[1][i];
            
            option.text = cate2[1][i];
            
            cate2Element.appendChild(option);
        }
    }
    
   
    
    function setSubMenu(idx) {
        
        cate2Element.innerHTML = '';
        
        for (let i = 0; i < cate2[idx].length; i++) {
            
            let option = document.createElement('option');
            option.value = cate2[idx][i];
            
            option.text = cate2[idx][i];
            
            cate2Element.appendChild(option);
        }
    }
    
    
    
    setSubMenu(1);
    
    cate1Element.addEventListener('charge', function(){
        
        let idx = cate1Element.selectedIndex;
        console.log(idx);
    });
    
    cate1Element.addEventListner('change', function(){
        
        let idx = cate1Element.selectedIndex;
        
        setSubMenu(idx);
    });
    
    cate2Element.addEventListner('change', function(){
        
        let idx = cate2Element.selectedIndex;
        
        let val = cate2Element.value;
        
        console.log(idx);
        console.log(val);
    });
    
    setMainMenu();