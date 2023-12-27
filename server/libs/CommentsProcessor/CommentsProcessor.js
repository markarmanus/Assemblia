const MODIFICATION_TYPES = {
    IMPORT: 0,
    CONTENT: 1,
    STYLE: 2,
    ADD_COMPONENT:3,
    DELETE_COMPONENT:4
};

const structureComment = (modificationType, fileName, componentType, id) => {
    return `${fileName}->return`
};

module.exports = { MODIFICATION_TYPES, structureComment };
