window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    e.returnValue = '';
})