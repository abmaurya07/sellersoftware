import { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';

// import { fetchPosts } from './postsAPI';
import { fetchPosts } from './postsActions';
import { ActivityIndicatorComponent, Text, View} from 'react-native';
import { fetchBanners } from '../BannerData/bannersActions';

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.items);  
  const status = useSelector(state => state.posts.status);
  const banners = useSelector(state => state.banners.items);
  const bannersStatus = useSelector(state => state.banners.status);
  console.log('banners ----->', banners)
  console.log('bannersStatus ----->', bannersStatus)

  useEffect(() => {
    dispatch(fetchPosts()); 
    dispatch(fetchBanners());
  }, [dispatch]);
console.log('status ----->', status )

  if (status === 'loading') {
     return (
       <View>
        <Text>Loading...</Text>
       </View>
     )
  }

  if (status === 'error') {
    return (
      <View>
        <Text>Something went wrong!</Text>
      </View>
    )
  }

  if (status ==='succeeded') {
  return (
    <View>
      <Text>No posts found!</Text>
      {posts.map(post => (
        <Text key={post.id}>{post.title}</Text>  
      ))}
    </View>
  ); 
}

}


export default PostsList;