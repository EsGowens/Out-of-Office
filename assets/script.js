let graphic
let font

function preload () {
    font = loadFont("assets/spacegrotesk-medium.otf")
}

function setup () {
    createCanvas(1200, 600)
    
    graphic = createGraphics(1200, 600)

    graphic.fill("#ffffff")
    graphic.textFont(font)
    graphic.textSize(500)
    graphic.textAlign(CENTER, CENTER)
    graphic.text("ooo", 600, 260)
}

function draw () {
    background("#000000")

    const tileSize = 50

    for (let y = 0; y < 12; y = y +1) {

        let position = winMouseX / windowWidth
        position = easeInOutCubic(position)

        const sx = 0
        const sy = y * tileSize * position
        const sw = 1200
        const sh = tileSize * position + (600 - tileSize) * (1 - position)
        
        const dx = 0
        const dy = y * tileSize
        const dw = 1200
        const dh = tileSize


        image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
    }


    
}