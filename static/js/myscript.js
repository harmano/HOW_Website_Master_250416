// Contact form

   const dt = new DataTransfer();
   const fileInput = document.getElementById("fileUpload");
   const fileList = document.getElementById("fileList");
   const fileCount = document.getElementById("fileCount");
   const fileError = document.getElementById("fileUploadError");
   const form = document.querySelector("form"); // adjust if needed
 
   fileInput.addEventListener("change", function () {
     for (const file of fileInput.files) {
       if (!Array.from(dt.files).some(f => f.name === file.name && f.size === file.size)) {
         dt.items.add(file);
       }
     }
 
     fileInput.files = dt.files;
     updateFileDisplay();
   });
 
   function updateFileDisplay() {
     fileList.innerHTML = "";
 
     if (dt.files.length === 0) {
       fileCount.textContent = "No files chosen";
       return;
     }
 
     fileCount.textContent = `${dt.files.length} file(s) selected`;
     fileError.style.display = "none";
 
     Array.from(dt.files).forEach((file, index) => {
       const fileTag = document.createElement("div");
       fileTag.className = "file-tag";
 
       const fileName = document.createElement("span");
       fileName.textContent = file.name;
 
       const removeBtn = document.createElement("span");
       removeBtn.textContent = "×";
       removeBtn.className = "remove-btn";
       removeBtn.onclick = () => {
         dt.items.remove(index);
         fileInput.files = dt.files;
         updateFileDisplay();
       };
 
       fileTag.appendChild(fileName);
       fileTag.appendChild(removeBtn);
       fileList.appendChild(fileTag);
     });
   }
 
   // Form submission file injection (for Formspree-style setups)
   form.addEventListener("submit", function (e) {
     document.querySelectorAll(".cloned-upload").forEach(el => el.remove());
 
     Array.from(dt.files).forEach(file => {
       const clonedInput = document.createElement("input");
       clonedInput.type = "file";
       clonedInput.name = "attachment"; // adjust if needed
       clonedInput.className = "cloned-upload";
       clonedInput.style.display = "none";
 
       const dt2 = new DataTransfer();
       dt2.items.add(file);
       clonedInput.files = dt2.files;
 
       form.appendChild(clonedInput);
     });
   })
// Contact form
  <!-- Youtube video form-->

   function playVideo() {
     document.getElementById("video-cover").style.display = "none";
     document.getElementById("youtube-video").style.display = "block";
   }

   $(document).ready(function(){
   $('.sidenav').sidenav();
   });
   
   document.addEventListener('DOMContentLoaded', function() {
       var elems = document.querySelectorAll('.collapsible');
       var instances = M.Collapsible.init(elems, options);
     });
   
     // Or with jQuery
   
     $(document).ready(function(){
      $('ul.tabs').tabs();
    });
    $(document).ready(function(){
      $('.collapsible').collapsible({
        accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      });
    });
   
     $(document).ready(function() {
       $('input#input_text, textarea#textarea2').characterCounter();
     });
     var a = 0;
   $(window).scroll(function() {
   
     var oTop = $('#counter').offset().top - window.innerHeight;
     if (a == 0 && $(window).scrollTop() > oTop) {
       $('.counter-value').each(function() {
         var $this = $(this),
           countTo = $this.attr('data-count');
         $({
           countNum: $this.text()
         }).animate({
             countNum: countTo
           },
   
           {
   
             duration: 2000,
             easing: 'swing',
             step: function() {
               $this.text(Math.floor(this.countNum));
             },
             complete: function() {
               $this.text(this.countNum);
               //alert('finished');
             }
   
           });
       });
       a = 1;
     }
   
   });

// Property Type Dropdown
function selectOption(value) {
 document.getElementById("dropdownInput").value = value;
 document.getElementById("dropdownOptions").style.display = "none";
}

document.getElementById("dropdownInput").addEventListener("click", function () {
 const options = document.getElementById("dropdownOptions");
 options.style.display = options.style.display === "block" ? "none" : "block";
});

// How Did You Hear Dropdown
function selectOption2(value) {
 document.getElementById("dropdownInput2").value = value;
 document.getElementById("dropdownOptions2").style.display = "none";
}

document.getElementById("dropdownInput2").addEventListener("click", function () {
 const options = document.getElementById("dropdownOptions2");
 options.style.display = options.style.display === "block" ? "none" : "block";
});

// Close any dropdowns when clicking outside
document.addEventListener("click", function (event) {
 if (!event.target.closest(".input-field2")) {
   const dropdown1 = document.getElementById("dropdownOptions");
   const dropdown2 = document.getElementById("dropdownOptions2");
   if (dropdown1) dropdown1.style.display = "none";
   if (dropdown2) dropdown2.style.display = "none";
 }
});

   document.addEventListener("DOMContentLoaded", function () {
   var dropdownInput = document.getElementById("dropdownInput");
   var dropdownOptions = document.getElementById("dropdownOptions");
   
   dropdownInput.addEventListener("click", function (event) {
     dropdownOptions.style.display = "block";
     dropdownOptions.style.zIndex = "9999"; // Ensure dropdown stays above everything
     event.stopPropagation(); // Prevents closing when clicking inside
   });
   
   dropdownOptions.querySelectorAll("div").forEach(function (option) {
     option.addEventListener("click", function () {
       dropdownInput.value = this.textContent;
       dropdownInput.style.color = "black"; // Change text color when selected
       dropdownOptions.style.display = "none";
     });
   });
   
   document.addEventListener("click", function (event) {
     if (!dropdownInput.contains(event.target) && !dropdownOptions.contains(event.target)) {
       dropdownOptions.style.display = "none";
     }
   });
   });
   
   let currentSlideIndex = 0;
   let activeSlides = [];
   
   function openCustomCarousel(id) {
     const modal = document.getElementById(`customCarouselModal${id}`);
     if (!modal) return;
   
     activeSlides = modal.querySelectorAll(".custom-slide");
     currentSlideIndex = 0;
     showSlide(currentSlideIndex);
     modal.style.display = "flex";
     document.body.style.overflow = "hidden";
   
     modal.querySelector(".custom-prev").onclick = () => changeSlide(-1);
     modal.querySelector(".custom-next").onclick = () => changeSlide(1);
     modal.querySelector(".custom-close").onclick = () => closeCustomCarousel(id);
   
     modal.onclick = (e) => {
       if (e.target === modal) closeCustomCarousel(id);
     };
   }
   
   function closeCustomCarousel(id) {
     const modal = document.getElementById(`customCarouselModal${id}`);
     modal.style.display = "none";
     document.body.style.overflow = "auto";
   }
   
   function changeSlide(n) {
     currentSlideIndex += n;
     if (currentSlideIndex >= activeSlides.length) currentSlideIndex = 0;
     if (currentSlideIndex < 0) currentSlideIndex = activeSlides.length - 1;
     showSlide(currentSlideIndex);
   }
   
   function showSlide(n) {
     activeSlides.forEach(slide => (slide.style.display = "none"));
     activeSlides[n].style.display = "block";
   }
   
   document.addEventListener("DOMContentLoaded", function () {
   const track = document.querySelector(".custom-carousel-track");
   const items = track.innerHTML; // Get original items
   track.innerHTML += items; // Duplicate them for smooth looping
   });
   
   
   

   document.addEventListener("DOMContentLoaded", function () {
     const tabs = document.querySelectorAll(".tab-link");
     const wrappers = document.querySelectorAll(".project-wrapper");
   
     if (!tabs.length || !wrappers.length) {
       console.error("Tabs or project wrappers not found.");
       return;
     }
   
     tabs.forEach(tab => {
       tab.addEventListener("click", function () {
         tabs.forEach(t => t.classList.remove("active"));
         this.classList.add("active");
   
         const filter = this.getAttribute("data-filter");
   
         wrappers.forEach(wrapper => {
           const workItem = wrapper.querySelector(".work-item");
           const tags = workItem?.getAttribute("data-tags")?.split(" ") || [];
   
           if (filter === "all" || tags.includes(filter)) {
             wrapper.style.display = "block";
           } else {
             wrapper.style.display = "none";
           }
         });
       });
     });
   
     // Trigger "All" filter by default
     const defaultTab = document.querySelector(".tab-link[data-filter='all']");
     if (defaultTab) defaultTab.click();
   });

   document.addEventListener("DOMContentLoaded", function () {
     const allProjects = Array.from(document.querySelectorAll(".project-wrapper"));
     const viewAllBtn = document.querySelector(".view-all");
     const projectsPerClick = 12;
     let currentVisible = 0;
     let activeFilter = "all";
   
     function getFilteredProjects() {
       return allProjects.filter(project => {
         if (activeFilter === "all") return true;
         const tags = project.querySelector(".work-item").getAttribute("data-tags");
         return tags && tags.split(" ").includes(activeFilter);
       });
     }
   
     function showProjects(reset = false) {
   const filtered = getFilteredProjects();
   
   if (reset) {
     currentVisible = 0;
     allProjects.forEach(p => p.style.display = "none");
   }
   
   const nextVisible = currentVisible + projectsPerClick;
   
   for (let i = currentVisible; i < nextVisible && i < filtered.length; i++) {
     filtered[i].style.display = "block";
   }
   
   currentVisible = nextVisible;
   
   // Force-check against filtered length (not total)
   if (currentVisible >= filtered.length) {
     viewAllBtn.style.display = "none";
   } else {
     viewAllBtn.style.display = "block";
   }
   }
   
     // On initial load
     showProjects(true);
   
     // When clicking "LOAD MORE"
     viewAllBtn.addEventListener("click", function (e) {
       e.preventDefault();
       showProjects();
     });
   
     // When clicking a filter
     document.querySelectorAll(".tab-link").forEach(tab => {
       tab.addEventListener("click", function () {
         document.querySelectorAll(".tab-link").forEach(t => t.classList.remove("active"));
         this.classList.add("active");
         activeFilter = this.getAttribute("data-filter");
         showProjects(true);
       });
     });
   });

   document.addEventListener("DOMContentLoaded", function () {
     const dropdownTriggers = document.querySelectorAll(".dropdown-toggle");
    
     dropdownTriggers.forEach(trigger => {
       trigger.addEventListener("click", function (e) {
         e.preventDefault();
         const group = this.getAttribute("data-group");
         const items = document.querySelectorAll(`.${group}`);
         items.forEach(item => item.classList.toggle("hidden"));
       });
     });
    
     // Initialize sidenav
     const elems = document.querySelectorAll(".sidenav");
     M.Sidenav.init(elems);
   });
    

   document.querySelectorAll('.tab-item-unique').forEach(tab => {
     tab.addEventListener('click', function () {
       document.querySelectorAll('.tab-item-unique').forEach(t => t.classList.remove('active-tab-unique'));
       this.classList.add('active-tab-unique');
     });
   });
    

     <!-- Error Contact form-->
     <script>
      document.getElementById("fileUpload").addEventListener("change", function () {
        const uploadPrompt = document.getElementById("uploadPrompt");
        const fileError = document.getElementById("fileUploadError");
    
        if (this.files.length > 0) {
          uploadPrompt.style.display = "none";
          fileError.style.display = "none"; // Hide error immediately
        } else {
          uploadPrompt.style.display = "inline";
        }
      });
    
      function validateForm(event) {
        const fileInput = document.getElementById("fileUpload");
        const fileError = document.getElementById("fileUploadError");
    
        if (fileInput.files.length === 0) {
          fileError.style.display = "inline";
          event.preventDefault(); // stop form from submitting
          return false;
        } else {
          fileError.style.display = "none";
          return true;
        }
      }

      document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("formSource").value = window.location.pathname;
      });

        document.addEventListener("DOMContentLoaded", function () {
 const budgetInput = document.getElementById("budgetInput");
 const dollarSign = document.getElementById("dollarSign");

 budgetInput.addEventListener("input", function () {
   // Remove all non-digit characters
   let rawValue = this.value.replace(/[^0-9]/g, '');

   if (rawValue.length > 0) {
     dollarSign.style.display = "inline";
     // Format number with commas
     this.value = Number(rawValue).toLocaleString('en-US');
   } else {
     dollarSign.style.display = "none";
     this.value = '';
   }
 });
});
     document.addEventListener("DOMContentLoaded", function () {
       const phoneInput = document.querySelector('input[name="contact_number"]');
       
       phoneInput.addEventListener("input", function () {
         this.value = this.value.replace(/[^0-9]/g, ""); // Remove all non-numeric characters
       });
     });