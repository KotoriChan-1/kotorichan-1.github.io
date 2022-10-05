//获取当前时间
let date = new Date()
let year = date.getFullYear()
let month = zero(date.getMonth() + 1)
let day = zero(date.getDate())
let hour = zero(date.getHours() - 2)
let hour1 = zero(date.getHours() + 1)
let hourfqsp = zero(date.getHours() - 5)
let hoursptg = zero(date.getHours() - 3)
let minute = zero(date.getMinutes())
let second = zero(date.getSeconds())   
let td = new Date()
let datestr = `${month}-${day} ${hour}:${10}`
let datestr1 = `${month}-${day} ${hour1}:${30}`
let datestrfqsp = `${month}-${day} ${hourfqsp}:${11}`
let datestrspwc = `${month}-${day} ${hoursptg}:${23}`
//开始时间，当前时间前30min
$id('kssj2').innerHTML = datestr
//结束时间，当前时间后三个小时
$id('jssj2').innerHTML = datestr1
//发起申请的时间,5小时之前
$id('fqsj').innerHTML = datestrfqsp
//审批通过时间，3小时之前
$id('spsj').innerHTML = datestrspwc

//如何销假？
$id('rhxj').onclick = ()=>{
    window.open("https://catqa.cpdaily.com/2018/10/24/%E5%A6%82%E4%BD%95%E9%94%80%E5%81%87%EF%BC%9F/")
}
//销假规则查看
$id('gzck').onclick = ()=>{
    $id('infoBox').innerHTML = 
    `<div class="bgc">
        <div id="alertBox">
            <div class="boxTitle">销假规则说明</div>
            <div class="boxContent">
                · 开启时间: &nbsp;2022-06-02 16:43:31   <br/>
                · 操作人: 谢晨
            </div>
            <div id="know">
                知道了
            </div>
        </div>        
    </div>`
    $id('know').onclick = ()=>{
        $id('infoBox').innerHTML = ""
    }
}
//审批流程查看
$id('lcck').onclick = ()=>{
    $id('infoBox').innerHTML = 
    `<div class="bgc">
        <div id="alertBox">
            <div class="boxTitle">审批流程</div>
            <div class="boxContent">
                <img src="./img/蓝圈.png" class="quan"/> 一级审批人<br>
                <div id="js"><img src="./img/用户.png" id="user"/>[角色]辅导员</div>
            </div>
            <div id="know">
                知道了
            </div>
        </div>        
    </div>`
    $id('know').onclick = ()=>{
        $id('infoBox').innerHTML = ""
    }
}
//转发
$id('zf').onclick = ()=>{
    $id('infoBox').innerHTML = 
    `<div class="bgc">
        <img src="./img/分享.png" id="fxi"/>
        <div id="fx">点击右上角发送给朋友</div>
    </div>`
    $id('infoBox').onclick = ()=>{
        $id('infoBox').innerHTML = ""
    }
}

//撤回
$id('ch').onclick = ()=>{
    $id('infoBox').innerHTML = 
    `<div class="bgc">
        <div id="back">
            <div id="backdel">撤回并删除</div>
            <div id="backre">撤回并重新编辑</div>
        </div>
        <div id="cancel">取消</div>
    </div>`
    $id('back').onclick = ()=>{
        $id('infoBox').innerHTML = ""
    }
    $id('cancel').onclick = ()=>{
        $id('infoBox').innerHTML = ""
    }
}

//去销假
$id('qxj').onclick = ()=>{
    open('./xiaojia.html',"_self")
}

