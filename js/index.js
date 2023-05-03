const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "images/Dan-Dan-Mian.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];


  const menuArea = document.querySelector('#menu-area')


  const createFoodCard = (imageSource, foodName, foodPrice, foodDescription)=>{
    
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('menu-items')

    //*Food Card sol taraftaki gorsel icin ayrilan alan basladi
    const imgElement = document.createElement('img')
    //setAttribute ile herhengi bir oznitelik ekleyebilirim
    imgElement.setAttribute('src', `${imageSource}`)
    //img.alt ile img elemaninin alabilecegi alt ozniteligini ekleyebilirim
    imgElement.alt=`${foodName}`
    imgElement.classList.add('photo')

    cardContainer.prepend(imgElement) 
    //*Food Card sol taraftaki gorsel icin ayrilan alan sonlandi//


    //*Food Card sag taraftaki baslik & detay alani basladi//
    const foodInfoArea = document.createElement('div')
    foodInfoArea.classList.add('menu-info')

    const foodTitle = document.createElement('div')
    foodTitle.classList.add('menu-title')

    const foodNameDOM = document.createElement('h4')
    foodNameDOM.innerText = foodName
    foodTitle.prepend(foodNameDOM)

    const foodPriceDOM = document.createElement('h4')
    foodPriceDOM.innerText = foodPrice
    foodPriceDOM.classList.add('price')
    foodTitle.append(foodPriceDOM)

    foodInfoArea.prepend(foodTitle)

    const foodDescriptionDOM = document.createElement('div')
    foodDescriptionDOM.classList.add('menu-text')
    foodDescriptionDOM.innerText = foodDescription

    foodInfoArea.append(foodDescriptionDOM)

    cardContainer.append(foodInfoArea)

    menuArea.append(cardContainer)

    //*Food Card sag taraftaki baslik & detay alani sonlandi//
    
  }

  const buttonAll = document.querySelector('#btn-all')
  const buttonKorea = document.querySelector('#btn-korea')
  const buttonJapan = document.querySelector('#btn-japan')
  const buttonChina = document.querySelector('#btn-china')

  //Sayfam ilk yuklenirken tum kategorideki yemekler gelsin ve
  //"All" butonumun focus ozelligi calissin
  window.onload = ()=>{
    getAllFoods(createFoodCard)
    buttonAll.focus()
  }

  const resetThePage = ()=>{
    menuArea.innerHTML=' '
  }


  const getAllFoods = (callbackFn)=>{
      //Oncelikle Sayfa icerigini sifirliyorum
      resetThePage()

      menu.forEach(menuItem => callbackFn(menuItem.img, menuItem.title, menuItem.price, menuItem.desc))
    }


  const getKoreanFoods = (callbackFn)=>{
      resetThePage()

      menu.forEach(menuItem => menuItem.category==='Korea' && callbackFn(menuItem.img, menuItem.title, menuItem.price, menuItem.desc))

    }

  const getJapaneseFoods = (callbackFn)=>{
      resetThePage()

      menu.forEach(menuItem => menuItem.category==='Japan' && callbackFn(menuItem.img, menuItem.title, menuItem.price, menuItem.desc))

    }
  const getChineseFoods = (callbackFn)=>{
      resetThePage()

      menu.forEach(menuItem => menuItem.category==='China' && callbackFn(menuItem.img, menuItem.title, menuItem.price, menuItem.desc))

    }


  buttonAll.addEventListener('click',()=> getAllFoods(createFoodCard))
  buttonKorea.addEventListener('click',()=> getKoreanFoods(createFoodCard))
  buttonJapan.addEventListener('click',()=> getJapaneseFoods(createFoodCard))
  buttonChina.addEventListener('click',()=> getChineseFoods(createFoodCard))