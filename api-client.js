async function getTodoList() {
    const apiUrl = `https://wincacademydatabase.firebaseio.com/arno.json`;  
    const result = await fetch(apiUrl, {
      method: "GET"
    })
      .then(response => response.json())
      .catch(error => console.log(error));
  
    return await result;
  }
    getTodoList()
    
    // een postrequest maken
    async function postTodos(){
    const apiUrl = `https://wincacademydatabase.firebaseio.com/arno.json`;  
    const result = await fetch(apiUrl, {
      method: "POST"
    })
      .then(response => response.json())
      .catch(error => console.log(error));
  
    return await result;
  }
   
    
    // een delete request maken

/*let endpoint = 'https://wincacademydatabase.firebaseio.com/arno.json'
    const getTasks = function () {
        return fetch(endpoint)
            .then(response => response.json())
            .then(result => console.log(result))
    }
    getTasks()
*/


  /*async function getMovies() {
    // variabele met URL en API_KEY
        const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    // variabele met daarin de opdracht om data op te halen, fetchen en de GET methode is alleen ophalen    
        const result = await fetch(apiUrl, {
          method: "GET"
        })
              // De promisse is de data ophalen. Daarna (.then) het bestand omzetten naar json format
          .then(response => response.json())
              // De promisse kan ook fout gaan, hiermee log je de error in de console
          .catch(error => console.log(error));
      
          //await erbij, zodat JS niet wacht op de result
        return await result;
      }*/