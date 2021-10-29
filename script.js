const input = document.querySelector("input");
const header = document.querySelector(".header");
const button = document.querySelector(".main button");
const button2 = document.querySelector(".modal-main button");
const button3=document.querySelector(".btn-3 button")
const btn = document.querySelector(".btn")
const modal=document.querySelector(".modal")
const close=document.querySelector(".fa-times")

input.addEventListener("focusin", function () {
    header.style.background = "#A4CEFF";
})

input.addEventListener("focusout", function () {
    header.style.background = "none";
})

button.addEventListener("click", function () {
    btn.style.background = "#A4CEFF";

})
window.addEventListener("mouseup", function (e) {
    if (e.target != button) {
        btn.style.background = "none"
    }
})


var arr=[]
p=0;


var arrHead = new Array();	
    arrHead = ['', 
    'Tələbə adı <i class="fas fa-table fa-xs"></i> <i class="fas fa-eye  fa-xs"></i>', 
    'İmtahan <i class="fas fa-table fa-xs"></i> <i class="fas fa-eye  fa-xs"></i>',
    'Minimum qiymət <i class="fas fa-table fa-xs"></i> <i class="fas fa-eye  fa-xs"></i>',
    'Maksimum qiymət <i class="fas fa-table fa-xs"></i> <i class="fas fa-eye  fa-xs"></i>',
    'Ortalama <i class="fas fa-table fa-xs"></i> <i class="fas fa-eye  fa-xs"></i>'];

    
    function createTable() {
        var empTable = document.createElement('table');
        empTable.setAttribute('id', 'empTable'); 

        var tr = empTable.insertRow(-1);
        for (var h = 0; h < arrHead.length; h++) {
            var th = document.createElement('th'); 
            th.innerHTML = arrHead[h];
            tr.appendChild(th);
        }

        var div = document.getElementById('cont');
        div.appendChild(empTable);  


    }

    k=1;

    
    function addRow() {
        var empTab = document.getElementById('empTable');

        var rowCnt = empTab.rows.length;   
        var tr = empTab.insertRow(rowCnt); 
        tr = empTab.insertRow(rowCnt);

        arr = [];

        for (var c = 0; c < arrHead.length; c++) {
            var td = document.createElement('td'); 
            td = tr.insertCell(c);

            if (c == 0) {    
                td.innerHTML=k;
                k++;
                
            }
            if(c==1) {
                td.innerHTML=input.value
            }
            if(c==2){
                const a=document.createElement("a")
                td.appendChild(a)
                a.innerHTML="imtahan"
                a.setAttribute('href','#')
                a.addEventListener("click",function(){
                    modal.style.display="block";
                    a.style.color='#76aeee';
                    createTable2()
                 
                })
            }
            
            if(c==3){
                
                td.setAttribute('id','min' + (p+1));
                
            }
            if(c==4){
                td.setAttribute('id','max' + (p+1));
            }
            if(c==5){ 
                td.setAttribute('id','average' + (p+1));
            }
        }
    }

/******************************************/ 


var arrHead2 = new Array();	
    arrHead2 = ['', 
    'İmtahan <i class="fas fa-table fa-xs"></i> <i class="fas fa-eye  fa-xs"></i>',
    'Qiymət <i class="fas fa-table fa-xs"></i> <i class="fas fa-eye  fa-xs"></i>']


function createTable2() {
    p++;
    var empTable = document.createElement('table');
    empTable.setAttribute('id', 'Table' + p); 


    var tr = empTable.insertRow(-1);
    for (var h = 0; h < arrHead2.length; h++) {
        var th = document.createElement('th'); 
        th.innerHTML = arrHead2[h];
        tr.appendChild(th);
        
    }

    var div = document.getElementById('cont2');
    div.appendChild(empTable); 
    
}

   l=1;

    function addRow2() {
        var empTab = document.getElementById('Table' + p);

        var rowCnt = empTab.rows.length;  
        var tr = empTab.insertRow(rowCnt);
        
        
        tr = empTab.insertRow(rowCnt);

        
        

        for (var c = 0; c < arrHead2.length; c++) {
            var td = document.createElement('td'); 
            td = tr.insertCell(c);
            
            if (c == 0) {    
                td.innerHTML=l;
                l++;
                
            }
            if(c==1) {
                td.innerHTML=document.querySelector("#subject").value
            }
            if(c==2){
                var price = td.innerHTML=document.querySelector("#price").value
                arr.push(Number(price))
            }
        }

        
       
        
    }
    

    button3.addEventListener("click", function(){
        modal.style.display="none";
        document.getElementById('min' + p).innerHTML = Math.min.apply(Math,arr)
        document.getElementById('max' + p).innerHTML = Math.max.apply(Math,arr)
        
        document.querySelector("#average" + p).innerHTML=Math.round(arr.reduce((a,b) => a + b, 0) / arr.length) ;
        
    })

    close.addEventListener("click",function(){
        modal.style.display="none";
    })


