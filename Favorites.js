// classe que vai conter a lógica dos dados 
// (como os dados serão estruturados)
export class Favorites {
    constructor(root) {
    this.root = document.querySelector(root)
    this.load()
    }

    load() {
        this.entries = [
            {
                login: 'maykbrito',
                name: "Mayk Brito",
                public_repos: '76',
                followers: '120000'
            }, 
            {
                login: 'diego3g',
                name: "Diego Fernandes",
                public_repos: '48',
                followers: '22503'
            }
        ]
    }
}

// classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.update()
    }

    update() {
        this.removeAllTr()
        
        this.entries.forEach( user => {
            const row = this.createRow()
            console.log(row)
        })
    }

    createRow() {
        const tr = document.createElement('tr')
        
        tr.innerHTML = `
        <td class="user">
            <img src="https://github.com/maykbrito.png" alt="Avatar de maykbrito">
            <a href="https://github.com/maykbrito" target="_blank">
                <p>Mayk Brito</p>
                <span>maykbrito</span>
            </a>
        </td>
        <td class="repositories">
            76
        </td>
        <td class="followers">
            9589
        </td>
        <td>
            <button class="remove">&times;</button>
        </td>
    `
        return tr
    }

    removeAllTr() {
        const tbody = this.root.querySelector('table tbody')

        tbody.querySelectorAll('tr')
            .forEach((tr) => {
                tr.remove()
        })
    }
}