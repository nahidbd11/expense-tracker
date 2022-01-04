const { series, watch, src, dest, task } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

//task name
// task('taskname', function () {
//      return ....
//  })
function compileSass() {
	return src("src/sass/**/*.scss").pipe(sass()).pipe(dest("src/css/"));
}

function watchingTask() {
	return watch("src/sass/**/*.scss", series(compileSass));
}

exports.default = series(compileSass, watchingTask);
