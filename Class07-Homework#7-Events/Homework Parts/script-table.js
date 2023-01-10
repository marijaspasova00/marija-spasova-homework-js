let submitBtn = document.getElementById('submit').onclick=function(){
    let rows=document.getElementById('rows').value;
    let columns=document.getElementById('columns').value;
    if(rows=="" || rows==null){
    rows=5;
    }
    if(columns=="" || columns==null){
    columns=5;
    }
    let dynamicTable ='<table border="1" cellspacing="0" cellpadding="5" class="table">';

    function createTable(rows,columns){
        for(let i=1;i<=rows;i++){
            dynamicTable=dynamicTable+'<tr>';
            for(let j=1;j<=columns;j++){
                dynamicTable=dynamicTable+'<td>'+'<input class="input" type="text" placeholder="insert your data">'+'</td>';
            }
            dynamicTable=dynamicTable+'</tr>';
        }
        dynamicTable=dynamicTable+'</table>';
        document.getElementById('container').innerHTML=dynamicTable;   
   }
   createTable(rows,columns);
}
