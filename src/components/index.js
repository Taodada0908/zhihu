import React from 'react';
import { Drawer, List, NavBar, Carousel, WingBlank } from 'antd-mobile';
import {Icon } from 'antd';
import axios from 'axios';
import '../assets/css/app.css'

let daArr = [];

class Index extends React.Component {
  state = {
    open: false,
    data: [1,2,3],
    hotData: [],
    imgHeight: 676,
    yesterday:[],
    num:'日期',
    week:['日','一','二','三','四','五','六'],//周几的数组，从日开始
    n:0
  }
  
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }
  show(){
    console.log(1);
  }
  render() {
    
    // fix in codepen
    const sidebar = (
      <List>
      {[0].map((i, index) => {
        return (
          <List.Item key={index}>
            <div className="top">
              <div className="first">
                <i></i>
                <p>Tao大大</p>
              </div>
              <div className="second">
                <p onClick={this.goCollection.bind(this)}>
                  <svg t="1571214962647" className="icon" viewBox="0 0 1080 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8758" width=".45rem" height=".45rem"><path d="M1077.529145 388.206248C1072.06379 371.533456 1056.511742 360.326019 1039.008769 360.326019L686.956883 360.326019 578.16172599 27.824884C572.876243 11.207437 557.37954 0 539.765877 0 522.262904 0 506.71085601 11.207437 501.370028 27.700357L392.450343 360.326019 40.467639 360.326019C22.909321 360.326019 7.398781 371.533456 2.002608 388.206248-3.462747 404.713004 2.528389 422.963139 16.682967 433.119014L301.504067 638.533348 192.764255 971.214355C187.243555 987.776457 193.234691 1005.860556 207.444614 1016.127121 221.474665 1026.338342 240.845544 1026.338342 254.944776 1016.127121L539.765877 810.588261 824.642322 1016.127121C831.629675 1021.19122299 839.972989 1023.820128 848.371649 1023.820128 856.701127 1023.820128 865.099787 1021.191223 872.142485 1016.127121 886.297062 1005.860556 892.288199 987.776457 886.767498 971.21435499L778.138377 638.533348 1062.793441 433.119014C1076.934183 422.963139 1082.86997401 404.713004 1077.529145 388.206248Z" fill="#ffffff" p-id="8759"></path></svg>
                  <span>我的收藏</span>
                </p>
                <p>
                  <svg t="1571214492993" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8009" width=".4rem" height=".4rem"><path d="M883.3 380H672.9V64.4H357.4V380H147l368.1 368.1L883.3 380zM147 853.3v105.2h736.3V853.3H147z m0 0" p-id="8010" fill="#ffffff"></path></svg>
                  <span>离线下载</span>
                </p>
              </div>
            </div>
            <div className="bottom">
              <div>
                <svg t="1571215566123" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9539" width=".65rem" height=".65rem"><path d="M145.25333333 439.83146667c-24.1568 17.63946667-41.69066667 29.88906667-58.6048 42.93653333-16.4544 12.68906667-33.49866667 17.9168-48.13226666-0.2688-15.62346667-19.40266667-3.17013333-33.83253333 12.80426666-45.68533333 123.4816-91.6 247.0432-183.1008 370.56533334-274.66133334 25.36533333-18.81386667 50.9824-37.30986667 75.84853333-56.76053333 16.384-12.81813333 30.90773333-12.32 47.02186667 0.53866667 142.91733333 114.08 286.15466667 227.78026667 429.0304 341.90933333 21.19466667 16.93226667 24.24533333 31.872 10.63253333 45.8944-16.48426667 16.97066667-32.55786667 10.656-48.39253333-2.2912-16.56426667-13.5552-33.7088-26.41386667-55.44533334-43.35573333-1.12 13.2864-2.42986667 21.59253333-2.43946666 29.89013333-0.13013333 128.64-0.0704 257.29066667-0.10026667 385.93066667-0.02026667 60.59626667-3.61066667 64.08213333-65.43786667 64.06293333-62.5152-0.02026667-125.03146667-0.05013333-187.54773333-0.02026667-38.86933333 0.01066667-47.552-8.128-47.68213333-46.12266666-0.19946667-58.92266667-1.01013333-117.87413333 0.36053333-176.76693334 0.52053333-22.47893333-7.57333333-29.36106667-28.98773333-27.9968-23.25653333 1.47413333-46.67306667 0.976-69.99786667 0.3488-16.3136-0.42773333-21.856 6.544-21.696 22.38933334 0.57066667 58.9216 0.25066667 117.85386667 0.25066667 176.78613333-0.01066667 43.36533333-7.83146667 51.34293333-50.29333334 51.35253333-67.5168 0.01066667-135.03466667 0.05973333-202.55253333-0.01066666-53.5232-0.04906667-59.1552-5.54666667-59.1744-57.76533334-0.04053333-131.13066667-0.02026667-262.272-0.02986667-393.4016v-36.93226666" p-id="9540" fill="#00a2ed"></path></svg>
                <p>首页</p>
              </div>
            </div>

          </List.Item>);
      })}
    </List>
    );

    return (<div style={{ height: '100%' }} className="index">
      <NavBar icon={<Icon type="bars" />} onLeftClick={this.onOpenChange}>
        <p onClick={this.show.bind(this)}>首页</p>
        <div className="icons">
          <svg t="1571154195597" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2679" width="0.52rem" height="0.62rem"><path d="M859.7 714.4c8.3-0.2 16.6 1.4 24.6 6.5-28.9-18-47.8-49.4-47.8-85.2V435.6c0-146.6-109.1-268.9-254.9-299v-7.1c0-37.4-31.1-67.5-69.5-67.5s-69.5 30.2-69.5 67.5v7.1c-145.8 30.1-254.9 152.3-254.9 299v200.1c0 35.9-19.1 67.2-47.9 85.2 7.3-4.7 15.9-6.9 24.6-6.5-25.5 0.1-46.2 20.1-46.2 45s20.7 45 46.3 45h694.9c25.6 0 46.3-20.1 46.3-45 0.2-24.7-20.5-44.9-46-45zM512.2 962c64 0 115.9-50.4 115.9-112.5H396.3c0 62.1 51.8 112.5 115.9 112.5z" p-id="2680" fill="#ffffff"></path></svg>
          <svg t="1571154627753" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3495" width="0.52rem" height="0.62rem"><path d="M511.9999999999999 46.54545500000006c-51.2 7.105427357601002e-15-93.09090899999998 41.890909000000015-93.09090899999998 93.09090900000002s41.890909000000015 93.09090899999998 93.09090900000002 93.09090899999998 93.09090899999998-41.890909000000015 93.09090899999998-93.09090900000002-41.890909000000015-93.09090899999998-93.09090900000002-93.09090899999998z m5.684341886080802e-14 372.363636c-51.2 7.105427357601002e-15-93.09090899999998 41.890909000000015-93.09090899999998 93.09090900000002s41.890909000000015 93.09090899999998 93.09090900000002 93.09090899999998 93.09090899999998-41.890909000000015 93.09090899999998-93.09090900000002-41.890909000000015-93.09090899999998-93.09090900000002-93.09090899999998z m5.684341886080802e-14 372.363636c-51.2 7.105427357601002e-15-93.09090899999998 41.890909000000015-93.09090899999998 93.09090900000002s41.890909000000015 93.09090899999998 93.09090900000002 93.09090899999998 93.09090899999998-41.890909000000015 93.09090899999998-93.09090900000002-41.890909000000015-93.09090899999998-93.09090900000002-93.09090899999998z" p-id="3496" fill="#ffffff"></path></svg>
        </div>
      </NavBar>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        enableDragHandle
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop:'2.52rem' }}
        sidebar={sidebar}
        open={this.state.open}
        onOpenChange={this.onOpenChange}
      ></Drawer>
        <WingBlank>
          <Carousel
            autoplay={false}
            autoplayInterval={1000}
            infinite
          >
            {this.state.data.map((val,ind) => (
              <a
                key={ind} onClick={this.goDetail.bind(this,val.id)}
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={`${val.image}`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' ,height:'6.16rem'}}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
                <p>{val.title}</p>
              </a>
            ))}
          </Carousel>
        </WingBlank>
        <div id="contents">
          <div className="hotArtical" id="hotArtical">
            <p>今日热文</p>
            <ul>
              {
                this.state.hotData.map((val,ind)=>{
                  return(
                    <li key={ind} onClick={this.goDetail.bind(this,val.id)}>
                      <p>{val.title}</p>
                      <img src={val.images}></img>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div id="lazy">
            {
              this.state.yesterday.map((value,index)=>{
                return (
                  <div className="hotArtical" key={index}>
                    <p>{value.date.substr(4,2)+'月'+value.date.substr(6,2)+'日'} 星期{this.state.week[new Date(value.date.substr(0,4)+'-'+value.date.substr(4,2)+'-'+value.date.substr(6,8)).getDay()]}</p>
                    <ul>
                      {
                        value.stories.map((val,ind)=>{
                          return(
                            <li key={ind} onClick={this.goDetail.bind(this,val.id)}>
                              <p>{val.title}</p>
                              <img src={val.images}></img>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                )
              })
            }
          </div>
        </div>
    </div>);
  }
  componentDidMount() {
    this.img();
    window.addEventListener('scroll',this.onScroll);
  }
  componentWillUnmount() {
    console.log(1);
    window.removeEventListener("scroll", this.onScroll);
  }
  onScroll=()=>{
    var contents = document.getElementById('contents');
    if(document.documentElement.scrollTop>=contents.offsetTop+contents.offsetHeight-window.screen.height){
      this.past();
    }
  }
  img(){
    axios.get('/api/4/news/latest').then((res)=>{
    this.setState({
      data: res.data.top_stories,
      hotData:res.data.stories
    });})
  }
  past(){

    let date = new Date();//日期

    let y = date.getFullYear();//获取年
    let m = date.getMonth()+1;//获取月
    if(m<10){m = '0'+m}
    let d = date.getDate();//获取日
    if(d<10)(d = '0'+d);

    if(this.state.yesterday.length == 0){
      this.setState({
        num:y.toString()+m.toString()+d.toString()
      })
    }

    axios.get(`/api/4/news/before/${this.state.num}`).then((res)=>{
      daArr.push(res.data);
      this.setState({
        yesterday:daArr,
        num:res.data.date,
        n:this.state.n++,
      });
      console.log(1)
    })
  }
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
  goCollection(){this.props.history.push({pathname:'/collection'})}
}
export default Index
