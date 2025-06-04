// Conversacion general del usuario
// --------------------------------

const prompts = [

  [ 
    "tu nombre es","tu nombre","como es tu nombre","como te llamas",
    "cual es tu nombre","quien eres","quien sos"
  ],                                                                  // [1]
  [
    "hola", "que tal", "buenas noches", "buenas tardes"
  ],                                                                  // [2]
  [
    "como estás","como estas","como esta","como va","como vas"
  ],                                                                  // [3]
  [
    "que edad tenes","edad","cuando naciste", "sos vieja"
  ],                                                                  // [4]
  ["que estas haciendo", "que sapa","que pasa"],         // [5]
  [
    "quien eres", "sos humana", "eres humana", "eres una persona",
    "eres un robot","eres un bot", "sos un bot", "sos una persona",
    "quien sos"
  ],                                                                  // [6]
  ["quien te hizo", "quien te programo","quien te creo",
   "quien te invento" 
  ],                                                                  // [7]
  ["te quiero","te aprecio","me gustas"],             	              // [8]
  ["estoy feliz", "estoy bien", "estoy alegre", "estoy maravilloso",
   "estoy fantastica", "estoy maravillosa",
   "estoy fantastico", "esta cool"],                                  // [9]
  ["estoy mal", "estoy aburrido", "estoy cansado"],                   // [10]
  ["cuenteme algo","contame algo", "contate un chiste"],              // [11]
  ["ayudame", "informame","cuentame"],                                // [12]
  ["si", "bueno", "ok", "dale", "bien"],                              // [13]
  ["chau", "nos vemos", "bye", "adios"],                              // [14]
  [""],                                                               // [15]
  ["jaja","lol","jeje","broma","jua","jiji","jojo","juju",":-)"],     // [16]
  ["que haces", "para que sirves"],                                   // [17]
  ["en qué horario responden consultas", "horario", "consulta",
  "consultas"
  ],
                             // [18]
  ["hay algún numero de telefono para llamar", "como llamo","donde llamo",
  "telefono", "dame un telefono", "que telefono tiene"
  ],
                             // [19]
  ["donde atienden", "donde estan", "lugar", "donde", "atencion", "donde esta"
  ],
                             // [20]
  ["quiero hablar con una persona", "quiero hablar", "persona real", "persona"
  ],
                             // [21]
  ["consulta por ws", "puedo consultar por whatsapp", "whatsapp", "consultar por whatsapp",
   "whatsapp","tienes ws","cual es tu ws","que whatsapp" 
  ],
                             // [22]
  ["tienen redes sociales", "red social", "facebook", "ig", "instagram", "redes sociales"
  ],
                             // [23]
  ["cuando empiezan las inscripciones", "inscripciones", "inscribirse", "cuando inscriben",
   "inscripcion"
  ],
                             // [24]
  ["escuela", "6018", "cct", "cct 6-018","6-018", "leonor lemos", "lemos","la lemos",
   "que escuela", "de que escuela","de que escuela eres","cual escuela","dge"
  ],
                             // [25]
  ["cuando empiezan las clases","comienzo de clases","inicio de clases","cuando inician las clases",
   "empiezan","empiezan las clases", "inicio clases" 
  ],
                             // [26]
  ["hasta cuando puedo inscribirme", "cuando termina la inscripcion", "termina la inscripcion",
   "fin inscripciones", "limite de inscripcion", "termina inscripcion", "fin inscripcion"
  ],
                             // [27]
  ["donde me inscribo","como me inscribo","en donde me inscribo",
   "como me inscribo","inscripcion","para inscribirme","quiero inscribirme",
   "que necesito para inscribirme"
  ],
                             // [28]
  ["necesito titulo","necesito secundario","requisitos",
   "que requisitos","que necesito","no tengo estudios",
   "primario","secundario","no tengo secundario", "no engo primaria"
  ],
                             // [29]
  ["piden certificado","certificado salud","necesito certificado de salud",
   "salud","certificado medico","necesito certificado medico","apto medico",
   "piden certificado medico","piden certificado de salud","certificado de salud",
   "constancia salud","constancia de salud","necesito apto medico"
  ],
                             // [30]

]

// ----------------------------------------------------
// Respuestas posibles para la conversación del usuario
// ----------------------------------------------------

const replies = [
  ["Soy Carolina","Me llamo Carolina","Me dicen Carolina" ],            // [1]
  ["Hola", "Que tal", "Buenas"],                                        // [2]
  ["Bien... y tu como estas?","Muy bien, y tu?","Fantastico, y tu?"],   // [3]
  ["Naci en abril del 2025","Soy recién nacida jaja"],                  // [4]
  ["No mucho","Converso contigo","Nada en realidad","Pasando el rato"], // [5]
  ["Soy una asistente virtual"],                                        // [6]
  ["Fui programada por el profesor de Programación Ricardo Ponce en JavaScript en Junio del 2025",
   "Me programo el Profesor Ponce en JavaScript en Junio del 2025"],                          // [7]
  ["Yo tambien te aprecio","Igualmente"],                               // [8]
  ["Me alegro", "Que bien","Sigue asi"],                                // [9]
  ["Por que?", "No deberias", "Intenta distraerte"],                    // [10]
  ["Algo como...?","Acerca de... que?","Sobre que tema?"],              // [11]
  ["Informo sobre el Curso de Programacion del CCT 6-018"],             // [12]
  ["Si", "Bueno", "Ok", "Dale", "Bien"],                                // [13]
  ["Chau", "Nos vemos", "Bye", "Adios"],                                // [14]
  ["Dime algo :("],							// [15]
  ["jaja!","Buena esa!","jeje"],                                        // [16]
  ["Soy una asistente virtual", 
   "Informo a las personas sobre el curso de Programacion del CCT 6-018"], // [17]
  ["De lunes a viernes de 18:30 a 21:00 al (261)423-1350"],                // [18]
  ["Nuestro telefono es (261) 423-1350 de Lunes a Viernes de 18:30 a 21:00"], //[19]
  ["Estamos en Jorge A. Calle 297 de la Ciudad de Mendoza de Lunes a Viernes de 18:30 a 21:00"], 
             //[20]
  ["Para hablar con una persona real, llama al (261)423-1350 de Lunes a Viernes de 18:30 a 21:00"], 
             //[21]
  ["Para hablar por WhatsApp ubica el curso de tu interes y alli encontraras el WhatsApp del profesor. Ve a nuestra web en https://cct6018mendoza.blogspot.com/ (copia y pega el link en tu navegador)"
  ],
             //[22]
  ["Puedes buscar las redes sociales del CCT 6-018 Leonor Lemos en FaceBook e Instagram"
  ],
             //[23]
  ["Deberias llamar a la escuela, abrir la pagina del curso de tu interes o comunicarte con el profesor. Pero casi todos los cursos abren las PRE-INSCRIPCIONES en NOVIEMBRE y la inscripcion definitiva es en FEBRERO"
  ],
             //[24]
  ["Soy Carolina, el bot de consulta del CCT 6-018 Leonor Lemos de Mendoza, Argentina. Somos un Centro de Formacion Profesional y Centro de Capacitacion Laboral que depende del Gobierno de Mendoza (Argentina) a traves de la DGE (Direccion General de Escuelas). Fui programada por el Profesor Ricardo Ponce en Junio del 2025."
  ],
             //[25]
  ["Para la mayor parte de los cursos, las clases empiezan en FEBRERO. Pre-Inscribimos en NOVIEMBRE y la INSCRIPCION DEFINTIVA es a principios de FEBRERO. Muchos cursos tienen cupos limitados. NO te quedes sin tu banco."
  ],
             //[26]
  ["En casi todos los cursos las inscripciones se mantienen abiertas algunos dias despues de iniciar las clases. Pero otros cursos cierran las inscripciones cuando completan los cupos de estudiantes. No te quedes sin tu banco."
  ],
             //[27]
  ["En NOVIEMBRE abrimos el formulario de PRE-INSCRIPCION. Tambien puedes inscribirte personalmente en nuestra institucion a partir de FEBRERO. Para inscribirte necesitas (1) Presentar una copia de las dos caras de tu documento (2) Presentar tu constancia de CUIL (3) Llenar un formulario y firmarlo. El formulario se entrega en Jorge A. Calle 297 de la Ciudad de Mendoza (Argentina). Atendemos de Lunes a Viernes de 18:30 a 21:00 y nuestro telefono es (261) 423-1350."
  ],
             //[28]
  ["Para el curso PROGRAMACION FP INICIAL necesitas titulo secundario. Esto es EXCLUYENTE y es un requisito del Ministerio de Educacion a traves de la DGE (Direccion General de Escuelas)"
  ],
             //[29] 
  ["Necesitas un APTO MEDICO que puede venir de tu medico particular o de un medico de algun Centro de Salud de la Provincia de Mendoza"
  ],
             //[30] 

]

// -------------------------------
// Respuestas Random "no comprendo"
// -------------------------------

const alternative = [
  "No comprendo", 
  "Adelante",
  "Intenta de nuevo",
  "Estoy escuchando",
  "No entiendo :-(",
  "No comprendo :-(",
]

// Temas del usuario específicos
// -----------------------------
 
const coronavirus = ["Mantente inmunizado", "Usa mascarilla", "Afortunadamente a mi no me da COVID", "Son tiempos complicados"]

const curso = ["Tenemos un curso de Programación", "Nuestro curso de Programación?","Quieres saber sobre Programación?"]
 