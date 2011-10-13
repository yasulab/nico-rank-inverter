var items = new Array();
var items_ad = new Array();

// item{i}の要素をすべて取得
for(var i=1; i<101; i++){
    items.push($("#item"+i).clone());
    $("#item"+i).attr('id', "temp-item"+i);
    items_ad.push($("#item"+i+"_uad_current").clone());
    $("#item"+i+"_uad_current").attr('id', "temp-item-ad"+i);
}

for(var i=1,j=99; i<101; i++,j--){
    //$("#temp-item"+i).html(items[j]);
    $("#temp-item"+i).replaceWith(items[j]);
    $("#temp-item-ad"+i).replaceWith(items_ad[j]);
}

   