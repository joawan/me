# /me

Built with [Yeoman webapp generator](https://github.com/yeoman/generator-webapp), using [grunt](http://gruntjs.com/), [bower](http://bower.io/) and [compass](http://compass-style.org/).

### Tasks
```
$ grunt serve
```
 Setups server, watchers and livereload for faster coding

```
$ grunt test
```
 Runs tests

```
$ grunt build
```
 Builds, concats, minifies, ..., to dist directory

```
$ grunt deploy
```
 Builds, concats, minifies, ..., to dist directory, and then deploys to S3. Requires aws,json file.