//navbar javascript
const bar = document.querySelector('#bar');
const navbar = document.querySelector('#navbar')
const times = document.querySelector('#times')
if(bar){
   bar.addEventListener("click",()=>{
    navbar.classList.add('active')
   }) 
} if(times){
times.addEventListener("click",()=>{
navbar.classList.remove('active')
})
}


//form javascript
document.addEventListener('DOMContentLoaded', function() {
    const productSelect = document.getElementById('product');
    const subproductSelect = document.getElementById('subproduct');
    
    
    
    // Get all optgroups inside the sub-product select list
    const allSubproductGroups = subproductSelect.querySelectorAll('optgroup');
    const firstOption = subproductSelect.querySelector('option[disabled]');

    // --- INITIAL SETUP ---
    // 1. Initially hide all sub-product groups for a clean start.
    allSubproductGroups.forEach(group => {
        group.style.display = 'none';
    });
    
    // 2. Disable the sub-product select until a main product is chosen.
    subproductSelect.disabled = true;

    // --- EVENT LISTENER ---
    productSelect.addEventListener('change', function() {
        // Get the value of the currently selected main product (e.g., 'ProductA')
        const selectedProductValue = this.value; 
        
        // 1. Reset and hide all groups for a fresh selection
        subproductSelect.selectedIndex = 0; 
        subproductSelect.disabled = true;

        allSubproductGroups.forEach(group => {
            group.style.display = 'none';
        });

        let foundMatch = false;

        // 2. Iterate through all optgroups to find the one that matches
        allSubproductGroups.forEach(group => {
            // Get the label of the optgroup (e.g., 'Product A Options')
            const groupLabel = group.label;
            
            // Check if the selected product value (e.g., 'ProductA') is part of the label string
            // This works because your HTML uses "Product A Options" and the value is "ProductA"
            if (groupLabel && groupLabel.includes(selectedProductValue.replace('Product', 'Product '))) {
                
                // 3. Show the matching group
                group.style.display = 'block'; 
                subproductSelect.disabled = false; // Enable the sub-product list
                foundMatch = true;
            }
        });

        // If no matching sub-product group was found (like if 'ProductC' is selected),
        // we can optionally keep the subproduct list disabled and show the initial message.
        if (!foundMatch) {
            // Ensure the initial option is selected if no group is shown
            firstOption.selected = true; 
        }
    });
});
//footer
