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
>elem.childNodes   返回子节点对象的集合
>elem.firstChild      返回第一个子节点对象
>elem.lastChild       返回最后一个子节点对象
>2. 兄弟关系: elem.previousElementSibling :  返回当前节点的前一个兄弟元素
>elem.nextElementSibling : 返回当前节点的下一个兄弟元素