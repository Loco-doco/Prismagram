function classify(_class, _star, _goldbar,donatedStar, donatedGoldbar){
    var _class = [["E"],["D"],["C"],["B"],["A"]];
    var _star = [[0],[500],[10000],[30000],[50000]];
    var _goldbar = [[0],[1000],[0],[2000],[0]];

    var donatedStar = Number(29000);
    var donatedGoldbar = Number(1001);

    var starcut = []
    _star.map(function(e){
        starcut.push(donatedStar >= e[0])
    })
    
    var goldbarcut = []
    _goldbar.map(function(e){
        goldbarcut.push(donatedGoldbar >= e[0])
    })

    var result = []
    for( i=0 ; i<starcut.length ; i++){
        if (starcut[i] == true && goldbarcut[i] == true){
            result.push(i)
        } else {
            result.push(i*-1)
        }
    }

    console.log(starcut)
    console.log(goldbarcut)
    console.log(result)

    _idx = Math.max.apply(null,result)
    return _class[_idx][0]
}

console.log(classify())
