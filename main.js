const container = document.querySelector('.users')

async function getProducts() {
    try {
        let res = await fetch('https://dummyjson.com/products')
        let data = await res.json();
        
        data.products.forEach(product => {
            let item = document.createElement('div')
            item.classList.add('item')
            
            let title = document.createElement('h2')
            let description = document.createElement('p')
            let price = document.createElement('p')
            let thumbnail = document.createElement('img')
            
            title.textContent = product.title
            description.textContent = product.description
            price.textContent = `Price: ${product.price}`
            thumbnail.src = product.thumbnail
            thumbnail.alt = product.title
            
            item.append(title, description, price, thumbnail)
            container.append(item)
        });
    } catch (error) {
        console.log('Ошибка при получении данных:', error)
    }
}

window.addEventListener('DOMContentLoaded', () => getProducts())
