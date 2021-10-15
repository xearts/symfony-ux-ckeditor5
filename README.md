# symfony-ux-ckeditor5

## Installation

### Download using composer
Add repository url to your composer.json
```json
    "repositories": {
        "xearts/symfony-ux-ckeditor5": {
            "type": "github",
            "url": "https://github.com/xearts/symfony-ux-ckeditor5.git"
        }
    }
```

Require the bundle with composer :
```bash
$ composer require xearts/symfony-ux-ckeditor5
```

### Enable the bundle

Enable the bundle in the kernel :

```php
// config/bundles.php
return [
    // ...
    Xearts\Symfony\UX\Ckeditor5\XeartsCkeditor5Bundle::class => ['all' => true],
];
```

### Enable stimulus controller

Add package to package.json :

```
  // package.json
  // ...
  "devDependencies": {
    // ...
    "@xearts/symfony-ux-ckeditor5": "file:vendor/xearts/symfony-ux-ckeditor5/Resources/assets",
    // ...
  }
```

Add controler to assets/controllers

```
    "controllers": {
        // ...
        "@xearts/sumfony-ux-ckeditor5": {
            "ckeditor5": {
                "enabled": true,
                "fetch": "eager"
            }
        }
    },

```

### assets build setting
Install dependency
```bash
$ yarn install --force
```



Add ckeditor5 encore setting to webpack.config.json
```javascript

const CKEditorWebpackPlugin = require( '@ckeditor/ckeditor5-dev-webpack-plugin' );
const { styles: ckeditorstyles } = require( '@ckeditor/ckeditor5-dev-utils' );

// ...
// ...
Encore
    // ...
    // ...
    
    
    .addPlugin( new CKEditorWebpackPlugin({
        // See https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
        language: 'ja',
        additionalLanguages: ['en'],
        addMainLanguageTranslationsToAllAssets: true
    }))

    // Use raw-loader for CKEditor 5 SVG files.
    .addRule({
        test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
        loader: 'raw-loader'
    })

    // Configure other image loaders to exclude CKEditor 5 SVG files.
    .configureLoaderRule('images', loader => {
        loader.exclude = /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/;
    })

    // Configure PostCSS loader.
    .addLoader({
        test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
        loader: 'postcss-loader',
        options: ckeditorstyles.getPostCssConfig({
            themeImporter: {
                themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
            }
        })
    })


```


## Usage
TODO
