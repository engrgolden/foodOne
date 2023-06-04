Array.from(document.querySelectorAll('[data-testid="cellInnerDiv"]')).map(e=>{
	if(e.textContent
        .toLowerCase()
    .includes('new burna out now')){e.remove()}})