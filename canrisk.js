console.log('canrisk.js loaded')

canrisk={}

canrisk.getToken=async(un,pw)=>{
    fetch(`https://canrisk.org/auth-token/?username=${un}&password=${pw}`,{
        mode:'no-cors',
        headers:{
            "Content-Type":"application/json"
        }
    })
}