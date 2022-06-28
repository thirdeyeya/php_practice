let itemList = [];      // 商品一覧

//--- データの定義 ---
// 大分類
let cate1 = [
  '---',                  // 未選択
  '家具',
  'ベッド・マットレス',
  '収納家具・収納グッズ',
  '子ども家具'
];

// 小分類
let cate2 = [
  // 未選択
  ['---','ベッド','ソファ','棚・ラック','テーブル・椅子','寝具','マットレス', '家具・ラック','収納システム', '子ども部屋家具','ベビー家具・ベビーグッズ'],
  // 家具のカテゴリ
  ['---','ベッド','ソファ','棚・ラック','テーブル・椅子'],
  // ベッド・マットレスのカテゴリ
  ['---', 'ベッド','寝具','マットレス'],
  // 収納家具・収納グッズ'のカテゴリ
  ['---', '家具・ラック','収納システム'],
  // 子ども家具
  ['---', '子ども部屋家具','ベビー家具・ベビーグッズ']
];

let cate3 = [
  '---',    
  '女性シンガー',
  '男性シンガー',
  '',
  '',
  ''
];
//--- 共通で使用する要素を取得 ---
// 大分類のselectをid属性により取得
let cate1Element = document.getElementById('mainMenu');

// 小分類のselectをid属性により取得
let cate2Element = document.getElementById('subMenu1');

let cate3Element = document.getElementById('subMenu2');

// 商品リストを表示する要素を取得
let itemListElement = document.getElementById('itemList');

//--- 定義した関数 ---
// 大分類のoptionを追加する関数
function setMainMenu() {
    // 取得したselectの子要素（option）を空白にすることによってすべて削除
    cate1Element.innerHTML = "";

    // 大分類の配列に保存されている数だけoptionとして追加する
    for (let i = 0; i < cate1.length; i++) {
        // option要素を新規に作成
        let option = document.createElement('option');
        option.value = cate1[i];    // optionの値に配列の値を代入
        option.text = cate1[i];     // optionの表示文字列に配列の値を代入
        cate1Element.appendChild(option); // select要素の子要素としてoption要素を追加        
    }
    // 小分類の配列に保存されている数だけoptionとして追加する
    for (let i = 0; i < cate2[0].length; i++) {
        // option要素を新規に作成
        let option = document.createElement('option');
        option.value = cate2[0][i];    // optionの値に配列の値を代入
        option.text = cate2[0][i];     // optionの表示文字列に配列の値を代入
        cate2Element.appendChild(option); // select要素の子要素としてoption要素を追加        
    }
    
   
}
// 小分類のoptionを追加する関数
function setSubMenu1(idx) {
    // 取得したselectの子要素（option）を空白にすることによってすべて削除
    cate2Element.innerHTML = "";

    // 大分類の配列に保存されている数だけoptionとして追加する
    for (let i = 0; i < cate2[idx].length; i++) {
        // option要素を新規に作成
        let option = document.createElement('option');
        option.value = cate2[idx][i];    // optionの値に配列の値を代入
        option.text = cate2[idx][i];     // optionの表示文字列に配列の値を代入
        cate2Element.appendChild(option); // select要素の子要素としてoption要素を追加        
    }
    
    for (let i = 0; i < cate3[0].length; i++) {
        
        let option = document.createElement('option');
        option.value = cate3[0][i];
        option.text = cate3[0][i];
        cate3Element.appendChild(option);
    }  
        
}


function setSubMenu2(idx2) {
    
    cate3Element.innerHTML = "";
    
    for (let i = 0; i < cate3[idx2].length; i++) {
        
        let option = document.createElement('option');
        option.value = cate3[idx2][i];
        option.text = cate3[idx2][i];
        cate3Element.appendChild(option);
    }
}
// 商品一覧をtableとして表示
function viewItemList(tag1, tag2, tag3) {
    let target = document.getElementById('itemList');

    // 商品一覧を削除
    target.innerHTML = "";

    if (tag1 !== undefined || tag2 !== undefined || tag3 !== undefined) {
        let html = "";
        html += "<table>";
        let count = 0;
        for (let i = 0; i < itemList.length; i++) {
            // if (itemList[i].tags.some(t => t === tag)) {
            if(isSearchItem(itemList[i], tag1, tag2, tag3)) {
                if (count === 0) {
                  html += "<tr>";
                }

                // 商品情報
                html += "<td>";
                html += '<img src="img/item-sample.jpg" alt="商品の名前" width="180" height="123" />';
                html += '<p>商品名：&nbsp;' + itemList[i].name + '</p>';
                html += '<p>価格：&nbsp;&yen;' + itemList[i].price + '</p>';
                html += '<span><i class="fas fa-shopping-cart">ショッピングカート</i></span>';
                html += "</td>";

                if (count == 5)  {   // 商品を横に５つ並べたら次の行に変更
                    html += "</tr>";
                    count = 0;
                } else {
                    count++;
                }
            }
        }
        if (count > 0) html += "</tr>"; // 最後に閉じる
        html += "</table>";
        target.innerHTML = html;
    }
}

//--- イベントリスナーの定義 ---
// 大分類の選択された時のイベントリスナー
cate1Element.addEventListener('change', function(){
    // 選択されば番号を取得
    let idx = cate1Element.selectedIndex;
    // 大分類の選択に合わせて、小分類の生成
    setSubMenu1(idx);
    let tag1 = cate1Element.value;
    let tag2 = cate2Element.value;
    let tag3 = cate3Element.value;
    viewItemList(tag1, tag2, tag3);
});

// 小分類の選択された時のイベントリスナー
cate2Element.addEventListener('change', function(){
    let idx2 = cate2Element.selectedIndex;
    setSubMenu2(idx2);
    // 選択されば値を取得
    let tag1 = cate1Element.value;
    let tag2 = cate2Element.value;
    let tag3 = cate3Element.value;
    viewItemList(tag1, tag2, tag3);
});

cate3Element.addEventListner('change', function(){
    let tag1 = cate1Element.value;
    let tag2 = cate2Element.value;
    let tag3 = cate3Element.value;
    viewItemList(tag1, tag2, tag3);
});
// 商品一覧をファイルから取得
$(function () {
    $.ajax({
        url: 'json/item.json',
        dataType: 'json'
    })
    .done(function (data) {
        itemList = data;
        // 大分類の生成
        setMainMenu(); 
    })
    .fail(function () {
        alert("ファイルが読み込めませんでした");
    });
});

function isSearchItem(item, cate1, cate2, cate3) {
       var isHit = false;
	// 大分類のみが指定されている場合
	   if (cate1 !== '---' && cate2 === '---' && cate3 === '---') {
	     if (item.tags1.some(t => t === cate1)) {
	         isHit = true;
	     }
	   }
	// 小分類のみが指定されている場合
	   if (cate1 === '---' && cate2 !== '---' && cate3 === '---') {
	     if (item.tags2.some(t => t === cate2)) {
	         isHit = true;
	     }
	   }
	// 大分類、小分類が指定されている場合
	   if (cate1 !== '---' && cate2 !== '---' && cate3 === '---') {
	     if (item.tags1.some(t => t === cate1) && item.tags2.some(t => t === cate2)) {
	         isHit = true;
	     }
	   }
	   
	   if (cate1 !== '---' && cate2 !== '---' && cate3 !== '---') {
	     if (item.tags1.some(t => t === cate1) && item.tag2.some(t => t === cate2) && item.tag3.some(t => t === cate3)) {
	         isHit = true;
	     }
	   }
	   
	   if (cate1 !== '---' && cate2 === '---' && cate3 !== '---') {
	     if (item.tag1.some(t => t === cate1) && item.tag3.some(t => t === cate3)) {
	         isHit = true;
	     }    
	   }
	   
	   if (cate1 === '---' && cate2 !== '---' && cate3 !== '---') {
	     if (item.tag2.some(t => t === cate2) && item.tag3.some(t => t === cate3)) {
	         isHit = true;
	     }    
	   }
	// 大分類、小分類が未指定の場合、必ずtrueを辺返却
	   if (cate1 === '---' && cate2 === '---' && cate3 === '---') {
	     isHit = true;
	   }
	// 見つかった場合はtrue, 見つからない場合はfalse
	return isHit; 
}