var posts=["2025/04/28/hello-world/","2025/07/16/一天半夜突然有很多想说的话/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };