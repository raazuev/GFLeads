function loadModule(moduleId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(moduleId).innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading module:', error);
        });
}

loadModule('header', 'module/header.html');
loadModule('main', 'module/main.html');
loadModule('publish', 'module/publish.html');
loadModule('program', 'module/program.html');
loadModule('key', 'module/key.html');
loadModule('service', 'module/service.html');
loadModule('partner', 'module/partner.html');