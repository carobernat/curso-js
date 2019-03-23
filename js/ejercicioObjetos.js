function Videogame(title, year, console){
    var launchYear = 2000;
    this.title = title;
    this.year = year;
    this.console = console;

    if(year <= launchYear) {
        this.isRetro = true;
    } else {
        this.isRetro = false;
    }
}


var pacman = new Videogame("PacMan", "1980", "Atari");

console.log(pacman);
