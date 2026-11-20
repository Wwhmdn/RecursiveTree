const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.translate(400,600)

function recursiveTree(width){

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(0, -width);
ctx.stroke();

if (width<5)
    return 
else  {
    ctx.translate(0, -width)
    ctx.save()
    ctx.rotate(30 * Math.PI / 180)
    recursiveTree(width * 0.7)
    ctx.restore()

    ctx.save()
    ctx.rotate(-30 * Math.PI / 180)
    recursiveTree(width * 0.7)
    ctx.restore()
   
}
     
}

recursiveTree(150)

// Avancer au bout du trait que tu viens de tracer : ctx.translate(0, -longueur);
// Tourner le stylo : ctx.rotate(angle); (petit piège JS : rotate attend des radians, pas des degrés. Pour 30°, écris 30 * Math.PI / 180 ou -30 * Math.PI / 180).

//Sauvegarder et revenir au croisement : ctx.save(); avant de tourner pour la branche de droite, 
// et ctx.restore(); juste après l'appel récursif pour revenir au point de départ avant de faire la gauche.