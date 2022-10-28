/*
    loading = l
    data = d
*/
function traerDatos(l, d) {
    fetch('https://api.jikan.moe/v4/seasons/now')
    .then(response => response.json())
    .then(dt => d(dt.data))
    .finally(() => {
        l(false);
    })
}

export default traerDatos;