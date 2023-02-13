const data=import.meta.glob('./data/*',{eager:true})
let modules = [];
let bgList=['UCIrKH4.x^E09H~X%KNF~XITRjxbxoM{kER%','U2C?o-~qyDsA-V%MEexaxu%Mt7M{S#IU=}R*','UjE1N+Sxn,Nb0}nla{oJ$jWooLs:xYs:RkR+','UYG8.Y?FIpI;~pxtNGRlW=a}WBf7IVR*ofs:','U6Kd*u4o0JIV4:RODhRiD#M|McS5RiRoRhWF','UADm^G%M03E2$+ofD*NGE3Rk-:xt0LRj_1%2','UKMHoyaxNIxt_NRkM|oeE3aeRjWCaht6RjWV','UTCi:cIo00oIx]oLM{ay9Fs:-;WCRij]ozoL','USIY2ntSWAtR0LIUt6j]SjWCofof%LWBfPog','UQF}+R%M9GD%1Ot8V@M_}?ogs:adEOs.a{a#','U7CGl6W8ID0P^TI.IWSvz~Xl-js+j5t8tM-l','USHx$wD%D%~qo#kCj]jsM|Rja#t7NGofbHof','UCHKXs8|6vXn?];OIBo~J--ov#Nb-QTIRirG','UAC?+5_3VyR$~q-=t7ocDoajt6xuIAR%WDt8','U6J9ln00%iOb9GS6i]VqxuWBRjkEV?aekDbc','UFHVScNH?wbxMzIAIAjF-;oextRiM}j[RORj','UEGS3@kWVr.8EYoyIn%N%LV[M{jYr:IVRjMw','UADS?kAAN3~U%X~pouIX9twOkCpFDkoe-:Rj','UGE:rtB?rqg3JbN|n3a_ITn4t8Vst.aeS5t8','UPE3#,b}I7r;kYWAogjuW9oJV=WVbdoga|bJ','UAFPA]4n9ZRQD6VuNGS2A9xttMkW%NE2sDnh','LEBf;Q?wEM,.9FNGs:og4:VsxaE*','LGFrbVM3ZeIp_$R6%4o~Bhxst8xu']
for (const [key, value] of Object.entries(data)) {
    //名称  因为这里拿到的是  ./modules/app.js ，所以需要两层处理
    var moduleName = key.replace(/^\.\/(.*)\.\w+$/, '$1');
    const name = moduleName.split('/')[1]
    modules.push(value.default)
}

let list=modules.map((i,index)=>{
    let num=Math.round( Math.random()*22)
    i= {
        "src": i,
        "blurHash": {
            "encoded": bgList[num],
            "size": [
                2450,
                2450
            ]
        },
        "title": "为热爱买单的一家颜值女装店👚",
        "location": "品质好 性价比高",
        "year": "大梦服饰店",
        "description": "相信我的搭配 会让你找到一个全新的自己"
    }
    return i
})
export default list
