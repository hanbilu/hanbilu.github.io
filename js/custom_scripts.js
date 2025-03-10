function showEmail(linkElem) {
    // If the email is already shown, do nothing and return
    if (linkElem.querySelector('.shown-email')) return;

    var user = linkElem.getAttribute('data-user');
    var domain = linkElem.getAttribute('data-domain');
    var tld = linkElem.getAttribute('data-tld');
    var email = user + "@" + domain + "." + tld;

    // Create a new paragraph element with the email
    var emailElem = document.createElement('p');
    emailElem.textContent = email;
    emailElem.classList.add('shown-email'); // Add a class to identify the element
    emailElem.addEventListener('click', function(event) {
        navigateToEmail(linkElem);
        event.preventDefault();
        event.stopPropagation();
    });

    // Append this new element after the existing <p> element
    linkElem.appendChild(emailElem);
}


function navigateToEmail(linkElem) {
    var user = linkElem.getAttribute('data-user');
    var domain = linkElem.getAttribute('data-domain');
    var tld = linkElem.getAttribute('data-tld');
    var email = user + "@" + domain + "." + tld;

    window.location.href = "mailto:" + email;
}


document.querySelector("#emailLink").addEventListener('click', function(event) {
    // Check if the clicked element is a paragraph
    if (event.target.tagName === 'P') {
        event.preventDefault();
        showEmail(this);
        event.stopPropagation();
    }
    // Check if the clicked element is an icon
    else if (event.target.tagName === 'I') {
        navigateToEmail(this);
        event.preventDefault();
        event.stopPropagation();
    }
});


window.onload = initializeLanguageToggle;



