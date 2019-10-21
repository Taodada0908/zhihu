import React from 'react'
import axios from 'axios';
import '../assets/css/details.css'

class Details extends React.Component{
  state={
    data:{},
    popularity:{},
    flag:false,
    likeIt:[],
  };
  render(){
    return(
      <div className="details">
        <div className="clear">
          <div>
            <p>分享</p>
            <ul>
              <li><div><i></i><p>新浪微博</p></div></li>
              <li><div><i></i><p>微信</p></div></li>
              <li><div><i></i><p>微信朋友圈</p></div></li>
              <li><div><i></i><p>印象笔记</p></div></li>
              <li><div><i></i><p>有道云笔记</p></div></li>
              <li><div><i></i><p>QQ</p></div></li>
              <li><div><i></i><p>更多平台</p></div></li>
            </ul>
          </div>
        </div>
        <div className="headTop">
          <i onClick={this.back.bind(this)}></i>
          <i onClick={this.share.bind(this)}></i>
          <i onClick={this.like.bind(this,this.props.history.location.state.id)}></i>
          <i onClick={this.comments.bind(this,this.props.history.location.state.id)}></i>
          <p>{this.state.popularity.comments}</p>
          <i></i>
          <p>{this.state.popularity.popularity}</p>
        </div>
        <div className="details-bottom">
          <div className="top">
          </div>
          <div>
            <div dangerouslySetInnerHTML={{__html:this.state.data.body}}></div> ;
          </div>
        </div>
      </div>
    )
  }
  componentDidMount(){
    axios.get(`/api/4/news/${this.props.history.location.state.id}`).then((res)=>{
      this.setState({
        data:res.data
      })
      console.log(this.state.data);
      var img = document.getElementsByClassName('img-place-holder')[0];
      img.innerHTML=`<div className="details-middle">
                      <img src=${this.state.data.image} alt=""/>
                      <p>${this.state.data.title}</p>
                    </div>`
    })
    axios.get(`/api/4/story-extra/${this.props.history.location.state.id}`).then((res)=>{
      this.setState({
        popularity:res.data
      })
    })
    document.addEventListener('click',function(e){
      var clear = document.getElementsByClassName('clear')[0];
      if(e.target.className =='clear'){
        clear.style.display = 'none';
      }
    })
  }
  back(){
    this.props.history.go(-1)
  }
  share(e){
    e.nativeEvent.stopImmediatePropagation();
    var clear = document.getElementsByClassName('clear')[0];
    clear.style.display = 'block';
    console.log();
  }
  comments(x){
    this.props.history.push(
      {
        pathname:'/comments',
        state:{
          id:x
        }
      }
    )
  }
  like(x){
    var newArr =[];
    if(localStorage.getItem('likeIt')==null){
      newArr.push({id:x});
      localStorage.setItem('likeIt',JSON.stringify(newArr))
    }else{
      newArr = JSON.parse(localStorage.getItem('likeIt'));
      newArr.push({id:x});
      console.log(newArr);
      localStorage.setItem('likeIt',JSON.stringify(newArr))
      console.log(localStorage.getItem('likeIt'));
    }
  }
}

export default Details