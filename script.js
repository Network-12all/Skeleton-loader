const grid = document.querySelector('.grid')
  const cardTemplate = document.getElementById('card-template')
  for (let i = 0; i < 10; i++) {
    grid.append(cardTemplate.content.cloneNode(true))
  }

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => {
      grid.innerHTML = ''
      posts.forEach(post => {
        const div = cardTemplate.content.cloneNode(true)
        div.querySelector('[data-title]').textContent = post.title
        div.querySelector('[data-body]').textContent = post.body
        grid.append(div)
      })
  })
  
</script>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3845252464509558"
     crossorigin="anonymous"></script>
<!-- first -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-3845252464509558"
     data-ad-slot="3803372116"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3845252464509558"
     crossorigin="anonymous"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-5e+d9+6h-er-83"
     data-ad-client="ca-pub-3845252464509558"
     data-ad-slot="4288525643"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
