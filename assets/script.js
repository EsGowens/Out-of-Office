let graphic
let font

function preload () {
    font = loadFont("spacegrotesk-medium.otf")
}

function setup () {
    createCanvas(1200, 600)
    
    graphic = createGraphics(1200, 600)

    graphic.fill("#ffffff")
    graphic.textFont(font)
    graphic.textSize(500)
    graphic.textAlign(CENTER, CENTER)
    graphic.text("oas", 600, 260)
}

function draw () {
    background("#000000")


    image(graphic, 0, 0, 1200, 100, 0, 0, 1200, 600)
}