**题目1：** 如何全局安装一个 node 应用?

```
npm install -g xx 
```

**题目2：** package.json 有什么作用？

每个项目的根目录下面，一般都有一个`package.json`文件，定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。`npm install`命令根据这个配置文件，自动下载所需的模块，也就是配置项目所需的运行和开发环境。

`package.json`文件就是一个JSON对象，该对象的每一个成员就是当前项目的一项设置。比如`name`就是项目名称，`version`是版本（遵守“大版本.次要版本.小版本”的格式）。

- `scripts`指定了运行脚本命令的npm命令行缩写，比如start指定了运行`npm run start`时，所要执行的命令。

- `dependencies`字段指定了项目运行所依赖的模块，`devDependencies`指定项目开发所需要的模块。

  它们都指向一个对象。该对象的各个成员，分别由模块名和对应的版本要求组成，表示依赖的模块及其版本范围。

- `peerDependencies`字段，就是用来供插件指定其所需要的主工具的版本。

- bin项用来指定各个内部命令对应的可执行文件的位置。

- `main`字段指定了加载的入口文件，`require('moduleName')`就会加载这个文件。这个字段的默认值是模块根目录下面的`index.js`。

- `config`字段用于添加命令行的环境变量。

- browser指定该模板供浏览器使用的版本。Browserify这样的浏览器打包工具，通过它就知道该打包那个文件。

- `engines`字段指明了该模块运行的平台，比如 Node 的某个版本或者浏览器。

- man用来指定当前模块的man文档的位置。

- preferGlobal的值是布尔值，表示当用户不将该模块安装为全局模块时（即不用–global参数），要不要显示警告，表示该模块的本意就是安装为全局模块。

- style指定供浏览器使用时，样式文件所在的位置。样式文件打包工具parcelify，通过它知道样式文件的打包位置。

**题目3：** `npm install --save app` 与 `npm install --save-dev app`有什么区别?

`npm install module-name --save` 会将dependencies部分,也就是运行所依赖的文件一起下载下来。
`npm install module-name --save-dve` 会将devdependencies部分，也就是开发所依赖的文件一起下载下来。

**题目4：** `node_modules`的查找路径是怎样的?

首先在当前目录查找，如果找不到就一直往上找，一直找到家目录，如果还没有的话就继续往上找，一直到根目录。

**题目5：** npm3与 npm2相比有什么改进？yarn和 npm 相比有什么优势? (选做题目)

npm都出到5了，不做了。

**题目6：** webpack是什么？和其他同类型工具比有什么优势？

webpack是一个“模块打包工具”，它可以编译各种语言成为浏览器可以执行的css，js，html；也可以模块化引入文件进行压缩合并等操作，还可以通过插件来实现一些其他的前端工作流操作例如将文件名加上hash以避免缓存等。
它具有以下优势

- 代码拆分

  Webpack 有两种组织模块依赖的方式，同步和异步。异步依赖作为分割点，形成一个新的块。在优化了依赖树后，每一个异步区块都作为一个文件被打包。
  Loader
  Webpack 本身只能处理原生的 JavaScript 模块，但是 loader 转换器可以将各种类型的资源转换成 JavaScript 模块。这样，任何资源都可以成为 Webpack 可以处理的模块。

- 智能解析

  Webpack 有一个智能解析器，几乎可以处理任何第三方库，无论它们的模块形式是 CommonJS、 AMD 还是普通的 JS 文件。甚至在加载依赖的时候，允许使用动态表达式 require(“./templates/“ + name + “.jade”)。

- 插件系统

  Webpack 还有一个功能丰富的插件系统。大多数内容功能都是基于这个插件系统运行的，还可以开发和使用开源的 Webpack 插件，来满足各式各样的需求。

- 快速运行

  Webpack 使用异步 I/O 和多级缓存提高运行效率，这使得 Webpack 能够以令人难以置信的速度快速增量编译。

**题目7：**npm script是什么？如何使用？

npm 允许在`package.json`文件里面，使用`scripts`字段定义脚本命令。这些定义在`package.json`里面的脚本，就称为 npm 脚本。

```
{
  // ...
  "scripts": {
    "build": "node build.js"
  }
}
```

优点

- 项目的相关脚本，可以集中在一个地方。
- 不同项目的脚本命令，只要功能相同，就可以有同样的对外接口。用户不需要知道怎么测试你的项目，只要运行`npm run test`即可。
- 可以利用 npm 提供的很多辅助功能。

查看当前项目的所有 npm 脚本命令，可以使用不带任何参数的`npm run`命令。

使用

npm 脚本的原理非常简单。每当执行`npm run`，就会自动新建一个 Shell，在这个 Shell 里面执行指定的脚本命令。因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。

比较特别的是，`npm run`新建的这个 Shell，会将当前目录的`node_modules/.bin`子目录加入`PATH`变量，执行结束后，再将`PATH`变量恢复原样。

这意味着，当前目录的`node_modules/.bin`子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径。比如，当前项目的依赖里面有 Mocha，只要直接写`mocha test`就可以了。

由于 npm 脚本的唯一要求就是可以在 Shell 执行，因此它不一定是 Node 脚本，任何可执行文件都可以写在里面。

npm 脚本的退出码，也遵守 Shell 脚本规则。如果退出码不是`0`，npm 就认为这个脚本执行失败。

**题目8：** 使用 webpack 替换 入门-任务15中模块化使用的 requriejs

> https://github.com/htkz/test-jirengu/tree/master/code/senior/task5/task4-demo

不知道为什么不能预览，不过在本地运行没有问题。

**题目9：**gulp是什么？使用 gulp 实现图片压缩、CSS 压缩合并、JS 压缩合并

*Gulp*.js 是一个基于 Node.js 构建的自动化构建工具,开发者可以使用它在项目开发过程中自动执行常见任务。

```javascript
var gulp = require('gulp');

var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jslint');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');

// CSS 压缩合并
gulp.task('css', function() {
    gulp.src('./src/css/*.css')
        .pipe(concat('index-merge.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css/'))
})

// JS 压缩合并
gulp.task('js', function() {
    gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(concat('merge.js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
        .pipe(jshint.reporter('default'))
})

// 图片压缩
gulp.task('img', function() {
    gulp.src('./src/imgs/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/imgs/'))
})

gulp.task('build', ['css', 'js', 'img'])
```

**题目10：** 开发一个 node 命令行天气应用用于查询用户当前所在城市的天气，发布到 npm 上去。可以通过如下方式安装使用(可使用api.jirengu.com里提供的查询天气接口) (选做题目)

```
npm install -g htkz-weather@1.0.4
```

