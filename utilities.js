/*function clickOMatic() {
    alert("Hello!");
}
let clickOMatic = function() {
    alert("hello!");
};
let clickOMatic = () => alert("Hello");
*/
function rando() {
    const names = ['Keertana', 'Selina', 'Katie', 'Teja', 'Anvita', 'Kiana', 'Lalith', 'Anish', 'Rabia', 'Maddie'];
    return {
      get name() {
        return names[Math.floor(Math.random() * names.length)];
      },
    }
  }