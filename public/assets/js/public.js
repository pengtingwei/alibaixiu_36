// 向服务器端发送请求 索要随机推荐数据
$.ajax({
	type: 'get',
	url: '/posts/random',
	success: function (response) {
		var randomTpl = `
			{{each data}}
			<li>
			  <a href="detail.html?id={{$value._id}}">
			    <p class="title">{{$value.title}}</p>
			    <p class="reading">阅读({{$value.meta.views}})</p>
			    <div class="pic">
			      <img src="{{$value.thumbnail}}" alt="">
			    </div>
			  </a>
			</li>
			{{/each}}
		`;
		var html = template.render(randomTpl, {data: response});
		$('#randomBox').html(html)
	}
})