// const element = document.getElementById('root')
// const newElement = document.createElement('h1')
// newElement.className = 'heading'
// newElement.textContent = 'React Basics'
// element.appendChild(newElement)
// let page = (
//     <div>
//         <h1>Using JSX</h1>
//         <p>Paragraph</p>
//     </div>
// )
// console.log(page)
// ReactDOM.render(page, document.getElementById('root'))

let element = (
    <nav>
    <h1 className ="website">Alexa's Cafe</h1>
    <ul>
    <li>Pricing</li>
    <li>About</li>
    <li>Contact</li>
    </ul>
    </nav>
)
ReactDOM.render(element, document.getElementById('root'))