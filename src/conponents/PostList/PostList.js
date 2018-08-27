import React, {Component} from 'react'
import PostItem from '../PostItem/PostItem'

const date =[
  {title:'大家一起来讨论react吧', author:'张三', date:'2018-08-27 11:14'},
  {title:'前端框架，你最喜欢哪一个', author:'李四', date:'2018-08-27 12:00'},
  {title:'App的时代已经到来', author:'王五', date:'2018-08-27 18:30'},
];

class PlostList extends Component {
  render (){
    return (
      <div>
        帖子列表：
        <ul>
          {date.map(item => 
            <PostItem 
             title= {item.title}
             author= {item.author}
             date= {item.date}
            />
          )}
        </ul>
      </div>
    );
  }
}
export default PlostList;

