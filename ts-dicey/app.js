var newButton = document.getElementById("new-button");
var rollButton = document.getElementById("roll-button");
var totalButton = document.getElementById("total-button");
var diceContainer = document.getElementById("dice-container");
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.div = document.createElement("div");
        this.div.className = "die";
        diceContainer.append(this.div);
        this.value = this.roll();
        this.div.addEventListener("click", function () { return _this.roll(); });
        rollButton.addEventListener("click", function () { return _this.roll(); });
        // rolling all could also be achieved by pushing each class when constructed into a global array and looping through on click to run roll()
        this.div.addEventListener("dblclick", function () { return _this.div.remove(); });
        // if you made a global array, you would need to remove the die from the array as well
    }
    Die.prototype.roll = function () {
        var random = Math.floor(Math.random() * 6) + 1;
        this.value = random;
        this.getChar();
        this.div.innerText = this.char;
    };
    Die.prototype.getChar = function () {
        if (this.value === 1) {
            this.char = "⚀";
        }
        else if (this.value === 2) {
            this.char = "⚁";
        }
        else if (this.value === 3) {
            this.char = "⚂";
        }
        else if (this.value === 4) {
            this.char = "⚃";
        }
        else if (this.value === 5) {
            this.char = "⚄";
        }
        else if (this.value === 6) {
            this.char = "⚅";
        }
    };
    return Die;
}());
newButton.addEventListener("click", function () {
    new Die();
});
totalButton.addEventListener("click", function () {
    var dice = document.getElementsByClassName("die");
    var total = 0;
    // switched to textContent instead of innerText because Element did not have access to inner
    for (var i = 0; i < dice.length; i++) {
        if (dice[i].textContent === "⚀") {
            total += 1;
        }
        else if (dice[i].textContent === "⚁") {
            total += 2;
        }
        else if (dice[i].textContent === "⚂") {
            total += 3;
        }
        else if (dice[i].textContent === "⚃") {
            total += 4;
        }
        else if (dice[i].textContent === "⚄") {
            total += 5;
        }
        else if (dice[i].textContent === "⚅") {
            total += 6;
        }
    }
    alert("" + total);
    // if using numbers instead of die faces, you would need to convert innertext to intergers using parseInt
    // if wanting to use this.value to achieve the sum, you would need to have pushed dice into a global array upon creation and loop through to add the value to the total
});
