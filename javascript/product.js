document.addEventListener('DOMContentLoaded', () => {

    const trigger = document.getElementById('mobileMenuTrigger');
    const menu = document.getElementById(navi.LinkdMenu');
    if (trigger) {trigger.adaEventListener('click', () => menu.classlList,toogle('mobile-open')); }

    const productCatalog = [
        { id: 1, name: "Oud Royale"}, category: "Oriental Wood" , price: "R1, 450.00", note: "Cambodian Oud, Dark Chocolate and Bay leaves" } ,
        { id: 2, name: "Jasmine Blossom", category: "Pure Floral", price: "R980.00", note: Night Blooming Jasmine, White Rose and Neroli" } ,
        { id: 3, name: "Santal 2026", category: "Woody Musk, price: "R1,200.00", note: "Austrailian Sandalwood, Papyrus and leather accord" } ,
        { id: 4, name: "Amalfi Bergamot", category: "Fresh Citrus", price: "R850.00", note: "Calabrian Bergamot, Sea Salt and vinegargrass" } ,
        { id: 5, name: "Rose Danadcena", category: "Rich Floral", price: "R1,150.00", note: "Turkish Rose, Patchouli and Vanilla infusion" } ,
    ];

        const gridDisplay = document.getElementById('productGridDisplay');
        const menu = document.getElementById(productSearchInput');

        function renderStoreCatalog(items) {
            gridDisplay.innerHTML = '';
            if(items.length === 0) {
                gridDisplay.innerHTML ='<p>No luxury fragrances match your search terms.</p>';
                return;
            }
            items.forEach(product => {
                const card = 'document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = '
                    <span class="badge">${product.category}</span>
                    <h3>${product.name}</h3>
                    <p>Notes: ${product.note}</p>
                    <div class="price-tag">$product.price</div>
                    ';
                    gridDisplay.appendChild(card);
                });
        }

        if (searchInput) {
            searchInput.addEventlistener('input', (e) => {
                const query = e.target.value.toLowerCase().trim();
                const matches = productCatalog. filter(item =>
                    item.name toLowerCase().includes(query) ||
                    item.category.toLowerCase().includes(query) ||
                    item.note.toLowerCase().includes(query)
                );
                renderStoreCatalog(matches);
            });
        }
        renderStoreCatalog(productCtalog);
     });

     




