import axios from "axios";
import { useState } from "react";
import { Post } from "../types/api/post";
import { UserPost } from "../types/userPost";

export const useAllPosts = () => {
  const [userPosts, setUserPost] = useState<Array<UserPost>>([]);
  const [loadingPosts, setLoading] = useState(false);
  const [errorPosts, setError] = useState(false);

  const getPosts = () => {
    setLoading(true);
    setError(false);
    console.log("postだよ");

    axios.get<Array<Post>>("https://jsonplaceholder.typicode.com/posts").then((res) => {
      const data = res.data.map((post) => ({
        id: post.id,
        userId: post.userId,
        title: post.title,
        body: post.body
      }));
      setUserPost(data);
    }).catch(() => {
      setError(true);
    }).finally(() => {
      setLoading(false);
    });
  };

  return { getPosts, userPosts, loadingPosts, errorPosts }
};