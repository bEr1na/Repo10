function myFunction(){
    var myMusic ={
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "xxx xxxx",
            title: "xx xxxxx",
            release_year: 1988,
            formats: {
                1: "qw",
                2: "we",
                3: "er"
            },
            gold: true

        }
    };
    return myMusic;
}
console.log(myFunction()[2]);
module.exports = myFunction;