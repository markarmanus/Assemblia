const MODIFICATION_TYPES = {
    IMPORT: 0,
    CONTENT: 1,
    STYLE: 2,
    ADD_COMPONENT:3,
    DELETE_COMPONENT:4
};

const structureComment = (modificationType, fileName, componentType, id) => {
    switch (modificationType) {
        case MODIFICATION_TYPES.IMPORT:
            return `/* IMPORT->${fileName} */`;
        case MODIFICATION_TYPES.CONTENT:
            return `/* ${fileName}->CONTENT->${id} */`;
        case MODIFICATION_TYPES.STYLE:
            return `/* ${fileName}->SYTLE->${id} */`;
        case MODIFICATION_TYPES.ADD_COMPONENT:
        case MODIFICATION_TYPES.DELETE_COMPONENT:
            switch (componentType) {
                case componentType.DIV:
                    return `/* ${fileName}->DIV->${id} */`;
                case componentType.CONTAINER:
                    return `/* ${fileName}->CONTAINER->${id} */`;
                case componentType.BUTTON:
                    return `/* ${fileName}->BUTTON->${id} */`;
                default:
                    return `Unknown component type ${fileName}`;
            }
        default:
            return `Unknown modification type in ${fileName}`;
    }
    // return `${fileName}->return`
};

module.exports = { MODIFICATION_TYPES, structureComment };
