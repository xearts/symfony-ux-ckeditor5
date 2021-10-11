/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

import { Controller } from 'stimulus';

import Ckeditor from "./ckeditor";

export default class extends Controller {
    static values = {
        config: Object,
        language: String,
        imageUploadCsrfToken: String,
        imageUploadUrl: String,
    }

    connect() {
        this.build();
    }

    build() {
        let config = this.configValue;
        config['simpleUpload'] = {
            // The URL that the images are uploaded to.
            uploadUrl: this.imageUploadUrlValue,

            // // Enable the XMLHttpRequest.withCredentials property.
            // withCredentials: true,

            // Headers sent along with the XMLHttpRequest to the upload server.
            headers: {
                'X-CSRF-TOKEN': this.imageUploadCsrfTokenValue
            }
        };
        if (this.languageValue) {
            config['language'] = this.languageValue;
            // require('../ckeditor5/build/translations/' + this.languageValue)
        }
        Ckeditor
          .create(this.element, config)
          .then(editor => {
              // console.log(Array.from( editor.ui.componentFactory.names() ))
          })
          .catch( error => {
              console.error( error );
          });

    }
}
