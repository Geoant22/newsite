function showContent(contentId) {
  // Hide all content sections
  var allContent = document.querySelectorAll('.content');
  allContent.forEach(function(content) {
      content.style.display = 'none';
  });

  // Show the selected content section
  var selectedContent = document.getElementById(contentId + 'Content');
  selectedContent.style.display = 'block';
}



function toggleSubMenu() {
  var submenuLinks = document.getElementById('submenuLinks');
  var isHidden = submenuLinks.classList.contains('hidden');

  // Εάν το submenu είναι κρυφό, εμφανίστε το
  if (isHidden) {
      submenuLinks.classList.remove('hidden');
  } else {
    // Αλλιώς, κρύψτε όλα τα submenus
    var allSubmenus = document.querySelectorAll('.submenu1');
    allSubmenus.forEach(function(submenu) {
        submenu.classList.add('hidden');
    });
    
}

}


