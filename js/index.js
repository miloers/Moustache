define([
    'vue'
], function(Vue) {
    'use strict';
    var vm = new Vue({
        el:"body",
        data:{
            usrandom:'',
            logoname:'Moustache',
            list_one:'WeiBo',
            list_two:'吐槽博客',
            list_three:'Coding',
            list_four:'关于',
            symbol:"****",
            items:[
                {msg:"It is the tears of the earth that keep here smiles in bloom.",id:"0"},
                {msg:"世界以痛吻我,要我报之以歌.",id:"1"},
                {msg:"你的负担将变成礼物,你受的苦将照亮你的路.",id:"2"},
                {msg:"人生若只如初见,何事秋风悲画扇. ",id:"3"},
                {msg:"一个人需要隐藏多少秘密才能巧妙地度过一生.",id:"4"},
                {msg:"Rest belongs to the work as the eyelids to the eyes.",id:"5"},
                {msg:"你微微地笑着,不同我说什么话.而我觉得,为了这个,我已等待得很久了.",id:"6"},
                {msg:"不要着急,最好的总会在最不经意的时候出现.",id:"7"},
                {msg:"生如夏花之绚烂,死如秋叶之静美.",id:"8"},
                {msg:"Wrong cannot afford defeat but Right can.",id:"9"},
            ]  
        },
        methods:{
            random:function(){
                return this.usrandom = Math.floor(Math.random()*10);
            }
        }
    });
    vm.random();
    return  {
        index:vm
    }
});