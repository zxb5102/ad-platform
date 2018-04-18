var Mock = require('mockjs')

Mock.mock('/Account/GetInfo',{
    userName:'11'
})
Mock.mock('/Account/LogOff',{
    code:0
});
Mock.mock('/Account/Login',{
    code:0,
    msg:"输入的用户名或密码不正确"
})
Mock.mock('/Account/Register',{
    code:0,
    msg:"输入的用户名或密码不正确"
})
Mock.mock('/Account/ListBank',[
    {
        id:'@increment',
        name:/[a-z]{6}/
    },
    {
        id:'@increment',
        name:/[a-z]{6}/
    },
    {
        id:'@increment',
        name:/[a-z]{6}/
    },
]);



// /Account/ListBank
// [
// 	{id:,name:}
// ]