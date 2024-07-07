document.addEventListener('DOMContentLoaded', () => {
    const albumCover=document.querySelector("#image");
    const guessInput =document.querySelector("#guess-input");
    const submitGuess= document.querySelector("#submit-guess");
    const feedback=document.querySelector("footer");
    const score_display = document.querySelector("#score");

    let score=0;

    let currentAlbum={};

    const albums = [
        { id: 1, name: "Currents", pixelatedImage: "pixel_images\\albumCover1.jpeg" },
        { id: 2, name: "Damn", pixelatedImage: "pixel_images\\albumCover2.jpeg" },
        { id: 3, name: "1989", pixelatedImage: "pixel_images\\albumCover3.jpeg" },
        { id: 4, name: "Astroworld", pixelatedImage: "pixel_images\\albumCover4.jpeg" },
        { id: 5, name: "Illmatic", pixelatedImage: "pixel_images\\albumCover5.jpeg" },
        { id: 6, name: "Blonde", pixelatedImage: "pixel_images\\albumCover6.jpeg" },
        { id: 7, name: "AM", pixelatedImage: "pixel_images\\albumCover7.jpeg" },
        { id: 8, name: "Nevermind", pixelatedImage: "pixel_images\\albumCover8.jpeg" },
        { id: 9, name: "Madvilliany", pixelatedImage: "pixel_images\\albumCover9.jpeg" },
        { id: 10, name: "Graduation", pixelatedImage: "pixel_images\\albumCover10.jpeg" },
       
    ];

    function getRandomAlbum()
    {
        const randomIndex = Math.floor(Math.random() * albums.length);
        return albums[randomIndex];
    }

    function fetchAlbum()
    {
        setTimeout(() => {
            currentAlbum=getRandomAlbum();
            albumCover.src=currentAlbum.pixelatedImage;
            guessInput.value = '';
            

        },500);
    }

    submitGuess.addEventListener('click', () => {
        const userGuess=guessInput.value.trim().toLowerCase();
        if(userGuess)
        {
            if(currentAlbum.name.trim().toLowerCase()==userGuess)
            {   score++;
                feedback.style.color= "green";
                feedback.textContent="Your Answer is Correct";
            }
            else{
                feedback.style.color="red";
                feedback.textContent = `OOPS. The correct answer was - ${currentAlbum.name}. Your Total Score Was : ${score}`;
                score = 0;
            }
            score_display.textContent = `Current Score : ${score}`

            setTimeout(() => {
                feedback.textContent = '';
                fetchAlbum(); 
            }, 2000); 
        }

    });
    fetchAlbum();
});