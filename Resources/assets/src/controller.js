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

import ClassicEditor from "../ckeditor/dist/ckeditor";

export default class extends Controller {
    static values = {
        config: Object,
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
        ClassicEditor
          .create(this.element, config)
          .then(editor => {
              console.log( editor );
          })
          .catch( error => {
              console.error( error );
          });
    }
}
