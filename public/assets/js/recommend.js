// 发送ajax 请求数据 构建模板 并渲染
// 因为我们要多次使用 所以将模板写在js文件中
$.ajax({
    type:'GET',
    url:'/posts/recommend',
    success:function(res){
        var temp = `
            {{each data}}
            <li>
                <a href="detail.html?id={{$value._id}}">
                <img src="{{$value.thumbnail}}" alt="">
                <span>{{$value.title}}</span>
                </a>
            </li>
            {{/each}}
        `;

        var str = template.render(temp,{data:res});
        // console.log(str);
        $('#recommend').html(str);
    }   
});