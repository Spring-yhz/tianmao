window.onload=function(){
	var choose=getClass('choose');
	var shang2=getClass('shang2');
	
	for(var i=0; i<choose.length; i++){
		choose[i].index=i;
		choose[i].onclick=function(){
			for(var j=0; j<choose.length; j++){
			 shang2[j].style.display="none";
			 choose[j].style.fontWeight="normal";
			 choose[j].style.textDecoration="none";

			}
			 shang2[this.index].style.display="block";
			 this.style.fontWeight="bold";
			 this.style.textDecoration="underline";
			
		}
	}
	var xin=getClass('xin');
	var shang21=getClass('shang21');
	for(var i=0; i<shang21.length; i++){
		shang21[i].index=i;
		shang21[i].onmouseover=function(){
			xin[this.index].style.display="block";
		}
		shang21[i].onmouseout=function(){
			xin[this.index].style.display="none";
		}
	}
	
	var imgbox=getClass('imgbox');
	var btns=getClass('btns');
	
	var tu=getClass('tu')[0];// 轮波图大背景

	var bgarr=['#b60ff5','#e4e4e4','#feb8dd','#febfd0','#64ccab','#e1e1e1']
	var num=1;
	function move(){
		if(num==6){
			num=0;
		}
		for(var i=0; i<imgbox.length; i++){
			imgbox[i].style.zIndex="2";
			btns[i].style.background="black";
		}
		imgbox[num].style.zIndex="3";
		btns[num].style.background="white";
		tu.style.background=bgarr[num];
			num++;

	}
	var timeId = setInterval(move,2000);

	for(var i=0; i<btns.length; i++){
		btns[i].index=i;
		btns[i].onmouseover=function(){
			clearInterval(timeId);
			for(var j=0; j<imgbox.length; j++){
				imgbox[j].style.zIndex="2";
				btns[j].style.background="black";

			}
			imgbox[this.index].style.zIndex="3";
			btns[this.index].style.background="white";
			tu.style.background=bgarr[this.index];
			
			}
			btns[i].onmouseout=function(){
		    timeId = setInterval(move,2000);
			num=this.index+1;
		}
	}

	// 输入框效果
	var shuru=getClass('shuru')[0];
	console.log(shuru);
	shuru.onfocus=function(){
		if(shuru.value=="猫猫狗狗购物狂欢，给它最好的"){
			shuru.value="";
		}
		
	}
	shuru.onblur=function(){
		if(shuru.value==""){
			shuru.value="猫猫狗狗购物狂欢，给它最好的";
		}
		
	}


	// 按钮轮播
	function aa(a){
	  var  banchang=$(".banchang")[a];
	  var  leftbtn=$(".leftbtn")[a];
	  var  rightbtn=$(".rightbtn")[a];

      function moveleft(){
      animate(banchang,{left:-110},600,Tween.Linear,function(){
                        var first=getFirst(banchang);
                      	var last=getLast(banchang);
                        banchang.appendChild(first);
                     	banchang.style.left=0;
                  })
               }
    
        function moveright(){
                  var last=getLast(banchang);
                  banchang.insertBefore(last,getFirst(banchang));
                  animate(banchang,{left:110},600,Tween.Linear)
                  banchang.style.left=-110+"px";
                   animate(banchang,{left:0},600,Tween.Linear);
         }
         var t=setInterval(moveleft,2000);
          leftbtn.onmouseover=rightbtn.onmouseover=function(){
                  clearInterval(t);
               }
           leftbtn.onmouseout=rightbtn.onmouseout=function(){
                  t=setInterval(moveleft,2000);
               }
             	leftbtn.onclick=function(){
                  moveleft();
               }

               rightbtn.onclick=function(){
                  moveright();
               }
     }
	 aa(0);
	 aa(1);
	 aa(2);
	 aa(3);
	 aa(4);
	 aa(5);

//顶部出现
		var searchda=$(".searchda")[0];

     	var flag=true;
     	var flag1=true;
        var floors=$(".floors");
        var jump=$(".fixed-left")[0];
		// var btn=$("img",jump);
		var btn=$(".fixed-floor");
  
    var tex=$('#tex');
	tex.onfocus=function(){
		if(tex.value=="施华洛世奇华丽入住，璀璨好礼疯狂送"){
			tex.value="";
		}	
	}
	tex.onblur=function(){
		if(tex.value==""){
			tex.value="施华洛世奇华丽入住，璀璨好礼疯狂送";
		}	
	}

//按钮控制滚动条
       for(var i=0;i<btn.length;i++){
        	btn[i].index=i;
        	btn[i].onclick=function(){
               var obj=document.documentElement.scrollTop?document.documentElement:document.body;
               animate(obj,{scrollTop:floors[this.index].t})
      		}
        }

       //搜索框的显示与隐藏
     	window.onscroll=function(){
     		var scrollT=getScrollT();
     		if(scrollT>=1020){
     			if(flag){
     				animate(searchda,{top:0},500);
     				flag=false;
     				flag1=true;
     			}     			
     		}else{
                if(flag1){
                	animate(searchda,{top:-50});
                	flag1=false;
                	flag=true;
                }	   			
     		}


     		//楼层跳转
	        if(scrollT>=506){
	        	jump.style.display="block";
	        }else{
	        	jump.style.display="none";
	        }
			//滚动条控制按钮
            for(var i=0;i<floors.length;i++){
            	floors[i].t=floors[i].offsetTop;//
            	if(floors[i].t<scrollT+473){
            		for(var j=0;j<btn.length;j++){
            			btn[j].style.background="";
            		}
            		btn[i].style.background="red";
            	}
             }
		}


//楼层图片左移
	function imgslefts(a){
			var flsan=$('.flsan')[a];
			var imgsleft=$('img',flsan);
			for(var i=0; i<imgsleft.length;i++){
				imgsleft[i].index=i;
				imgsleft[i].onmouseover=function(){
					imgsleft[this.index].style.cssText="margin-left:-2px";
				}
				imgsleft[i].onmouseout=function(){
					imgsleft[this.index].style.cssText="margin-left:0px";
				}
			}

		}
		for(var i=0; i<12; i++){
			imgslefts(i);
		}

	

// 右边定位隐藏事件
	var frsmall=$('.frsmall');
	var backtop=$('.backtop')[0];
	backtop.onclick=function(){
		document.body.scrollTop=0;
		
	}
	console.log(backtop);
	var tequan=$('.tequan');
	for(var i=0; i<frsmall.length; i++){
		frsmall[i].index=i;
		frsmall[i].onmouseover=function(){
			frsmall[this.index].style.background="red";
			animate(tequan[this.index],{opacity:1,left:-95},600,Tween.Linear)
			// tequan[this.index].style.left="-100px";
			// tequan[this.index].style.display="block";
			
		}
		frsmall[i].onmouseout=function(){
			// tequan[this.index].style.left="-130px";
			// tequan[this.index].style.display="none";
			frsmall[this.index].style.background="black";
			animate(tequan[this.index],{opacity:0,left:-130},600,Tween.Linear)
		}
	}
	



// 二级菜单的实现
	var yiji=$('.yiji');
	var erji=$('.erji');

	 for(var i=0; i<yiji.length;i++){
		yiji[i].index=i;
		yiji[i].onmouseover=function(){
			var lis=$('li',erji[this.index]);
			// 找当前二级菜单下的li
			var h=lis[0].offsetHeight;
			erji[this.index].style.height=0+'px';
			animate(erji[this.index],{height:lis.length*h},600,Tween.Linear);


		}

		yiji[i].onmouseout=function(){
			var lis=$('li',erji[this.index]);
			// 找当前二级菜单下的li
			var h=lis[0].offsetHeight;
			//erji[this.index].style.height=0+'px';
			animate(erji[this.index],{height:0},600,Tween.Linear);
		}
	}


	var biaoqian=$(".biaoqian");
	  var tck=$(".banner-libiao-tck");
	  for(var i=0;i<biaoqian.length;i++){
	    biaoqian[i].index=i;
	    hover(biaoqian[i],function(){
	      tck[this.index].style.display="block";
	      tck[this.index].style.left=190+"px";
	      animate(tck[this.index],{left:190},300)
	    },function(){
	      tck[this.index].style.display="none";
	      tck[this.index].style.left=190+"px";
	    })
	  }
	  

	 //  var jing=getClass('jingzuo')[0];
  // 	jing.onmouseover=function(e){
  // 		var ev=e||window.event;
		// var obj=ev.srcElement||ev.target;
		// if(obj.className=='jingzuo'){
			
		// }else{
		// 	animate(obj,{paddingLeft:40},600,Tween.Linear)
		// 	// obj.style.paddingLeft="40px";
		// }
		// jing.onmouseout=function(e){
  // 		animate(obj,{paddingLeft:32},600,Tween.Linear)
  // 	}
  // 	}

//下拉框
        var yiji=$(".xiala");
        var erji=$(".top-erji");

        for(var i=0;i<yiji.length;i++){
            yiji[i].index=i;
            hover(yiji[i],function(){
                var lis=$("li",erji[this.index]);
                //找当前二级菜单下的li
                //alert(lis.length)
                var h=lis[0].offsetHeight;
                //erji[this.index].style.height=lis.length*h+"px";
                animate(erji[this.index],{height:lis.length*h},200,Tween.Linear);
            },function(){
                animate(erji[this.index],{height:0},100,Tween.Linear);
          })
        }


}


