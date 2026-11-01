/***************************
 * This function manages the front end file upload logic.
 ***************************/
class FileUploadValidator {
    constructor(args) {
        if (!args) args = {};
        this.isFaculty = args.isFaculty || false;
        this.maxSize = args.maxSize || 15728640;
        this.helpLink = args.studentPage
            ? 'https://help.cengage.com/webassign/student_guide/?t=file-upload'
            : 'https://help.cengage.com/webassign/instructor_guide/?t=file-upload';
    }

    allowedFacultyExtensions() {
        return ['cmbl', 'mol', 'mp4', 'pdb', 'pl', 'cap', 'pm', 'ows'];
    }

    allowedSpreadsheetExtensions() {
        return ['xls', 'xlsx', 'csv', 'tsv', 'ods'];
    }

    allowedUploadExtensions() {
        return [
            'bmp',
            'c',
            'cpp',
            'csv',
            'tsv',
            'doc',
            'docx',
            'gif',
            'h',
            'heic',
            'hevc',
            'html',
            'jpeg',
            'jpg',
            'm',
            'mat',
            'mov',
            'mp4',
            'mw',
            'mws',
            'nb',
            'ods',
            'odt',
            'pdf',
            'png',
            'pptx',
            'py',
            'txt',
            'xls',
            'xlsx',
            'cap',
        ];
    }

    validate(type, file) {
        switch (type) {
            case 'spreadsheet':
                return fileUploadValidator.validationForSpreadsheet(file);
            default:
                return [];
        }
    }

    validateQuestionAnswer(input) {
        this._destroyPreviousError();
        var file = input.files[0];
        var path = file.name;
        var supported = this.allowedUploadExtensions();
        if (this.isFaculty) {
            supported = supported.concat(this.allowedFacultyExtensions());
        }
        var errors = [];

        if (this._isFileTooLarge(file)) {
            errors.push('It is larger than the maximum allowable file size.');
        }
        if (!this._isFileExtensionAllowed(path, supported)) {
            errors.push('It is not an allowable file type.');
        }
        if (
            !this._isAllowedCharacters(path) ||
            !this._isExtensionUnique(path)
        ) {
            errors.push('It is not consistent with Cengage filename rules.');
        }

        if (errors.length) {
            input.value = '';
            this._renderError({ errors, element: input });
        }
    }

    validateShowMyWork(file) {
        var path = file.name;
        var supported = this.allowedUploadExtensions();
        var errors = [];

        if (!this._isFileExtensionAllowed(path, supported)) {
            errors.push('InvalidExtensionError');
        }
        if (
            !this._isAllowedCharacters(path) ||
            !this._isExtensionUnique(path)
        ) {
            errors.push('InvalidFilenameError');
        }

        return errors;
    }

    validationForSpreadsheet(input) {
        var file = input.files[0];
        var filename = file.name;

        var errors = [];
        var supported = fileUploadValidator.allowedSpreadsheetExtensions();
        if (!fileUploadValidator._isFileExtensionAllowed(filename, supported)) {
            errors.push(
                'The supported file extensions are ' +
                    supported.join(', ') +
                    '.',
            );
        }

        if (this._isFileTooLarge(file)) {
            errors.push('It is larger than the maximum allowable file size.');
        }
        if (
            !this._isAllowedCharacters(filename) ||
            !this._isExtensionUnique(filename)
        ) {
            errors.push('It is not consistent with Cengage filename rules.');
        }
        if (errors.length) {
            this._renderError({ errors, element: input });
            return false;
        }

        return true;
    }

    _isFileExtensionAllowed(path, supported) {
        var isAllowed = false;
        supported.forEach(extension => {
            var extensionSearch = new RegExp('\\.' + extension + '$', 'i');
            if (path.match(extensionSearch)) {
                isAllowed = true;
            }
        });
        return isAllowed;
    }

    _isExtensionUnique(path) {
        var isAllowed = true;
        if (path.match(/\./g).length > 1) {
            isAllowed = false;
        }
        return isAllowed;
    }

    _isAllowedCharacters(path) {
        var isAllowed = true;
        //Latin alphabet and "." are accepted charaters
        //Important to note that spaces, underscores, and hyphens are allowed per security team
        if (
            !path.match(
                /^([A-Za-z][\u0300-\u0333]|[A-Za-z0-9.\-_\s\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff])*$/,
            )
        ) {
            isAllowed = false;
        }
        return isAllowed;
    }

    _isFileTooLarge(file) {
        if (file.size > this.maxSize) {
            return true;
        }
        return false;
    }

    _renderError(args) {
        const { errors, element } = args;
        jQuery(`#${element.id}`).after(
            `
                <div class="warning" id="file_upload_validation_warning">
                    <br>
                    <br>
                    <div style="color: red;">
                        The file cannot be uploaded for the following reasons:
                        <ul>
                            ${errors.map(e => `<li>${e}</li>`).join(' ')}
                        </ul>
                    </div>
                    <a onclick="window.open('${
                        this.helpLink
                    }')">More Information</a>
                </div>
                `,
        );
    }

    _destroyPreviousError() {
        jQuery('#file_upload_validation_warning').remove();
    }
}

var fileUploadValidator = new FileUploadValidator();
