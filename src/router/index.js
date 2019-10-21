import Index from '../components/index'
import Details from '../components/details'
import Comments from '../components/details/comments'
import Collection from '../components/details/collection'

const index = [
  {
    path:'/index',
    component:Index
  },
  {
    path:'/details',
    component:Details
  },
  {
    path:'/comments',
    component:Comments
  },
  {
    path:'/collection',
    component:Collection
  },
  {
    path:'*',
    redirect:'/index'
  },
]

export default index