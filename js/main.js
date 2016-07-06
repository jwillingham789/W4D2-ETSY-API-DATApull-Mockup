fetch('http://thinksaydo.com/tiyproxy.php?url=' + encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=h9oq2yf3twf4ziejn10b717i&keywords=board%20games&includes=Images,Shop'))
  .then(function(response){
    return response.json()
  })
  .then(function(json){
    json.results.forEach(function(result){
      //creating the image tag
      var img = document.createElement('img')
      img.setAttribute('src', result.Images[0].url_170x135)
      //creates span tag for 'AD'
      var span = document.createElement('span')
      span.innerHTML = 'AD'
      //creating the title
      var p = document.createElement('p')
      p.innerHTML = result.title
      //creating the username
      var p1 = document.createElement('p')
      p1.innerHTML = result.Shop.login_name
      //creating the price
      var p2 = document.createElement('p')
      p2.innerHTML = '$' + result.price

      //creating the Div for each tile
      var div = document.createElement('div')
      div.classList.add('tile_format')

      //image
      div.appendChild(img)
      img.classList.add('tile_image')
      //span 'AD' tag
      div.appendChild(span)
      span.classList.add('tile_AD')
      //title
      div.appendChild(p)
      p.classList.add('tile_title')
      //username
      div.appendChild(p1)
      p1.classList.add('tile_seller')
      //price
      div.appendChild(p2)
      p2.classList.add('tile_price')
      //appends the new Div with all child elements to the document
      document.querySelector('.tiles').appendChild(div)
    })
  })
