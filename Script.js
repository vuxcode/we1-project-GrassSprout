
    const dropdowncontent = document.querySelectorAll('.dropdowncontent a');
    const contentDivs = document.querySelectorAll('.content');
    
   

    dropdowncontent.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const selectedLang = this.getAttribute('data-lang');
     
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
          localStorage.setItem("Language", selectedLang)
        });
    }); 
    // Check localStorage to see if the language has already been selected
const sprog = localStorage.getItem("Language")
    // Load the "correct" language
  
    
    