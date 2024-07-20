
let turn = true;
let btns = document.querySelectorAll(".btns");
let t_x = document.querySelector(".turn_x")
let t_0 = document.querySelector(".turn_0")
let turn_x = document.querySelector("#turn_x")
let turn_0 = document.querySelector("#turn_0")
let cont = document.getElementsByClassName(".cont")
let rst = document.getElementById("rst")

btns.forEach((btn,j)=>{
    btn.addEventListener("click",()=>{
        if(turn==false){
            btn.style+=`background: #ff4545;
                        box-shadow:  5px 5px 12px #661c1c,
                                   -5px -5px 12px #ff6e6e;`
             btn.innerText="0"
             turn_x.innerHTML=`X <br><br>YOUR TURN`
             turn_0.innerHTML=``
             turn=true;
             
            }else{
                btn.style+=`background: #4edf4e;
                        box-shadow:  5px 5px 12px #1f591f,
                                   -5px -5px 12px #7dff7d;`
                btn.innerText="X"
                turn_0.innerHTML=`0 <br><br>YOUR TURN`
                turn_x.innerHTML=``
                                   
            turn=false
        }
        btn.disabled=true;
        checkwin()
    })
})


const checkwin = ()=>{
    for(let patterns of win_p){
        let p0 = btns[patterns[0]].innerText
        let p1 = btns[patterns[1]].innerText
        let p2 = btns[patterns[2]].innerText

        if(p0!=""&&p1!=""&&p2!=""){
            if(p0===p1&&p1===p2){
                console.log("winnwr");
                if(turn===true){
                    console.log("0 winned");
                    turn_0.innerHTML=`Winner`
                    turn_x.innerHTML=`Lose`
                }else{
                    console.log("X winned");
                    turn_x.innerHTML=`Winner`
                    turn_0.innerHTML='Lose'
                }

                dsb()
            }
        }
        
    }
}

const dsb = ()=>{
    for(let tmp of btns){
        tmp.disabled=true
    }
}
const win_p = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

rst.addEventListener("click",()=>{
    btns.forEach((btn)=>{
        turn=true
        btn.innerText=""
        btn.style=""
        btn.disabled=false

        turn_x.innerHTML=`X <br><br>YOUR TURN`
        turn_0.innerHTML=``
    })
})