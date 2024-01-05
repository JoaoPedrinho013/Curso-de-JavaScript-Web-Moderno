const colors = {
    p: 'green',
    div: 'red',
    span: 'lightgreen',
    section: 'lightgray',
    ul: 'silver',
    ol: 'gold',
    header: 'yellow',
    nav: 'blue',
    main: 'lightblue',
    footer: 'acquamarine',
    form: 'pink',
    body: 'gray',
    padrao: 'black',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLocaleLowerCase()

    elemento.style.bordeColor = colors.get(tagName)

    if (!elemento.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})