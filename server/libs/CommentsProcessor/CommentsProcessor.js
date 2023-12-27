const MODIFICATION_TYPES = {
    IMPORT: 0,
    CONTENT: 1,
    STYLE: 2,
    ADD_COMPONENT:3,
    DELETE_COMPONENT:4
};

const structureComment = (modificationType, fileName, componentType, id) => {
    if (fileName == null || modificationType == null) {
        return 'Filename or modificationType can not be null'
    } else {
        if ( fileName.includes('.css') && id != null ) {
            if (id) {
                return 'id can not be null'
            } else {
                return `/* ${fileName}->css->${id} */`
            }
        } else if (fileName.includes('.css')  ){
            switch (modificationType) {
                case MODIFICATION_TYPES.IMPORT:
                    return `/* ${fileName}->import */`;
                case MODIFICATION_TYPES.CONTENT:
                    return `{/* ${fileName}->return->content->${id} */}`;
                case MODIFICATION_TYPES.STYLE:
                    return `/* ${fileName}->style->${id} */`;
                case MODIFICATION_TYPES.ADD_COMPONENT:
                case MODIFICATION_TYPES.DELETE_COMPONENT:
                    if (componentType && id ) {
                        return 'componentType or id can not be null'
                    } else {
                        return `{/* ${fileName}->return->${componentType}->${id} */}`;
                    }
                default:
                    return `Unknown modification type in ${fileName}`;
            }
        }// return `${fileName}->return`
    }
};

module.exports = { MODIFICATION_TYPES, structureComment };
