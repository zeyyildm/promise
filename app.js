//javascript senkron şekilde çalışır.

//bazı durumlarda asenkron çalışır
//1-timing 2-event 3-http istekleri

//callback-promise-async&await ile asenkron yapıları senkron yapılara çeviririz.
//callbackler yerine promisleri kullanacağız.
// promise state: 1-)pending :bekleme  2-)fullfiiled:işlem başarılı 3-)rejected:reddedildi
//then. function ile resolve yakalanır.
//.catch function ile yakalama yapılır.


function getUsers(url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange",()=>{
           try {
            if(xhr.readyState === 4 && xhr.status === 200){
                resolve(JSON.parse(xhr.responseText));
            }
           } catch (error) {
            reject(error);
           }

        })
        xhr.open("GET",url);
        xhr.send();

    })
}

function getCommentsByUserId(url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange",()=>{
           try {
            if(xhr.readyState === 4 && xhr.status === 200){
                resolve(JSON.parse(xhr.responseText));
            }
           } catch (error) {
            reject(error);
           }

        })
        xhr.open("GET",url);
        xhr.send();

    })
}

getUsers("https://jsonplaceholder.typicode.com/users/3")
.then((data)=> {
    console.log(data)
   return getCommentsByUserId(`https://jsonplaceholder.typicode.com/comments/${data.id}`)
})
.then((res)=>console.log(res))
.catch((err)=> console.log(err))
.finally(()=>{
    // her zaman çalışır.
});