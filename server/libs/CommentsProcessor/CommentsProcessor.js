const MODIFICATION_TYPES = {
    IMPORT: 0,
    CONTENT: 1,
    STYLE: 2,
    ADD_COMPONENT:3,
    DELETE_COMPONENT:4
};

const structureComment = (modificationType, fileName, componentType, id) => {
    let comment = `${fileName}->${id}->`;
    switch (modificationType) {
        case MODIFICATION_TYPES.IMPORT:
            comment += `IMPORT->${fileName}`;
            break;
        case MODIFICATION_TYPES.CONTENT:
            comment += `CONTENT`;
            break;
        case MODIFICATION_TYPES.STYLE:
            comment += `SYTLE`;
            break;
        case MODIFICATION_TYPES.ADD_COMPONENT:
        case MODIFICATION_TYPES.DELETE_COMPONENT:
            switch (componentType) {
                case componentType.DIV:
                    comment += `DIV->RETURN`;
                    break;
                case componentType.CONTAINER:
                    comment += `CONTAINER`;
                    break;
                case componentType.BUTTON:
                    comment += `BUTTON`;
                    break;
                default:
                    comment += `Unknown component type`;
                    break;
            }
            break;
        default:
            comment += `Unknown modification type in ${fileName}.`;
            break;
    }
    return comment;
    // return `${fileName}->return`
};

module.exports = { MODIFICATION_TYPES, structureComment };
