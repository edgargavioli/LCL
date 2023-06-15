const imgs = document.getElementbyId("img");
const img = document.querySelector("#img img");

  let id = 0;

  fuciton carrossel(){

  idx++;
      if(idx > img.length -1 ) (
      idx = 0;
      )

      imgs.style.transform = `translateX($-idx * 200px)`;

          setInterval(carrossel, 1800);

  }
