let quotes = ["Be faithful to that which exists within yourself. André Gide",
            "Hard choices, easy life. Easy choices, hard life. Jerzy Gregory",
            "Men must live and create. Live to the point of tears. Albert Camus",
            "Somewhere, something incredible is waiting to be known. Sharon Begley",
            "Memories of our lives, of our works and our deeds will continue in others. Rosa Parks",
            "Nobody in life gets exactly what they thought they were going to get. But if you work really hard and you’re kind, amazing things will happen. Conan OBrien"];           
let qotd = document.querySelector(".qotd")


let randomIndex = Math.floor(Math.random() * quotes.length);
qotd.innerHTML = `<blockquote>${quotes[randomIndex]}</blockquote>`;
