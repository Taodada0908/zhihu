import React from 'react'
import axios from 'axios';

class Comments extends React.Component{
  state={
    data:[],
    longComments:[],
    comments:[],
  };
  render(){
    // 判断长评是否为空
    let long;
    if(this.state.longComments.length == 0){
      long = (
        <li className="first"><i></i></li>
      )
    }else{
      long = (
        this.state.longComments.map((val,ind)=>{
          return(
            <li key={ind}>
              <div className="left">
                <img src={val.avatar} alt=""/>
              </div>
              <div className="middle">
                <span>{val.author}</span>
                <p>{val.content}</p>
                <em>{val.time}</em>
              </div>
              <div className="right">
                <i></i>
                <p>{val.likes}</p>
              </div>
            </li>
          )
        })
      )
    }

    return(
      <div className="comments">
        <div className="headTop">
          <i onClick={this.back.bind(this)}></i>
          <p>{this.state.data.comments}条点评</p>
          <i></i>
        </div>
        <div className="bottom">
          <div className="bottom-top">
            <p className="comment">{this.state.data.long_comments}条长评</p>
          </div>
          <ul className="bg">
            {long}
          </ul>
        </div>
        <div className="bottom">
          <div>
            <p className="comment">{this.state.data.short_comments}条短评</p>
            <i onClick={this.scroll.bind(this)}></i>
          </div>
          <ul>
            {
              this.state.comments.map((val,ind)=>{
                let t = new Date(val.time);
                let m = t.getMonth()+1;
                let d = t.getDate();
                let h = t.getHours();
                let mi = t.getMinutes();
                if(m<10) m='0'+m
                if(d<10) d='0'+d
                if(h<10) h='0'+h
                if(mi<10) mi='0'+mi
                return(
                  <li key={ind}>
                    <div className="left">
                      <img src={val.avatar} alt=""/>
                    </div>
                    <div className="middle">
                      <span>{val.author}</span>
                      <p>{val.content}</p>
                      <em>{m}-{d}&nbsp;{h}:{mi}</em>
                    </div>
                    <div className="right">
                      <i></i>
                      <p>{val.likes}</p>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
  componentDidMount(){
    var _this = this;
    function getAll() {
      return axios.get(`api/4/story-extra/${_this.props.history.location.state.id}`)
    }
    function getLongComments() {
      return axios.get(`/api/4/story/${_this.props.history.location.state.id}/long-comments`)
    }
    function getShortComments() {
      return axios.get(`/api/4/story/${_this.props.history.location.state.id}/short-comments`)
    }
    axios.all([getAll(),getLongComments(),getShortComments()]).then(axios.spread((a,l,s)=>{
      this.setState({
        data:a.data,
        longComments:l.data.comments,
        comments:s.data.comments,
      });
      var bg = document.getElementsByClassName('bg')[0];
      var bottomTop = document.getElementsByClassName('bottom-top')[0];
      bg.style.height = document.documentElement.clientHeight-bg.offsetTop-bottomTop.offsetHeight+'px'
      console.log(bg.style.height);
    }))
  }
  back(){
    this.props.history.go(-1)
  }
  scroll(){
    console.log(1);
  }
}

export default Comments
