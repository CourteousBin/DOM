# DOM
## 1.什么DOM ?
>document object model
>专门操作网页内容的API
>原生JS = ECMAScript + DOM(专门操作网页内容的API )+ BOM(专门操作浏览器的API)
## 2.DOM Tree
>网页一切内容在内存中都是以树形结构存储

>树形结构最直观表示上下级关系

>树根:document 对象

>所有网内内容都是document对象的后代节点(Node)

>DOM内容执行四大操作:增 删 改 查

>Node对象:三大属性:

>1..nodeType:节点类型 , 值为 数字 . 9 = Document 1 = Element 2 = attribute 3 = text

>2.nodeName:节点名称. document = #document , element = 全大写标签名 , attribute = 属性名 , 文本节点 = #text

>3.nodeValue:节点值
## 3.查找
>节点树: 包含所有节点(元素,文本)的完整的树结构

>1. 父子关系: elem.parentNode  返回一个父节点对象

>elem.childNodes   返回子节点对象的集合

>elem.firstChild      返回第一个子节点对象

>elem.lastChild       返回最后一个子节点对象

>2. 兄弟关系: elem.previousSibling  : 返回当前节点的前一个兄弟节点

>elem.nextSibling : 返回当前节点的下一个兄弟节点:

>问题: 不但包含有用的元素节点，还包含看不见的换行/空格干扰

>解决: 元素树: 仅包含元素节点的树结构

>1.父子关系: elem.parentElement  返回一个父元素对象

>elem.children   返回子节点对象的集合

>elem.elem.children      返回第一个子节点对象

>elem.elem.lastElementChild       返回最后一个子节点对象

>2. 兄弟关系: elem.previousElementSibling :  返回当前节点的前一个兄弟元素

>elem.nextElementSibling : 返回当前节点的下一个兄弟元素

>3. 遍历递归 , 节点迭代器: document.createNodeIterator(parent,NodeFilter.SHOW_ALL,null,false);

>4. 按HTML查找 

> document.getElementById("id");

> parent.getElementsByTagName("标签名");		任何父元素都能调用！

> document.getElementsByName("name");

> parent.getElementsByClassName("class");

>5. 选择器查找 (CSS选择方法都可以用)

>	如果只找一个: var elem = parent.querySelector("selector");

>	如果找多个:  var elems=parent.querySelectorAll("selector");

>	返回非动态集合(non-live collection):实际存储完整数据，反复访问，也不用重新查找DOM树

>	getElement .. VS querySelector ; 返回值:getElements返回动态集合 , querySelector返回非动态集合:

>	易用性:querySelector更灵活, 且更简单

## 4.修改

>1. 修改内容: 获取Html代码片段 : ele.innerHTML

> 获取修改文本: ele.textContent (去掉了html标签,将转义字符转换为正文)

>2. 修改属性: 有两种方式

> 一种核心DOM , 可操作结构化文档的API(HTML XML)

> 第二种是HTML DOM , 对核心DOM中常用API的简化

> 核心DOM操作属性API:
>	直接获得属性值: var value=elem.getAttribute("属性名");
>	设置属性: elem.setAttribute("属性名",新值);
>	判断是否包含指定属性:var bool=elem.hasAttribute("属性名")
>	移除属性: elem.removeAttribute("属性名");

> HTML DOM 操作属性
>	直接获得属性值: var value=elem.属性名
>	设置属性:elem.属性名="值"
>	判断是否包含指定属性:elem.属性 != ""
>	移除属性:elem.属性 = "";

> 强调: 

>	html中的class属性和ES中的class属性冲突 ,  html中的class要改名为className
>	disabled selected checked	不能用核心DOM操作！只能用html DOM
>	attribute  vs  property
>	attribute指出现在开始标签中的属性 , property保存在内存中的对象中的属性 , 核心DOM只能操作出现在页面上的attribute属性 , 无法操作未出现在页面上的内存中的property属性 , HTML DOM可访问内存中的property属性
>	在jQuery中 .prop() 才能操作三大状态 .attr只能操作核心DOM

>自定义属性:

>	只能用核心DOM访问，不能用html访问

>	 HTML5: ——兼容问题 , 所有自定义属性: 属性名必须: data-属性名 , 访问时: elem.dataset.属性名


> 3. 修改样式
>	获取和修改: elem.style.css属性名

>	css名称 去横线变驼峰; 如:background-color -> backgroundColor 

>	获取style只能获取单一属性 , 不能获取完整样式 , 想获取完整样式 var style = getComputedStyle(ele);

>	getComputedStyle(ele) 获取的样式只能读 , 并不能修改

## 添加与删除

> 添加:
>	1.创建新元素	var ele = document.createElement('标签名');

>	2.设置关键属性
>		var a = document.createElement('a'); a.href="url";a.innerHTML="text"

>	3.将新元素添加到DOM
>		追加:parent.appendChild(ele);
>		插入:parent.insertBefor(ele,oldEle);
>		替换:parent.replaceChild(ele,oldLel);

>	添加多个平级子元素 , 需要用到文档片段
>		文档片段:内存中临时保存多个平级子元素的虚拟父元素
>		1.创建文档片段:var frag = document.createDocumentFragment();	
>		2.将平级子元素追加到 frag 中 frag.appendChild(child);
>		3.将frag整体追加到DOM树 parent.appendChild(frag);
>		frag将子元素添加到DOM树后,自动释放!

>	删除:parent.removeChild(child); 

## HTML DOM 常用对象
>	Image 创建:var img = new Image();
>	Select,Option 属性: .options 获得 select 下所有option对象
>		.length 获得option 个数
		.value:select选中值有两种情况:1.如果选中的option有value属性,则返回value属性 2.如果没有value 则返回内容
		.selectedIndex:获得当前选中的下标

>		方法		.add(option) 	向select添加一个option ; add不支持文档片段 , 添加文档片段只能用appendChild
		remove(i)删除select下 i 位置的option
>		事件		onchange:当选中项发生改变时触发

>	Option对象:指页内上的一个option元素	var opt = new Option(text,value);
				var opt = document.createElement();
				opt.innerHTML = 
				opt.value = 


>	Table
>		创建分组:	var thead = table.createTHead();
			返回分组的目的是 , 可继续向分组添加 tr
		删除分组:table.deleteTHead()			
		获取分组:table.tHead

>	table可以有多个tBody , 获取tbody:table.tBodies[i];
	所以 删除tBody 并不是 tbale.deleteTBody(); table不能删除tbody

	table
          .createTHead()=>thead
          .deleteTHead()
          .tHead
              .insertRow(i) => tr //在i位置插入一个新行
                                省略i, 默认表示末尾追加
              .deleteRow(i);//删除i位置的行
              .rows //获得thead中的所有行对象
              .rows[i]=>tr 
                属性: .rowIndex 获得当前tr相对于整个table的行下标
                                  .insertCell(i) => td //i位置添加一个新td
                                                   省略i, 默认表示末尾追加
                                  .deleteCell(i)
                                  .cells //获得行中的所有格
                                  .cells[i] => td
              
          .createTBody() tbody
          .tBodies/tBody
          
          .createTFoot() tfoot
          .deleteTFoot()
          .tFoot

    删除行: 
      2种: 1. 用行分组.deleteRow(i)
                     i : 指的是行在当前分组内的下标位置
             2. 用table.deleteRow(i)
                    i: 指的是行在整个table中的下标位置
                           ——tr.rowIndex
       只要用rowIndex删除行，必须用table.deleteRow(...)

>	Form/Element:
		获取:var form = document.forms[i/id/name];
			.elements 获得 form 中所有表单元素的集合 var ele = form.elements[i/id/name];
				更简化: 如果表单元素有name属性:form.name
			.length获得form表单元素个数
		方法:submit();手动提交
		事件:.onsubmit();

## BOM :browser Object Model
>	概括:专门操作浏览器API
>	包括:DHTML模型:
>		window:1.代替global充当全局作用域对象	2.封装所有BOM和DOM的API
		history:封装所有当前窗口打开的历史记录栈
		location:封装当前窗口正在打开的url对象
		navigator:封装浏览器配置信息
		document:DOM
		screen:封装了显示设备的信息
		event:封装了事件

>	window
		打开或者关闭窗口: open("url","name") ; 关闭: close();

		打开超链接有四种方式:
			1.替换当前窗口,可后退	
				html:<a href="url" target="_self">
				js:window.open("url","_self");

			2.替换当前窗口,不可后退
				js:window.location.replace("url")
				在当前窗口打开新url，用新url替换history中原有url
			    原理:
			         history: 保存当前窗口打开后成功访问过的url的历史记录栈

			3.在新窗口打开,可打开多个
				html: <a href="url" target="_blank"> 
				js: window.open("url","_blank");

			4.在新窗口打开,只能打开一个
				html:<a href="url" target="name">
				js: open("url","name");
				每个窗口都有一个唯一的name属性
     			name: 在内存中唯一标识一个窗口的名称
     			规定: 同时只能打开一个相同name的窗口
       				预定义: 	_self : 和当前窗口使用相同的name
                   			_blank: 不指定自定义name，由浏览器随机分配

>	定时器:
		概括:让浏览器自动执行任务
			包括:周期性定时器,让浏览器反复执行一个任务
			一次性定时器:让浏览器等待一段时间后,自动执行任务;
		周期定时器执行:
			1.任务函数,定时器每次自动调用一个函数:function task(){}
			2.启动定时器	:	var timer = setInterval(task,时间间隔ms);
			3.停止计时器:	
				- 手动	clearInterval(timer)	                   			
				- 自动	设定一个临界值 , 到了就自动停止
		
		一次性定时器执行:
			1.任务函数,定时器每次自动调用一个函数:function task(){}
			2.启动定时器	:	var timer = setTimeout(task,时间间隔ms);
			3.停止:因为只执行一次的缘故 , 如果使用取消 , 那么等于这个函数不用执行了 , 取消执行

>	history
		概述:封装当前窗口打开后成功访问过的 url 历史记录栈
		history.go(n)
			前进:history.go(1)
			后退:history.go(-1) (如果和后端配合中,go(-1)不管用,可以go(-2))
			刷新:history.go(0)

>	location
		概述:封装当前窗口正在打开的url
		属性:
			.href保存完整的url地址
			.protocol 协议
			.host 	主机
				- .hostname 主机名
				- .port 	端口号
			.pathname 	相对路径
			.hash 	#xxx 锚点跳转
			.search 	?xxx=yyy&xxx=yyy	

		方法:
			location.href="url"	在当前页面打开新url	
			location.replace('url') 在当前窗口打开新Url,禁止后退
			location.reload(false/true) 重新加载页面 , 参数:force(强制)是否绕过缓存,直接从服务器获取数据,默认false

>	navigator
		概述:封装浏览器配置信息的对象(没有标准)
		.cookieEnable 	判断是否启用了cookie
		.plugins 		封装了浏览器安装的所有插件信息
		.userAgent		包含了浏览器名称,内核版本号

>	screen
		概述:获得浏览器显示设备的分辨率大小
		利用screen判断设备类型: 
		lg(大屏)		分辨率>1200
		md(中配)		分辨率>992	Pc
		sm(小屏)		分辨率>768	pad
		xs(超小屏)	分辨率<768	phone

>	event
		概述:浏览器自动触发或者用户手动触发页面状态的改变
		希望事件触发时,调用一个函数,将函数绑定在属性上
		缺点:不符合内容与行文分离原则,不便于维护!
		优化:
			1.为事件赋值一个函数 ANY.on事件名=fun;		不要加(),因为是回调的一种 , fun 中 this-> ANY
			2.addEventListener(事件,function(){},true/false) 第三个参数如果为true , 在事件触发过程中优先执行 	
		
		事件模型:
			1.捕获:由外向内,记录各级父元素上绑定的相同事件	(有事件才捕获)
			2.目标触发:触发事件
			3.冒泡:向父级冒泡,触发事件处理函数

		事件对象:
			概述:当事件发生时,自动创建的,封装所有事件信息的对象 
			获取:function处理函数(e){} 自动获得事件对象

		操作:
			取消冒泡:e.stopPropagation();
			浏览器在事件发生前,会遍历所有注册的事件监听,监听越多,遍历越慢,网页响应速度也慢
			如果多个子元素绑定相同的事件时,只需要在父元素集中绑定一次,所有子元素共用即可

			难点:
				1.如何获得目标,this随着冒泡向父元素移动 ; 解决e.target 始终保存着目标元素,不随着冒泡改变
				2.阻止浏览器默认行为:e.preventDefault();

>	事件坐标系:
		概述:当事件发生时,鼠标的位置
			相对于屏幕左上角:e.screenX 	e.screenY
			相对于文档显示左上角	e.clientX 	e.clienY
			相对于事件绑定的元素	e.offsetX 	e.offsetY

		页面滚动:
			事件:document.body.onscroll
			获得页面高度:document.body.scrollTop
			onscroll中的this -> window
		


