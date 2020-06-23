var gulp = require("gulp");
var fs = require("fs");

fs.readdirSync(__dirname + "/gulp").forEach(function(task){
  require("./gulp/" + task);
});

gulp.task("watch:js", function(){
  gulp.series("js");
  gulp.watch("ng/**/*.js", gulp.series("js"));
});

gulp.task("watch:css", function(){
  gulp.series("css");
  gulp.watch("css/**/*.styl", gulp.series("css"));
});

gulp.task("compile", gulp.parallel("js", "css"));

gulp.task("dev", gulp.parallel("compile", "watch:js", "watch:css", "dev:server"));
