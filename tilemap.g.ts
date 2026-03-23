// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202020204050202020202020202020202020102040502020202020202020202020202020405020202020102020202020102020204050202020202020202020203020202040502010202020202020201030202010405020102020201020202020302020104050201020201020102020203020102040502020202020202020202030202020405020202020202020202020302020204050201020202020202020203020202040502020202020202020201030201020405020202020202020202020302020204050102020102020202020203020102040502020202020102020909090909090805020202020202010207070707070707060202020202020202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3,sprites.builtin.forestTiles0,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.castle.tilePath2], TileScale.Sixteen);
            case "level":
            case "level2":return tiles.createTilemap(hex`140014000b03080808080808080d0808080808080808020b0b09030808080808080808080d0808080802070b0b0909050505050505050505050505050507100b0b090905030808080808080d080808020510070b0b0909050905050505050505050505070507070b0b0909050e05030d08080808080205070507070b0b0909050905090505050505050705070507100b0b0e09050905090503080802050705100507100b0b090e0509050905010a0a04051005070507070b0b0909050905090505050505050705070510070b0b0e09050905010a0c06060c0a0405100507070b0b0909050905050505050505050505070507070b0b090905010a0f0a0c06060c0f0a0a040507070b0b0909050505050505050505050505050507070b0b09010a0a0f0a0a0a06060a0a0a0f0a0a04070b0b010a0f0a0a0a0a0c06060c0f0a0a0a0a0a040b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b`, img`
.222222222222222222.
.222222222222222222.
.22..............22.
.22.222222222222.22.
.22.2..........2.22.
.22.2.22222222.2.22.
.22.2.2......2.2.22.
.22.2.2.2222.2.2.22.
.22.2.2.2222.2.2.22.
.22.2.2......2.2.22.
.22.2.222..222.2.22.
.22.2..........2.22.
.22.22222..22222.22.
.22..............22.
.22222222..22222222.
.22222222..22222222.
....................
....................
....................
....................
`, [myTiles.tile1,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorLight0,sprites.dungeon.stairNorth,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth0,sprites.castle.tileDarkGrass1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterWest1], TileScale.Sixteen);
            case "level0":
            case "level3":return tiles.createTilemap(hex`200020000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010103040404040501010101010101010101010101010101010101010101010101010703040405060101010101010101010101010101010101010101010101010101070b0c0c06060101010101010101010101010101010101010101010101010101070b0c0c06060101010101010101010101010101010101010101010101010101070b0a0a06060101010101010101010101010101010101010101010101010101070b0a0a06060101010101010101010101010101010101010101010101010101070b0a0a0606010101010101010101010101010101010101010101010101010107080a0a0906010101010101010101010101010101010101010101010101010108020a0a02090101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
...222222.......................
...222222.......................
...22..22.......................
...22..22.......................
...22..22.......................
...22..22.......................
...22..22.......................
...22..22.......................
...22..22.......................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.stairNorth,sprites.dungeon.greenOuterWest1,sprites.dungeon.floorLight2], TileScale.Sixteen);
            case "dungeon-entrance":
            case "dungeon-entrance1":return tiles.createTilemap(hex`0f0010000e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0a0808080808080808080808090e0e070c0101120101010101010f0b0e0e070b161705050505050505070b0e0e070b050a08080808080905070b0e0e070b05070a080808090605070b0e0e070b0507130a08090b0b05070b0e0e070b0507070301040b0b05070b0e0e070b050703010101040b05070b0e0e0706050301110d11010405070b0e0e070b050505050505051715070b0e0e07020808091405140a0808100b0e0e030101120414051403010112040e0e0e0e0e0e0e0e140e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e`, img`
. . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 . . . . . . . . . 2 2 . 
. 2 2 . . . . . . . . . 2 2 . 
. 2 2 . 2 2 2 2 2 2 2 . 2 2 . 
. 2 2 . 2 2 2 2 2 2 2 . 2 2 . 
. 2 2 . 2 2 2 2 2 2 2 . 2 2 . 
. 2 2 . 2 2 2 2 2 2 2 . 2 2 . 
. 2 2 . 2 2 2 2 2 2 2 . 2 2 . 
. 2 2 . . . . . . . . . 2 2 . 
. 2 2 . . . . . . . . . 2 2 . 
. 2 2 2 2 2 . . . 2 2 2 2 2 . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 
`, [gallerytilemaps.baseTransparency16,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.floorDark0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.doorOpenNorth,sprites.castle.tileDarkGrass1,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark3,sprites.dungeon.floorDark1,sprites.dungeon.floorDark4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "invisibleWall1":
            case "tile1":return tile1;
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
