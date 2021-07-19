let newButton: HTMLElement | null = document.getElementById(`new-button`)
let rollButton: HTMLElement | null = document.getElementById(`roll-button`)
let totalButton: HTMLElement | null = document.getElementById(`total-button`)
let diceContainer: HTMLElement | null = document.getElementById(`dice-container`)

class Die {
    div: HTMLDivElement;
    value: any;
    char!: string;

    constructor() {
        this.div = document.createElement(`div`)
        this.div.className = `die`
        if (diceContainer != null) {
            diceContainer.append(this.div)
        }
        this.value = this.roll()

        this.div.addEventListener(`click`, () => this.roll())
        if (rollButton != null) {
            rollButton.addEventListener(`click`, () => this.roll())
        }
        // rolling all could also be achieved by pushing each class when constructed into a global array and looping through on click to run roll()
        this.div.addEventListener(`dblclick`, () => this.div.remove())
        // if you made a global array, you would need to remove the die from the array as well
    }

    roll() {
        let random = Math.floor(Math.random() * 6) + 1
        this.value = random
        this.getChar()
        this.div.innerText = this.char
    }

    getChar() {
        if (this.value === 1) {
            this.char = "⚀"
        } else if (this.value === 2) {
            this.char = "⚁"
        } else if (this.value === 3) {
            this.char = "⚂"
        } else if (this.value === 4) {
            this.char = "⚃"
        } else if (this.value === 5) {
            this.char = "⚄"
        } else if (this.value === 6) {
            this.char = "⚅"
        }
    }
}

if (newButton != null) {
    newButton.addEventListener(`click`, function () {
        new Die()
    })
}

if (totalButton != null) {
    totalButton.addEventListener(`click`, function () {
        let dice: HTMLCollectionOf<Element> = document.getElementsByClassName(`die`)
        let total: number = 0

        // switched to textContent instead of innerText because Element did not have access to inner
        for (let i = 0; i < dice.length; i++) {
            if (dice[i].textContent === "⚀") {
                total += 1
            } else if (dice[i].textContent === "⚁") {
                total += 2
            } else if (dice[i].textContent === "⚂") {
                total += 3
            } else if (dice[i].textContent === "⚃") {
                total += 4
            } else if (dice[i].textContent === "⚄") {
                total += 5
            } else if (dice[i].textContent === "⚅") {
                total += 6
            }
        }

        alert(`${total}`)
        // if using numbers instead of die faces, you would need to convert innertext to intergers using parseInt
        // if wanting to use this.value to achieve the sum, you would need to have pushed dice into a global array upon creation and loop through to add the value to the total
    })
}