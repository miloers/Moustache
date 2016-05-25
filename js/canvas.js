require( ['particleground.min'], function( Particleground ){
	 use( Particleground );
});
    
 function use( Particleground ){	
		var particle = new Particleground.particle( '#particle .container', {
			//全局透明度，默认0.8
			opacity: .7,
			//粒子颜色数组，默认随机色
			// color: [ 'rgba( 255, 255, 255, .5 )', 'red', 'green', 'blue' ],
			//粒子个数，默认为容器的0.1倍
			//传入[0, 1)显示容器相应倍数的值，或传入具体个数[1, +∞)
			num: .1,
			//运动速度[0, +∞]，默认1
			speed: 1,
			//粒子最大半径，默认2.4
			max: 2.4,
			//粒子最小半径，默认0.6
			min: .6,
			//连接线最大距离，默认180
			dis: 140,
			//连接线段的宽度，默认0.2
			lineWidth: .2,
			//范围越大，连接的点越多，默认240
			r: 240,
			//移动事件的元素,默认为canvas，或传入原生js选择元素
			// eventElem: document,
			//让画布宽高自适应窗口大小的改变，默认false
			resize: true
		});	

};
