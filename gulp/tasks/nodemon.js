import config      from '../config';
import gulp        from 'gulp';
import nodemon    from 'gulp-nodemon';

gulp.task('nodemon', function (cb) {
  return nodemon({
    exec: 'node-inspector & node --debug',
    script: 'server/server.js',
    watch: config.nodemon.src,
    env: {
      'PORT': config.nodemon.port
    }
  })
    .once('start', cb);
});
