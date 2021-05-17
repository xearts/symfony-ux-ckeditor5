# symfony-ux-ckeditor5

## Installation

### Download using composer
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


### install javascript codes

```bash
$ yarn install --force
```


## Usage
TODO