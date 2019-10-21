import React from 'react'
import axios from 'axios';
import {Icon} from 'antd';

class Collection extends React.Component {
  state = {
    love: []
  }

  render() {
    return (
      <div className="collection">
        <div className="top">
          <i onClick={this.toIndex.bind(this)}></i>
          <p>{this.state.love.length}条收藏</p>
        </div>
        <div className="like">
          <ul>
            {
              this.state.love.map((val, ind) => {
                return (
                  <li key={ind} onClick={this.goDetail.bind(this, val.id)}>
                    <p>{val.title}</p>
                    <img src={val.images}></img>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }

  componentDidMount() {
    var loveArr = []
    JSON.parse(localStorage.getItem('likeIt')).map((val) => {
      axios.get(`/api/4/news/${val.id}`).then((res) => {
        loveArr.push(res.data)
        console.log(loveArr);
        this.setState({
          love: loveArr
        })
      })
    })
  }

  toIndex(){this.props.history.push({pathname:'/index'})}
  goDetail(x){
    console.log(this.props.history);
    this.props.history.push(
      {
        pathname:'/details',
        state:{
          'id':x
        }
      }
    )
  }
}

export default Collection
