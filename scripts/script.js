//const API = "https://localhost:7178";
const API = "https://sanwalatwork-001-site1.ktempurl.com";

async function fetchPresets() {
    try {
        const response = await fetch(API + '/api/presets'); // Replace with your API URL
        const items = await response.json(); // Parse the JSON respons
        appendPresetsToDOM(items);
        attachToggleBeforeAfterEvent();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
function appendPresetsToDOM(items) {
    const container = document.getElementById('grid-container');

    // Loop through the items and append them
    items.forEach(item => {

        // Create a new div element
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.setAttribute('data-before', API + item.beforImageUrl);
        gridItem.setAttribute('data-after', API + item.afterImageUrl);

        const fireHtml=item.popular?`<div class="fire">
<img src="images/fireGlo.png" alt="" />
<span><p>Most Popular</p></span>
</div>`:'';

        // Set inner HTML with dynamic content
        gridItem.innerHTML = `
<img src="${API + item.afterImageUrl}" alt="Preset 1" />
${fireHtml}
<div class="circle">
<img src="images/beforeandafter.png" alt="" />
</div>
<div class="overlay"><a target="_blank" href="${API + item.presetUrl}" download>DOWNLOAD</a></div>
`;

        // Append the new grid item to the container
        container.appendChild(gridItem);
    });
}

function attachToggleBeforeAfterEvent(){
    document.querySelectorAll(".circle").forEach((circle) => {
        circle.addEventListener("click", function () {
          const gridItem = this.closest(".grid-item");
          const img = gridItem.querySelector("img");
          const currentSrc = img.getAttribute("src");
          const beforeSrc = gridItem.getAttribute("data-before");
          const afterSrc = gridItem.getAttribute("data-after");
    
          const cleanBeforeSrc = beforeSrc.split("?")[0];
          const cleanAfterSrc = afterSrc.split("?")[0];
    
          if (currentSrc.includes(cleanAfterSrc)) {
            img.setAttribute(
              "src",
              cleanBeforeSrc
            );
          } else {
            img.setAttribute(
              "src",
              cleanAfterSrc
            );
          }
        });
      });
}


async function fetchWallpapers() {
    try {
        const response = await fetch(API + '/api/wallpapers'); // Replace with your API URL
        const items = await response.json(); // Parse the JSON respons
        appendWallpapersDOM(items);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function appendWallpapersDOM(items) {
    const container = document.getElementById('grid-container');

    // Loop through the items and append them
    items.forEach(item => {

        // Create a new div element for the grid item
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        // Set inner HTML with dynamic content
        
        gridItem.innerHTML = `
          <img src="${API + item.thumbnailImageUrl}" alt="Image" />
          <div class="download-btn">
            <a target="_blank" href="${API + item.wallpaperImageUrl}" download>DOWNLOAD</a>
          </div>
        `;
    
        // Append the new grid item to the container
        container.appendChild(gridItem);
    });
}