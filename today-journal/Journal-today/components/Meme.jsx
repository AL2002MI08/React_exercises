import React from "react"
import memesData from '../memesData'

export function Meme() {
    function handleMemeImage(){
        let dta = memesData.data.memes
        let arrayMemes = Math.floor(Math.random()* dta.length)
        console.log(arrayMemes)
        console.log('hi')
    }
    return (
        <main>
            <form className="form">
                <div>
                    <label>Top Text
                        <input
                            type="text"
                            placeholder="Shut up"
                            className="form--input"
                        />
                    </label>
                </div>
                <div>
                    <label>Bottom Text
                    <input
                            type="text"
                            placeholder="and take my money"
                            className="form--input"
                        />
                    </label>
                </div>
                <button onClick={handleMemeImage}
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}