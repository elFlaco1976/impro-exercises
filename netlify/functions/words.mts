import type { Context } from '@netlify/functions';

export default async (_req: Request, _context: Context) => {
  // prettier-ignore
  const spanishWords = [
    // Nouns
    "casa", "tiempo", "año", "día", "vida", "mano", "trabajo", "hora", "momento", "forma",
    "parte", "persona", "cosa", "mundo", "país", "lugar", "hombre", "mujer", "niño", "gente",
    "familia", "amigo", "ciudad", "calle", "puerta", "mesa", "libro", "palabra", "historia", "idea",
    "agua", "comida", "aire", "sol", "luna", "estrella", "árbol", "flor", "animal", "perro",
    "gato", "pájaro", "coche", "tren", "avión", "barco", "teléfono", "ordenador", "papel", "lápiz",
  
    // Verbs
    "ser", "estar", "tener", "hacer", "decir", "ir", "ver", "dar", "saber", "querer",
    "llegar", "pasar", "deber", "poner", "parecer", "quedar", "creer", "hablar", "llevar", "dejar",
    "seguir", "encontrar", "pensar", "volver", "conocer", "vivir", "sentir", "mirar", "contar", "empezar",
    "esperar", "buscar", "existir", "entrar", "trabajar", "escribir", "perder", "producir", "ocurrir", "entender",
    "pedir", "recibir", "recordar", "terminar", "permitir", "aparecer", "conseguir", "comenzar", "servir", "sacar",
  
    // Adjectives
    "grande", "pequeño", "alto", "bajo", "largo", "corto", "ancho", "estrecho", "gordo", "delgado",
    "fuerte", "débil", "rápido", "lento", "caliente", "frío", "duro", "suave", "dulce", "amargo",
    "claro", "oscuro", "fácil", "difícil", "importante", "necesario", "posible", "imposible", "cierto", "falso",
    "bueno", "malo", "mejor", "peor", "feliz", "triste", "alegre", "enojado", "tranquilo", "nervioso",
    "cansado", "descansado", "ocupado", "libre", "rico", "pobre", "caro", "barato", "nuevo", "viejo",
  
    // More nouns
    "escuela", "universidad", "hospital", "tienda", "restaurante", "parque", "playa", "montaña", "río", "mar",
    "bosque", "desierto", "isla", "continente", "país", "nación", "gobierno", "ley", "policía", "médico",
    "profesor", "estudiante", "amigo", "vecino", "jefe", "empleado", "cliente", "paciente", "artista", "escritor",
    "músico", "actor", "director", "pintor", "científico", "ingeniero", "abogado", "juez", "periodista", "cocinero",
  
    // More verbs
    "comer", "beber", "dormir", "despertar", "caminar", "correr", "saltar", "nadar", "volar", "conducir",
    "cocinar", "limpiar", "lavar", "planchar", "coser", "construir", "reparar", "romper", "abrir", "cerrar",
    "comprar", "vender", "pagar", "ganar", "perder", "ahorrar", "gastar", "invertir", "prestar", "deber",
    "estudiar", "aprender", "enseñar", "leer", "escribir", "dibujar", "pintar", "cantar", "bailar", "tocar",
  
    // More adjectives
    "hermoso", "feo", "bonito", "horrible", "agradable", "desagradable", "cómodo", "incómodo", "seguro", "peligroso",
    "sano", "enfermo", "limpio", "sucio", "ordenado", "desordenado", "lleno", "vacío", "abierto", "cerrado",
    "público", "privado", "famoso", "desconocido", "popular", "impopular", "moderno", "antiguo", "joven", "viejo",
    "inteligente", "tonto", "sabio", "ignorante", "educado", "maleducado", "amable", "grosero", "generoso", "egoísta"
  ];

  const randomWord =
    spanishWords[Math.floor(Math.random() * spanishWords.length)];

  return new Response(JSON.stringify({ name: randomWord }));
};
