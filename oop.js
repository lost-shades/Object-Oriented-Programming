class Person {
    constructor(name, phoneNumber, address, age, email) {
      this.name = name;
      this.phoneNumber = phoneNumber;
      this.address = address;
      this.age = age;
      this.email = email;
    }
  }
  
  class Movie {
    constructor(title, director, releaseYear, genre) {
      this.title = title;
      this.director = director;
      this.releaseYear = releaseYear;
      this.genre = genre;
    }
  }
  
  class MovieStore {
    constructor() {
      this.movies = [];
    }
  
    addMovie(movie) {
      this.movies.push(movie);
    }
  
    findMoviesByGenre(genre) {
      return this.movies.filter(movie => movie.genre === genre);
    }
  
    rentMovie(title, person) {
      const index = this.movies.findIndex(movie => movie.title === title);
      if (index !== -1) {
        const rentedMovie = this.movies.splice(index, 1)[0];
        rentedMovie.rentedBy = person;
        // Adding the person who rented the movie
        return rentedMovie;
      } else {
        return 'Movie not found';
      }
    }
  }
  
  // Example usage
  const movie1 = new Movie('Inception', 'Christopher Nolan', 2010, 'Sci-Fi');
  const movie2 = new Movie('The Shawshank Redemption', 'Frank Darabont', 1994, 'Drama');
  const movie3 = new Movie('The Dark Knight', 'Christopher Nolan', 2008, 'Action');
  
  const store = new MovieStore();
  store.addMovie(movie1);
  store.addMovie(movie2);
  store.addMovie(movie3);
  
  const person = new Person('Adaeze Ugwuoke', '08163055344', '123 Ogui St', 25, 'adaezeugwuoke@gmail.com');
  
  console.log(store.findMoviesByGenre('Sci-Fi'));
  console.log(store.rentMovie('Inception', person));
  console.log(store.findMoviesByGenre('Sci-Fi')); // outputs empty array cause all Sci-Fi movies have been rented out
  