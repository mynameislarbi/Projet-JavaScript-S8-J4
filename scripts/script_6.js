/// Script 6 ///

console.log("----------");
{prompt("lancement du script6 : appuie sur entrée pour continuer");

function arn(arn) {
    console.log(arn);
    var a = arn;
    let nbr = a.length;

    table = [];

    for(var count = 0; count <= nbr; count++){
        table.push(a[count]);
    };

    let z = 0;
    let y = 3;
    let codeG = [];
    while(z < nbr) {
        let tempTab = table.slice(z,y);
        tempString = tempTab.join("");
        // console.log(tempString); //pour afficher les 3 lettres
        var codons = "";

        if (tempString === "UCU" || tempString ==="UCC" || tempString ==="UCA" || tempString ==="UCG" || tempString ==="AGU" || tempString ==="AGC") {
            codons = "Serine"
        } else if (tempString === "CCU" || tempString ==="CCC" || tempString ==="CCA" || tempString ==="CCG") {
            codons = "Proline"
        } else if (tempString === "UUA" || tempString ==="UUG") {
            codons = "Leucine"
        } else if (tempString === "UUU" || tempString ==="UUC") {
            codons = "Phénylalanine"
        } else if (tempString === "CGU" || tempString ==="CGC" || tempString ==="GGA" || tempString ==="CGG" || tempString ==="AGA" || tempString ==="AGG") {
            codons = "Arginine"
        } else if (tempString === "UAU" || tempString ==="UAC") { 
            codons = "Tyrosine"
        };

        codeG.push(codons);
        // console.log(codons); //pour afficher le codons

        z = z+3;
        y = y + 3;

      } 

    console.log(codeG.join("-"));


};

arn("CCUCGCCGGUACUUCUCG");
    console.log("----------");
arn("CCGUCGUUGCGCUACAGC");

}