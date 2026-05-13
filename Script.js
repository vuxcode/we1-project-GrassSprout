
    const dropdowncontent = document.querySelectorAll('.dropdowncontent a');
    const contentDivs = document.querySelectorAll('.content');
    
   

    dropdowncontent.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const selectedLang = this.getAttribute('data-lang');
            localStorage.clear()
            // Hide all content
            contentDivs.forEach(div => {
                div.style.display = 'none';
            });
     
            // Show the content in the selected language
            const selectedContent = document.querySelector(`.content[data-lang="${selectedLang}"]`);
            if (selectedContent) {
                selectedContent.style.display = 'block';
            }
            // Set the current language in localStorage

          console.log(selectedLang)
          console.log(localStorage.getItem("Language"))
          localStorage.setItem("Language", selectedLang)
          console.log(localStorage.getItem("Language"))
          
        });
    }); 
    // Load the "correct" language
 document.addEventListener("DOMContentLoaded", ()=> {
        const sprog = localStorage.getItem("Language") || "en";
        console.log(sprog)
        contentDivs.forEach(div => {
                    div.style.display = 'none';
                });
        
        const selectedContent = document.querySelector(`.content[data-lang="${sprog}"]`);
            if (selectedContent) {
                selectedContent.style.display = 'block';
            }
        
    })
    
    