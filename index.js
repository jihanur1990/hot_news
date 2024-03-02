// function getPost(){
//        fetch('https://jsonplaceholder.typicode.com/posts')
//        .then(res=>res.json())
//        .then(data=>setId(data))
// }

// function setId(users){
//     const postCont=document.getElementById('post-container')
    
//     for (const user of users) {
//         const post=document.createElement('div')
//         post.classList.add('post');
//         const postTittle=document.createElement('div');
//         postTittle.classList.add('post-tittle')
//         postTittle.innerText=user.title;
//         const postBody=document.createElement('div');
//         postBody.classList.add('post-body')
//         postBody.innerText=user.body;
//         post.appendChild(postTittle);
//         post.appendChild(postBody);
//         postCont.appendChild(post);
//     }

// }

// getPost();

const newsCategoryFetch=async()=>{
    const response=await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data=await response.json();
    const newsCategory=data.data.news_category;
    newsCategory=showNewsCategory(newsCategory);
}
const showNewsCategory=(category)=>{
    const nav=document.getElementById("nav-ul")
    category.forEach(element => {
        const li=document.createElement('li');
        li.innerHTML=`<a onclick="showNews(${element.category_id})">${element.category_name}</a>`
        nav.appendChild(li);
    });
}
const showNews=async()=>{
    const response=await fetch('https://openapi.programming-hero.com/api/news/category/01');
    const data1=await response.json();
    const newsData=data1.data;
    const newsContainer=document.getElementById("news-container")

    newsData.forEach(element => {
        const newsBox=document.createElement('div');
        newsBox.classList.add('newsbox');
        newsBox.innerHTML=`
        <img src="${element.thumbnail_url}" class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-2xl font-bold">${element.title.slice(0,50)}</h1>
          <p class="py-6">${element.details.slice(0,400)}</p>
          <div class="w-full flex flex-row justify-between">
                <div class="flex flex-row gap-4">
                    <img src="${element.author.img}" class="max-w-[50px] rounded-full shadow-2xl"/>
                    <div>
                    <h4 class="font-bold text-2xl">${element.author.name}</h4>
                    <p>${element.author.published_date}</p>
                    </div>
                </div>
                <button class="btn btn-primary">Details..</button>
            </div>    

        </div>
      `
      newsContainer.appendChild(newsBox);
    });
    
}

newsCategoryFetch();
showNews();

