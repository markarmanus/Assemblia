const MODIFICATION_TYPES = {
    IMPORT: 0,
    CONTENT: 1,
    STYLE: 2,
    ADD_COMPONENT:3,
    DELETE_COMPONENT:4
};

const structureComment = (modificationType, fileName, componentType, id) => {
    if (fileName === null && id === null) {
        return 'Filename or ID can not be null'
    } else {
        switch (modificationType) {
            case MODIFICATION_TYPES.IMPORT:
                return `/* ${fileName}->import */`;
            case MODIFICATION_TYPES.CONTENT:
                return `{/* ${fileName}->return->${id}->CONTENT */}`;
            case MODIFICATION_TYPES.STYLE:
                return `/* ${fileName}->SYTLE->${id} */`;
            case MODIFICATION_TYPES.ADD_COMPONENT:
            case MODIFICATION_TYPES.DELETE_COMPONENT:
                switch (componentType) {
                    case componentType.CONTAINER:
                        return `{/* ${fileName}->return->${id}->CONTAINER */}`;
                    case componentType.TEXT:
                        return `{/* ${fileName}->return->${id}->TEXT */}`;
                    case componentType.BUTTON:
                        return `{/* ${fileName}->return->${id}->BUTTON */}`;
                    default:
                        return `Unknown component type ${fileName}`;
                }
            default:
                return `Unknown modification type in ${fileName}`;
        }
    }// return `${fileName}->return`
};

module.exports = { MODIFICATION_TYPES, structureComment };
