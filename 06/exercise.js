const studentsArray = ['Luis', 'Federico', 'Clàudia', 'Mario', 'Fran', 'Veronica'];

// 👀 Añade el código necesario para que todos los elementos de 'studentsArray' se conviertan en 'Elon' usando un bucle for.
// 📝

// Aquí los estudiantes deben modificar el array usando un bucle for
/* Option 1 */
for (const i in studentsArray) {
  studentsArray[i] = "Elon";
}
/* Option 2 */
// for (let i = 0; i < studentsArray.length; i++) {
//   studentsArray[i] = "Elon";
// }

// Do not edit below this line
module.exports = studentsArray;
