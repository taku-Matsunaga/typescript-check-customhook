import './App.css';
import { UserCard } from './components/UserCard';
import { useAllUsers } from './hooks/useAllUsers';
import { useAllPosts } from './hooks/useAllPosts';
import { PostCard } from './components/PostCard';

function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const { getPosts, userPosts, loadingPosts, errorPosts } = useAllPosts();


  const onClickFetchUser = () => getUsers();
  const onClickFetchPosts = () => getPosts();

  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <button onClick={onClickFetchPosts}>本文取得</button>
      <br />
      <div style={{ display: "flex", overflowX: "scroll" }}>
        {error ? (
          <p style={{ color: "red" }}>データの取得に失敗しました</p>
        ) : loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {userProfiles.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </>
        )}
      </div>
      <div style={{ display: "flex", overflowX: "scroll" }}>
        {error ? (
          <p style={{ color: "red" }}>データの取得に失敗しました</p>
        ) : loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {userPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
