import logo from './logo.svg';
import './App.css';

function App({library}) {
  return (
    
    <main>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    </head>

    <div className="App">
      <h1>Best {library} Films according to Mateus </h1>
      <body>
<section>
  <h2>My top 3 Spider-man films </h2>
  <hr/>
  <h3>Spider-man No way Home</h3>
  <p>What can I say it is my childhood, teenage years and my adulthood all combined in Spider-man format in a film</p>
  <h3>Spider-man: Across The Spiderverse</h3>
  <p>Well you know what they say the more the merrier, hundreds of Spider-men across a multitude of different universes? Sign me in.</p>
  <h3>Spider-man 3 </h3>
  <p>This one is amazing in my opinion it just signs up and hits home in nostalgic points where it should not, also 3 is my favourite number.  </p>
</section>

<section>
<h4>Find the links to the movies here</h4>
  <ul>
      <li>    <a href="https://www.bing.com/search?q=watch+spider+man+no+way+home&cvid=916568a3e16341c6900605fb371e8d90&gs_lcrp=EgZjaHJvbWUqBggAEAAYQDIGCAAQABhAMgYIARAAGEAyBggCEAAYQDIGCAMQABhAMgYIBBAAGEAyBggFEAAYQDIGCAYQABhAMgYIBxAAGEAyBggIEAAYQNIBCTEwMTY3ajBqNKgCALACAA&FORM=ANAB01&PC=LCTS">Spider-man No way Home </a></li>
      <li>    <a href=" https://www.bing.com/search?pglt=169&q=watch+spider+man+across+the+spider+verse&cvid=f50ead2bb4b74c329bec40bd366276a5&gs_lcrp=EgZjaHJvbWUqBggBEAAYQDIGCAAQRRg5MgYIARAAGEAyBggCEAAYQDIGCAMQABhAMgYIBBAAGEAyBggFEAAYQDIGCAYQABhAMgYIBxAAGEAyBggIEEUYPNIBCDY4MTVqMGoxqAIAsAIA&FORM=ANNTA1&PC=LCTS">Spider-man: Across The Spiderverse</a></li>
      <li>    <a href="https://archive.org/details/spider-man-3-fullscreen-2007-movie">Spider-man 3</a></li>
  </ul>
</section>
<section>
  <h4>The Movies ordered by IMDB rating</h4>
  <ol>
      <li>Spider-man: Across The Spiderverse</li>
      <li>Spider-Man: No Way Home</li>
      <li>Spider-Man 3</li>
  </ol>
</section>
<h5>The Movies Poster's ordered By IMDB Rating</h5>
<ul class="movie_posters">
    <li>
      <figure>
        <a href="across.html"> <img class="poster_image" src="https://www.comingsoon.net/wp-content/uploads/sites/3/2023/04/spider-man-across-the-spider-verse-poster.png"  alt="Spider-man: Across The Spiderverse "/></a> 
      <figcaption>Spider-man: Across The Spiderverse</figcaption>
      </figure>
        
    </li>
    <figure>
    <li> 
    
    
        <a href="noway.html"><img  class="poster_image" src="https://i.ebayimg.com/images/g/wBoAAOSwPP9i3vjZ/s-l1600.jpg" alt="Spider-man: No Way Home "/></a> 
        <figcaption>Spider-man: Across The Spiderverse</figcaption>
    
    
    </li>
    </figure>
    <li>
     
      <figure>
        <a href="spider3.html"><img  class="poster_image" src="https://popcultureocd.files.wordpress.com/2021/12/spiderman-3-banner.png"   alt="Spiderman 3"/></a> 
        <figcaption>Spider-man: Across The Spiderverse</figcaption>
      </figure>
    
    </li>
</ul>

    <footer>
      <p> Copyright - Mateus Goncalves De Ouro</p>
    </footer>
</body>
</div>
    </main>  
    
  );
}

export default App;
