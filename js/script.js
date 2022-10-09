matriz = new Array;
matrizaux = new Array;
//NOMES DE ESTRELAS

//Criando a matriz 15x15
matriz = [
    ['A','X','F','P','O','X','S','A','W','R','Q','I','L','K','L'],
    ['S','H','G','M','B','V','B','C','Z','Z','V','U','T','E','A'],
    ['W','B','E','T','E','L','G','E','U','S','E','D','F','K','L'],
    ['X','V','I','H','L','N','J','K','R','I','G','E','L','R','S'],
    ['R','E','E','C','L','D','H','Y','T','U','A','O','P','Q','W'],
    ['Z','A','N','T','A','R','E','S','H','Y','T','C','K','L','Ç'],
    ['S','Q','E','W','T','K','F','F','G','H','T','A','R','I','Y'],
    ['A','A','S','I','R','I','U','S','M','N','J','N','U','U','T'],
    ['I','J','P','K','I','Q','E','G','X','U','Y','O','H','Ç','X'],
    ['P','O','L','U','X','E','R','T','O','K','H','P','Z','C','V'],
    ['H','Ç','L','I','W','T','Q','E','R','F','F','U','S','A','X'],
    ['F','A','I','L','X','T','T','Ç','Z','B','D','S','D','C','B'],
    ['A','X','F','P','O','X','S','A','W','R','Q','I','L','K','L']
];

matrizaux =[
    
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,0,1,0,0,0,1,1,1,1,1,0,0],
    [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],
    [0,1,1,1,1,1,1,1,0,0,0,1,0,0,0],
    [1,0,0,0,1,0,0,0,0,0,0,1,1,0,0],
    [1,0,1,1,1,1,1,1,0,0,0,1,0,1,0],
    [1,0,0,0,1,0,0,0,0,0,0,1,0,0,1],
    [1,1,1,1,1,0,0,0,0,0,0,1,0,0,0],
    [1,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],    
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]

document.write("<div class='container'>");
document.write("<table border='12px'>");
for(linha = 0; linha < 15; linha++){
    document.write("<tr>");
    for(coluna = 0; coluna < 15; coluna++){
        document.write("<td id='"+ linha.toString()+'-'+coluna.toString()+"'>"+matriz[linha][coluna]+"</td>");
        if(matrizaux[linha][coluna] == 1){
            document.getElementById(linha.toString()+'-'+coluna.toString()).style.background='#FFCC54';
        }
    }
    document.write("</tr>");
}
document.write("</tr>");
document.write("</div>");
