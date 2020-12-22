var signo = prompt('¿Cuál es tu signo?')


switch (signo) {
    case 'Virgo' : console.log('Es posible ser demasiado honesta. En el pasado has visto cómo la determinación por decir toda la verdad puede herir sentimientos.');
    break;

    case 'capricornio' : console.log('Ha llegado el momento de superar algunos viejos temores. Quizás hayas tenido alguna clase de fobia en el pasado. Quizás tengas miedo de volar.');
    break;

    case 'tauro' : console.log('Hoy las situaciones en la oficina pueden tomar un cauce inusual.');
    break;

    case 'piscis' : console.log('Hoy realiza un esfuerzo para comunicarles tus sueños a los demás.');
    break;

    case 'cancer' : console.log('La posición de los planetas de hoy podría poner fin a un periodo un poco gris en tu vida amorosa y creativa?');
    break;

    case 'geminis' : console.log('La presión del día de hoy te inspirará a reevaluar tu programa.');
    break;

    case 'acuario' : console.log('Hoy te podrías concentrar en aquellos pequeños detalles. Quizás organices tu sistema de archivo por tema o nombre.');
    break;

    case 'aries' : console.log('Si piensas formar una nueva sociedad de negocios, hoy es el día indicado para dar los primeros pasos en ese sentido. ');
    break;

    case 'leo' : console.log('Últimamente has estado dedicando buena parte de tu tiempo y energía a otros. ');
    break;

    case 'libra' : console.log('A pesar de que te gusta tener las cosas planeadas y organizadas?');
    break;

    case 'escorpio' : console.log('En cierto momento, la popularidad se convierte en un obstáculo en vez de una bendición');
    break;

    case 'sagitario' : console.log('Hoy podrías decidir un cambio de rutina. Reevaluarás tus actividades del día, la carga de clientes o el régimen de gimnasia.');
    break;

    default : 'Ingrese un signo válido.'
}