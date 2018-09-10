## React学习汇总

一、学习计划

1.学习React基础知识（React语法，ES6，Node.js等） 10.15

2.完成模拟项目（Git：https://github.com/GzwNICE/ReactDome）10.15

3.结合实际项目深入学习React

二、目前学习进度

1.粗略学习Es6

​	let、const、箭头函数、解构赋值、class、import，export等

2.了解JSX语法

​	基本语法，标签类型，JavaScript表达式，标签属性，

3.组件（class组件     函数组件）

​	组件props：传递数据或者方法

​	组件state：组件内部的状态

​	组件样式：className，内联样式

4.组件的生命周期

​	挂载阶段  compoentWillMount，componentDidMount

​	更新阶段 conponentWillReceiveProps，shouldComponentUpdate，conponentWillUpdate，componentDidUpdate

​	卸载阶段  componentWillUnmount

5.事件处理

​	通过preventDefault方法来阻止事件默认行为

​	事件处理函数中this的指向问题：

​	<1>直接在React元素中使用箭头函数定义事件的处理函数

​	<2>使用组件的方法

​	<3>属性初始化语法（property initializer syntax）自动绑定this

6.组件state

​	如何设计合适的state？state和props有什么区别？ 请看大屏幕https://juejin.im/post/5b86131cf265da436c51cc1f

​	正确修改state： this.setState({})

7.组件与服务器通信

​	三个通信阶段：compoentWillMount，componentDidMount，conponentWillReceiveProps(setState)

8.组件通信

​	父子组件通信

​	兄弟组件通信

9.虚拟DOM和性能优化

​	react使用虚拟DOM这项技术提高自身性能

​	Diff算法：react通过比较两次虚拟DOM结构的变化找出差异部分，更新到真实DOM上，从而减少最终要		   	          	在真实DOM上执行的操作，提高程序执行效率，这一过程就是react调和过程，其中的关键就是比较两个树形							结构的算法Diff算法（DIff算法中，比较的是新的虚拟DOM和旧的虚拟DOM）

​	性能优化：使用生产环境的库；避免不必要的组件渲染，通过组件生命周期方法shouldComponentUpdata方法决定后续的方法执行不执行，避免组件不必要的渲染；使用key，react会根据key索引元素，比较render前后的同一个元素的变化，key的使用减少了DOM操作，提高了DOM更新效率，当列表元素数量很多时，key使用更显得重要

