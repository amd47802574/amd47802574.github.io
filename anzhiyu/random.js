var posts=["2026/05/17/hello-world/","2026/05/17/努力不负时光，平凡亦能奔赴山海/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };